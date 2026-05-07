import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookText, Download, ChevronRight, Languages, Calculator, Atom, Microscope, Globe, X, Eye, BookOpen } from 'lucide-react';

const TEXTBOOKS_DATA: Record<number, { subject: string; name: string; url: string }[]> = {
  "1": [
    { "subject": "Telugu", "name": "Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/1_Telugu_Textbook.pdf/1" },
    { "subject": "English", "name": "1_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/1_English_Textbook.pdf/1" },
    { "subject": "Maths", "name": "1_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/1_Maths_SEM-1_Textbook.pdf/1" },
    { "subject": "Maths", "name": "1_Maths_SEM-2_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/1_Maths_SEM-2_Textbook.pdf/1" }
  ],
  "2": [
    { "subject": "Telugu", "name": "2_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/2_Telugu_Textbook.pdf/2" },
    { "subject": "English", "name": "2_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/2_English_Textbook.pdf/2" },
    { "subject": "Maths", "name": "2_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/2_Maths_SEM-1_Textbook.pdf/2" },
    { "subject": "Maths", "name": "2_Maths_SEM-2_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/2_Maths_SEM-2_Textbook.pdf/2" }
  ],
  "3": [
    { "subject": "Telugu", "name": "3_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/3_Telugu_Textbook.pdf/3" },
    { "subject": "English", "name": "3_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/3_English_Textbook.pdf/3" }
  ],
  "4": [
    { "subject": "Telugu", "name": "4_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/4_Telugu_Textbook.pdf/4" },
    { "subject": "English", "name": "4_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/4_English_Textbook.pdf/4" },
    { "subject": "Maths", "name": "4_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/4_Maths_SEM-1_Textbook.pdf/4" },
    { "subject": "EVS", "name": "4_EVS_SEM-1_TB", "url": "https://cse.ap.gov.in/downloadBooks/EVS%20Books/4_EVS_SEM-1_TB.pdf/4" }
  ],
  "5": [
    { "subject": "Telugu", "name": "5_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/5_Telugu_Textbook.pdf/5" },
    { "subject": "English", "name": "5_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/5_English_Textbook.pdf/5" },
    { "subject": "Maths", "name": "5_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/5_Maths_SEM-1_Textbook.pdf/5" },
    { "subject": "EVS", "name": "5_EVS_SEM-1_TB", "url": "https://cse.ap.gov.in/downloadBooks/EVS%20Books/5_EVS_SEM-1_TB.pdf/5" }
  ],
  "6": [
    { "subject": "Telugu", "name": "6_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/6_Telugu_Textbook.pdf/6" },
    { "subject": "Hindi", "name": "6_Hindi_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Hindi%20Books/6_Hindi_Textbook.pdf/6" },
    { "subject": "English", "name": "6_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/6_English_Textbook.pdf/6" },
    { "subject": "Maths", "name": "6_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/6_Maths_SEM-1_Textbook.pdf/6" },
    { "subject": "Science", "name": "6_Science_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Science%20Books/6_Science_SEM-1_Textbook.pdf/6" },
    { "subject": "Social", "name": "6_Soical_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Social%20Books/6_Soical_SEM-1_Textbook.pdf/6" }
  ],
  "7": [
    { "subject": "Telugu", "name": "7_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/7_Telugu_Textbook.pdf/7" },
    { "subject": "Hindi", "name": "7_Hindi_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Hindi%20Books/7_Hindi_Textbook.pdf/7" },
    { "subject": "English", "name": "7_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/7_English_Textbook.pdf/7" },
    { "subject": "Maths", "name": "7_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/7_Maths_SEM-1_Textbook.pdf/7" },
    { "subject": "Science", "name": "7_Science_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Science%20Books/7_Science_SEM-1_Textbook.pdf/7" },
    { "subject": "Social", "name": "7_Soical_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Soical%20Books/7_Soical_SEM-1_Textbook.pdf/7" }
  ],
  "8": [
    { "subject": "Telugu", "name": "8_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/8_Telugu_Textbook.pdf/8" },
    { "subject": "Hindi", "name": "8_Hindi_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Hindi%20Books/8_Hindi_Textbook.pdf/8" },
    { "subject": "English", "name": "8_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/8_English_Textbook.pdf/8" },
    { "subject": "English", "name": "8_English_Nonditail", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/8_English_Nonditail.pdf/8" },
    { "subject": "Maths", "name": "8_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/8_Maths_SEM-1_Textbook.pdf/8" },
    { "subject": "Physics", "name": "8_Physics_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Physics%20Books/8_Physics_SEM-1_Textbook.pdf/8" },
    { "subject": "Physics", "name": "8_Physics_SEM-2_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Physics%20Books/8_Physics_SEM-2_Textbook.pdf/8" },
    { "subject": "Biology", "name": "8_Biology_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Biology%20Books/8_Biology_SEM-1_Textbook.pdf/8" },
    { "subject": "Biology", "name": "8_Biology_SEM-2_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Biology%20Books/8_Biology_SEM-2_Textbook.pdf/8" },
    { "subject": "Social", "name": "8_Social_History_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Social%20Books/8_Social_History_Textbook.pdf/8" }
  ],
  "9": [
    { "subject": "Telugu", "name": "9_Telugu_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/9_Telugu_Textbook.pdf/9" },
    { "subject": "Hindi", "name": "9_Hindi_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Hindi%20Books/9_Hindi_Textbook.pdf/9" },
    { "subject": "English", "name": "9_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/9_English_Textbook.pdf/9" },
    { "subject": "Maths", "name": "9_Maths_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/9_Maths_SEM-1_Textbook.pdf/9" },
    { "subject": "Maths", "name": "9_Maths_SEM-2_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/9_Maths_SEM-2_Textbook.pdf/9" },
    { "subject": "Physics", "name": "9_Physics_SEM-1_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Physics%20Books/9_Physics_SEM-1_Textbook.pdf/9" },
    { "subject": "Physics", "name": "9_Physics_SEM-2_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Physics%20Books/9_Physics_SEM-2_Textbook.pdf/9" },
    { "subject": "Biology", "name": "9_Biology_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/Biology%20Books/9_Biology_Textbook.pdf/9" },
    { "subject": "Social", "name": "9_Social_History_Textbooks", "url": "https://cse.ap.gov.in/downloadBooks/Social%20Books/9_Social_History_Textbook.pdf/9" }
  ],
  "10": [
    { "subject": "Telugu", "name": "10_Telugu_textbook", "url": "https://cse.ap.gov.in/downloadBooks/Telugu%20Books/10_telugu_textbook_2024-25.pdf/10" },
    { "subject": "Hindi", "name": "10_Hindi_textbook", "url": "https://cse.ap.gov.in/downloadBooks/Hindi%20Books/10_Hindi_textbook_2024-25.pdf/10" },
    { "subject": "English", "name": "10_English_Textbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/10_English_Textbook_2024-25.pdf/10" },
    { "subject": "English", "name": "10_English_Workbook", "url": "https://cse.ap.gov.in/downloadBooks/English%20Books/10_English_Worktbook_2024-25.pdf/10" },
    { "subject": "Maths", "name": "10_Maths_SEM-1_textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/10_Maths_SEM-1_textbook_2024-25.pdf/10" },
    { "subject": "Maths", "name": "10_Maths_SEM-2_textbook", "url": "https://cse.ap.gov.in/downloadBooks/Maths%20Books/10_Maths_SEM-2_textbook_2024-25.pdf/10" },
    { "subject": "Physics", "name": "10_Physics_textbook", "url": "https://cse.ap.gov.in/downloadBooks/Physics%20Books/10_Physics_textbook_2024-25.pdf/10" },
    { "subject": "Biology", "name": "10_Biology_Textbook_BM", "url": "https://cse.ap.gov.in/downloadBooks/Biology%20Books/10_Biology_Textbook_BM_2024-25.pdf/10" },
    { "subject": "Social", "name": "10_Social_History_textbook", "url": "https://cse.ap.gov.in/downloadBooks/Social%20Books/10_Social_History_textbook_2024-25.pdf/10" }
  ]
};

const getSubjectIcon = (subject: string) => {
  const s = subject.toLowerCase();
  if (s.includes('telugu') || s.includes('hindi')) return Languages;
  if (s.includes('english')) return BookText;
  if (s.includes('maths')) return Calculator;
  if (s.includes('physic')) return Atom;
  if (s.includes('biolog') || s.includes('science')) return Microscope;
  if (s.includes('social') || s.includes('evs')) return Globe;
  return BookOpen;
};

const getSubjectColor = (subject: string) => {
  const s = subject.toLowerCase();
  if (s.includes('telugu')) return 'text-orange-400';
  if (s.includes('hindi')) return 'text-red-400';
  if (s.includes('english')) return 'text-blue-400';
  if (s.includes('maths')) return 'text-purple-400';
  if (s.includes('physic')) return 'text-cyan-400';
  if (s.includes('biolog') || s.includes('science')) return 'text-green-400';
  if (s.includes('social') || s.includes('evs')) return 'text-yellow-400';
  return 'text-white';
};

export default function Materials() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const classes = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section id="materials" className="py-24 lg:py-32 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6">
              Materials & <span className="text-pine-light">Textbooks</span>.
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed">
              Access comprehensive learning resources and textbooks for all grades from Class 1 to 10.
            </p>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`p-6 rounded-[1.5rem] flex flex-col items-center justify-center transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]`}
            >
              <span className="font-display font-extrabold text-xl sm:text-2xl mb-2">Class {cls}</span>
              <ChevronRight size={24} className="text-white/40" strokeWidth={2} />
            </button>
          ))}
        </div>

        {/* Modal for Textbooks */}
        <AnimatePresence>
          {selectedClass && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedClass(null)}
                className="fixed inset-0 bg-ink/80 backdrop-blur-md z-[100]"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-4 md:inset-10 lg:inset-20 z-[101] bg-[#121212] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="p-8 border-b border-white/5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-3xl text-white">Class {selectedClass} Textbooks</h3>
                    <p className="text-gray-400 mt-1">Select a subject to download or read online</p>
                  </div>
                  <button 
                    onClick={() => setSelectedClass(null)}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-grow overflow-y-auto p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {TEXTBOOKS_DATA[selectedClass]?.map((book, idx) => {
                      const Icon = getSubjectIcon(book.subject);
                      const color = getSubjectColor(book.subject);
                      return (
                        <div 
                          key={idx}
                          className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col gap-6 shadow-xl"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-4 rounded-2xl bg-white/5 ${color} transition-colors group-hover:scale-110 duration-300`}>
                              <Icon size={28} />
                            </div>
                            <div className="overflow-hidden">
                              <span className="font-display font-bold text-lg block text-white truncate" title={book.name}>{book.subject}</span>
                              <span className="text-xs text-white/40 font-medium tracking-wide uppercase">{book.name.replace(/_/g, ' ')}</span>
                            </div>
                          </div>
                          
                          <div className="mt-auto">
                            <a 
                              href={book.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-pine hover:bg-pine-light text-white transition-all shadow-lg shadow-pine/20 font-bold uppercase tracking-widest text-sm"
                            >
                              <Download size={20} />
                              <span>Download PDF</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {(!TEXTBOOKS_DATA[selectedClass] || TEXTBOOKS_DATA[selectedClass].length === 0) && (
                    <div className="flex flex-col items-center justify-center h-full py-20 text-gray-500">
                      <BookOpen size={48} className="mb-4 opacity-20" />
                      <p className="text-xl font-light">Materials coming soon for Class {selectedClass}</p>
                    </div>
                  )}
                </div>
                
                {/* Footer */}
                <div className="p-6 bg-white/5 border-t border-white/5 flex justify-center">
                  <p className="text-gray-500 text-sm">Official Andhra Pradesh State Syllabus Textbooks (2024-25)</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
