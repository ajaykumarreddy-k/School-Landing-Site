import { BookOpen, Calendar, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export default function AcademicsAdmissions() {
  return (
    <section id="academics" className="py-24 lg:py-32 bg-stone/50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Academics */}
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-ink mb-10">
            Academics
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Primary School', desc: 'Focusing on foundational literacy, numeracy, and cognitive development in a playful environment.' },
              { title: 'Middle School', desc: 'Encouraging independent thinking, project-based learning, and introduction to advanced concepts.' },
              { title: 'High School', desc: 'Rigorous state board curriculum preparation, competitive exam foundation, and career counseling.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-ink mb-3 group-hover:text-pine transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                  </div>
                  <div className="bg-stone p-3 rounded-full text-pine">
                    <BookOpen size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admissions */}
        <div id="admissions">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-ink mb-10">
            Admissions
          </h2>
          
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pine/5 rounded-bl-[100px]" />
            
            <h3 className="font-display font-bold text-2xl text-ink mb-6">Process for 2026-27</h3>
            
            <ul className="space-y-6 mb-10 relative z-10">
              {[
                { icon: FileText, text: 'Submit the online application form.' },
                { icon: Calendar, text: 'Schedule an interactive campus visit.' },
                { icon: CheckCircle2, text: 'Document verification and fee payment.' },
              ].map((step, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="bg-pine/10 p-2.5 rounded-full text-pine flex-shrink-0">
                    <step.icon size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{step.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 relative z-10">
              <a 
                href="https://wa.me/919494829814"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pine text-white px-6 py-4 rounded-xl font-bold hover:bg-pine-light transition-colors flex-1 flex justify-center items-center gap-2 group"
              >
                Apply Online <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
