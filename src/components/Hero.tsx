import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import campusImg from '../../assets/School Campus.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Decorative Grid Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#084734 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 w-full flex flex-col items-center text-center">
        {/* Subtle label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-gray-200 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-pine animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">Admissions Open 2026</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-tighter text-ink leading-[0.95] max-w-5xl"
        >
          Shaping Future Leaders with <span className="text-pine">Knowledge</span>, <span className="text-pine">Discipline</span> & <span className="text-pine">Values</span>.
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
        >
          A premium educational institution dedicated to holistic development, critical thinking, and character building.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://maps.google.com/maps?q=Rayalaseema+High+School+Kalikiri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-ink text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
          >
            Explore Campus
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="tel:9494829814"
            className="bg-white text-ink border border-gray-200 px-8 py-4 rounded-full text-base font-medium hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
          >
            Admissions Open
          </a>
        </motion.div>
      </div>

      {/* Hero Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full mt-20 h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <img 
          src={campusImg} 
          alt="School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        
        {/* Floating Card */}
        <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm hidden md:block">
          <p className="font-display font-bold text-2xl text-ink">"Empowering minds to redefine the future."</p>
          <p className="font-medium text-pine mt-2">— Head master</p>
        </div>
      </motion.div>
    </section>
  );
}
