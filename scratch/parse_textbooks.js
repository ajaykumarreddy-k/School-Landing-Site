import fs from 'fs';

const content = fs.readFileSync('/home/prince/ProjectsMain/SCHOOL WEBSITE/rayalaseema-high-school (1)/Text Book download script/textbook_links.md', 'utf-8');
const lines = content.split('\n').filter(l => l.includes('|') && !l.includes('CLASS | SUBJECT'));

const data: any = {};

lines.forEach(line => {
    const parts = line.split('|').map(p => p.trim());
    if (parts.length < 5) return;
    const cls = parts[1];
    const subject = parts[2];
    const name = parts[3];
    const urlMatch = parts[4].match(/\((.*?)\)/);
    const url = urlMatch ? urlMatch[1] : '';

    if (!cls || isNaN(parseInt(cls))) return;

    if (!data[cls]) data[cls] = [];
    data[cls].push({ subject, name, url });
});

// Sort each class: Textbooks first, then Workbooks
for (const cls in data) {
    data[cls].sort((a: any, b: any) => {
        const isAWorkbook = a.name.toLowerCase().includes('workbook');
        const isBWorkbook = b.name.toLowerCase().includes('workbook');
        if (isAWorkbook && !isBWorkbook) return 1;
        if (!isAWorkbook && isBWorkbook) return -1;
        return a.subject.localeCompare(b.subject);
    });
}

const output = `export const TEXTBOOKS_DATA: Record<number, { subject: string; name: string; url: string }[]> = ${JSON.stringify(data, null, 2)};`;

fs.writeFileSync('/home/prince/ProjectsMain/SCHOOL WEBSITE/rayalaseema-high-school (1)/src/data/textbooks.ts', output);
console.log('Generated src/data/textbooks.ts');
