import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "The dedication of the teachers here is unparalleled. My son has not only grown academically but also developed a strong moral compass.",
      author: "Mr. Ramesh Reddy",
      role: "Parent"
    },
    {
      text: "RHS gave me the foundation I needed to crack competitive exams. The modern facilities and disciplined environment are top-notch.",
      author: "Anitha S.",
      role: "Alumna, Class of 2023"
    },
    {
      text: "As a student, I feel heard and supported. The project-based learning methods have completely changed how I approach my studies.",
      author: "Kiran Kumar",
      role: "Grade 10 Student"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-pine text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter mb-16 max-w-2xl">
          Hear from our <span className="text-emerald-300">community</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
              <div className="flex text-emerald-300 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="font-display font-medium text-lg leading-relaxed mb-8">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{test.author}</h4>
                  <p className="text-gray-300 text-xs font-medium uppercase tracking-wider mt-0.5">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
