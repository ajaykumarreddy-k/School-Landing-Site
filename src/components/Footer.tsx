import { Linkedin, MapPin, Phone, MessageCircle } from 'lucide-react';
import maplogo from '@/assets/maplogo.png';
import developerPic from '@/assets/developer.jpeg';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Footer Top: Social & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start mb-6">
              <h2 className="font-display font-extrabold text-4xl text-ink leading-tight mb-1">Rayalaseema High School.</h2>
              <p className="font-display font-bold text-pine text-lg">రాయలసీమ హై స్కూల్, కలికిరి.</p>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Empowering students with excellence in education and character building since 1995.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-full bg-stone hover:bg-pine hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://maps.google.com/maps?q=Rayalaseema+High+School+Kalikiri" target="_blank" className="p-2 rounded-full bg-stone hover:scale-110 transition-all border border-gray-200">
                <img src={maplogo} alt="Maps" className="w-6 h-6 object-contain rounded-full" />
              </a>
              <a href="https://wa.me/919494829814" target="_blank" className="p-3 rounded-full bg-stone hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="tel:9494829814" className="p-3 rounded-full bg-stone hover:bg-[#34A853] hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-ink mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#about" className="hover:text-pine transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-pine transition-colors">Academics</a></li>
              <li><a href="#admissions" className="hover:text-pine transition-colors">Admissions</a></li>
              <li><a href="#materials" className="hover:text-pine transition-colors">Materials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-ink mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-pine" />
                <span>+91 94948 29814</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-pine" />
                <span>Kalikiri, AP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive Typography */}
        <div className="w-full text-center relative flex justify-center items-end select-none mt-24">
          <h1 className="font-display font-extrabold text-[13.5vw] leading-[0.70] tracking-tighter text-ink flex items-start">
            Rayalaseema<span className="text-[3vw] leading-none mt-[0.5vw]">™</span>
          </h1>
        </div>

        {/* Signature Bar */}
        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col items-center gap-4">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">Digital Architect</div>
          <a 
            href="https://ajaykumarreddykrishnareddygari-portfolio.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 px-8 py-4 rounded-[2rem] bg-stone hover:bg-ink transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-ink"
          >
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-1000">
              <img src={developerPic} alt="Ajay Kumar Reddy" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest group-hover:text-pine-light transition-colors duration-500">
                Designed & Developed by
              </span>
              <span className="text-ink text-xl sm:text-2xl font-display font-black group-hover:text-white transition-colors duration-500 tracking-tight">
                Ajay Kumar Reddy Krishnareddy Gari
              </span>
            </div>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © 2026 Rayalaseema High School. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
