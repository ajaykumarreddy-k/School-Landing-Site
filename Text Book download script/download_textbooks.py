import os
import requests
from bs4 import BeautifulSoup
import urllib.parse

def download_textbooks():
    url = "https://cse.ap.gov.in/textBooksDownloadingPageTEBilingual"
    base_url = "https://cse.ap.gov.in"
    base_dir = "downloads"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
        print(f"Created directory: {base_dir}")

    print(f"Fetching page: {url}")
    try:
        # Using verify=False due to SSL issues on the government site
        response = requests.get(url, headers=headers, verify=False, timeout=30)
        response.raise_for_status()
    except Exception as e:
        print(f"Error fetching page: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all tables and look for the one with textbooks
    tables = soup.find_all('table')
    print(f"Found {len(tables)} tables on the page.")
    
    target_table = None
    for table in tables:
        headers_found = [th.text.strip() for th in table.find_all('th')]
        if not headers_found:
            # Try looking at the first row for headers if <th> isn't used
            first_row = table.find('tr')
            if first_row:
                headers_found = [td.text.strip() for td in first_row.find_all('td')]
        
        if any(h in ["CLASS", "SUBJECT", "BOOK NAME"] for h in headers_found):
            target_table = table
            print(f"Target table identified with headers: {headers_found}")
            break

    if not target_table:
        print("Could not identify the textbook table.")
        # Fallback: just use the first table if found
        if tables:
            target_table = tables[0]
            print("Falling back to the first table found.")
        else:
            return

    rows = target_table.find_all('tr')
    print(f"Processing {len(rows)} potential rows...")

    count = 0
    for row in rows:
        cols = row.find_all('td')
        if len(cols) < 4:
            continue
            
        class_name = cols[0].text.strip()
        # Skip header row if it contains the word "CLASS"
        if class_name == "CLASS":
            continue
            
        subject = cols[1].text.strip()
        book_name = cols[2].text.strip()
        link_tag = cols[3].find('a')
        
        if not link_tag:
            continue
            
        href = link_tag.get('href')
        if not href:
            continue
            
        # Handle relative URLs
        download_url = urllib.parse.urljoin(base_url, href)
            
        # Clean class name for folder name
        folder_name = f"Class_{class_name.replace(' ', '_')}"
        class_dir = os.path.join(base_dir, folder_name)
        
        if not os.path.exists(class_dir):
            os.makedirs(class_dir)
            
        # Create a safe filename
        safe_subject = "".join([c if c.isalnum() or c in (' ', '_', '-') else '_' for c in subject]).strip()
        safe_book_name = "".join([c if c.isalnum() or c in (' ', '_', '-') else '_' for c in book_name]).strip()
        filename = f"{safe_subject}_{safe_book_name}.pdf"
        filepath = os.path.join(class_dir, filename)
        
        if os.path.exists(filepath):
            # print(f"Skipping (already exists): {filename}")
            continue

        print(f"Downloading: {filename} (Class {class_name})")
        try:
            # Some links might be direct PDFs, others might be download triggers
            pdf_response = requests.get(download_url, headers=headers, stream=True, verify=False, timeout=60)
            pdf_response.raise_for_status()
            
            with open(filepath, 'wb') as f:
                for chunk in pdf_response.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f"   Done.")
            count += 1
        except Exception as e:
            print(f"   Failed to download {filename}: {e}")

    print(f"\nTask complete. Total files downloaded in this run: {count}")

if __name__ == "__main__":
    # Disable insecure request warnings for cleaner output
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    download_textbooks()
