import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, X, Check } from 'lucide-react';
import maplogo from '@/assets/maplogo.png';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

export default function FloatingButtons() {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Check current language from cookie
    const googtrans = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
    if (googtrans) {
      const lang = googtrans.split('=')[1].split('/').pop();
      setCurrentLang(lang === 'te' ? 'te' : 'en');
    }
  }, []);

  const changeLanguage = (lang: string) => {
    // Set Google Translate cookie
    document.cookie = `googtrans=/en/${lang}; path=/`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${window.location.hostname}`;
    window.location.reload();
  };

  const buttons = [
    {
      img: maplogo,
      label: 'Location',
      href: 'https://maps.google.com/maps?q=Rayalaseema+High+School+Kalikiri',
      color: 'bg-white',
      delay: 0.1,
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      href: 'https://wa.me/919494829814',
      color: 'bg-[#25D366]',
      delay: 0.2,
    },
    {
      icon: PhoneIcon,
      label: 'Call Us',
      href: 'tel:9494829814',
      color: 'bg-[#34A853]',
      delay: 0.3,
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Smart Language Toggle Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => changeLanguage(currentLang === 'en' ? 'te' : 'en')}
        className="w-[56px] h-[56px] rounded-full shadow-[0_0_20px_rgba(8,71,52,0.3)] flex flex-col items-center justify-center group relative border-2 border-pine bg-white text-pine hover:bg-pine hover:text-white transition-all duration-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-pine/5 group-hover:bg-transparent transition-colors" />
        {currentLang === 'en' ? (
          <>
            <span className="text-[14px] font-black leading-none z-10">TE</span>
            <span className="text-[8px] font-bold mt-0.5 z-10">తెలుగు</span>
          </>
        ) : (
          <>
            <span className="text-[14px] font-black leading-none z-10">EN</span>
            <span className="text-[8px] font-bold mt-0.5 z-10">English</span>
          </>
        )}
        
        {/* Pulsing attention ring */}
        <span className="absolute inset-0 rounded-full border-2 border-pine animate-ping opacity-20 pointer-events-none" />
        
        <span className="absolute right-full mr-4 px-3 py-1 bg-ink text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {currentLang === 'en' ? 'Translate to Telugu' : 'Switch to English'}
        </span>
      </motion.button>

      {buttons.map((btn, i) => (
        <motion.a
          key={i}
          href={btn.href}
          target={btn.href.startsWith('http') ? '_blank' : undefined}
          rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: btn.delay, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${btn.color} text-white p-3 rounded-full shadow-2xl flex items-center justify-center group relative border-2 border-gray-200`}
        >
          {btn.img ? (
            <img src={btn.img} alt={btn.label} className="w-8 h-8 object-contain rounded-full" />
          ) : (
            <btn.icon />
          )}
          <span className="absolute right-full mr-4 px-3 py-1 bg-ink text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {btn.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
