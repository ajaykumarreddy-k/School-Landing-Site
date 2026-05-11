import { ArrowRight } from 'lucide-react';
import studentsImg from '../../assets/Gallary/WhatsApp Image 2026-05-07 at 20.22.22.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Typography & Content */}
        <div className="flex flex-col">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-ink leading-[1.05] mb-8">
            A legacy of <span className="text-pine">educational excellence</span> and character building.
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              Founded on the principles of rigorous academics and holistic growth, Rayalaseema High School has been a beacon of knowledge in Kalikiri. We believe in nurturing not just students, but future-ready individuals grounded in strong values.
            </p>
            <p>
              Our minimal yet deeply effective pedagogical approach ensures that every child receives personalized attention, encouraging critical thinking over rote learning.
            </p>
          </div>

          <div className="mt-10 flex items-center space-x-6">
            <div>
              <p className="font-display font-bold text-xl text-ink">Head master</p>
            </div>
          </div>
        </div>

        {/* Right: Comp/Images */}
        <div className="relative">
          <div className="w-full h-[500px] rounded-[2rem] overflow-hidden">
            <img 
              src={studentsImg} 
              alt="Students learning" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-pine text-white p-8 rounded-[2rem] max-w-xs shadow-2xl hidden md:block">
            <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed font-light">
              To provide a safe, challenging, and relevant learning environment that inspires all students to reach their full potential.
            </p>
            <button className="mt-6 flex items-center space-x-2 text-white font-semibold hover:opacity-80 transition-opacity">
              <span>Read more</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
