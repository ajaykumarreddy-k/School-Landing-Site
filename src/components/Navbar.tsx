import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    'Home', 'About', 'Academics', 'Admissions', 'Materials', 'Gallery', 'Contact'
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
          
          {/* Logo */}
          <div className="flex flex-col items-start leading-none cursor-pointer">
            <span className="font-display font-extrabold text-ink text-[1.1rem] xs:text-[1.3rem] sm:text-[1.4rem] tracking-tight leading-none mb-1 whitespace-nowrap">
              Rayalaseema High School.
            </span>
            <span className="font-display font-bold text-pine text-[10px] xs:text-[12px] sm:text-[13px] tracking-wide leading-none whitespace-nowrap">
              రాయలసీమ హై స్కూల్, కలికిరి.
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-600 hover:text-pine transition-colors tracking-wide"
                >
                  {link}
                </a>
              ))}
            </div>
            <button className="bg-pine text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-pine-light hover:scale-105 active:scale-95 transition-all shadow-sm tracking-wide">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-ink hover:text-pine p-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-3xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex flex-col items-start leading-none">
                 <span className="font-display font-extrabold text-ink text-xl tracking-tight leading-none mb-1">
                   Rayalaseema High School.
                 </span>
                 <span className="font-display font-bold text-pine text-xs tracking-wide leading-none">
                   రాయలసీమ హై స్కూల్, కలికిరి.
                 </span>
               </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-ink hover:text-pine bg-gray-100 p-2 rounded-full">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 text-2xl font-display font-semibold px-4">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-ink hover:text-pine transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="pt-8">
                <button className="w-full bg-pine text-white px-6 py-4 rounded-full text-lg font-bold shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
