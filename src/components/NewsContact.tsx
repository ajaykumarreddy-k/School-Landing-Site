import { useState } from 'react';
import { MapPin, Phone, Mail, X, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import maplogo from '@/assets/maplogo.png';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

export default function NewsContact() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const enquiryOptions = [
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      desc: 'Chat via Mobile App',
      href: 'https://wa.me/919494829814',
      color: 'bg-[#25D366]'
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp Web',
      desc: 'Open in Browser',
      href: 'https://web.whatsapp.com/send?phone=919494829814',
      color: 'bg-blue-500'
    },
    {
      img: maplogo,
      title: 'Visit Campus',
      desc: 'Get Directions',
      href: 'https://maps.google.com/maps?q=Rayalaseema+High+School+Kalikiri',
      color: 'bg-white'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Call',
      desc: '+91 94948 29814',
      href: 'tel:9494829814',
      color: 'bg-[#34A853]'
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: News & Events */}
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-ink mb-10">
              News & Events
            </h2>
            <div className="space-y-6 text-left">
              {[
                { date: '15 Mar', title: 'Annual Science Fair 2026', type: 'Event', href: '#' },
                { date: '20 Mar', title: 'Explore Campus & Facilities', type: 'Tour', href: 'https://maps.google.com/maps?q=Rayalaseema+High+School+Kalikiri' },
                { date: '10 Apr', title: 'Admissions open for Academic Year 2026-27', type: 'Announcement', href: 'tel:9494829814' },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex gap-6 p-6 rounded-[2rem] bg-stone border border-gray-100 hover:border-pine/20 hover:bg-pine/5 transition-all group"
                >
                  <div className="flex flex-col items-center justify-center bg-white w-20 h-20 rounded-2xl flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <span className="font-display font-bold text-xl text-ink">{item.date.split(' ')[0]}</span>
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">{item.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold text-pine uppercase tracking-wider mb-1">{item.type}</span>
                    <h3 className="font-display font-bold text-lg text-ink leading-tight group-hover:text-pine transition-colors">{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div>
             <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-ink mb-10">
              Get in Touch
            </h2>
            <div className="bg-ink text-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-pine/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full mt-1">
                    <MapPin size={24} className="text-pine-light" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-1">Campus Address</h4>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                      Rayalaseema High School,<br/>
                      Vayalpadu Road, Kalikiri,<br/>
                      Annamayya Dist, Andhra Pradesh 517234
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone size={24} className="text-pine-light" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-1">Phone</h4>
                    <p className="text-gray-400">+91 94948 29814</p>
                  </div>
                </div>

                 <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail size={24} className="text-pine-light" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-1">Email</h4>
                    <p className="text-gray-400">admissions@rayalaseemahighschool.edu</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                 <button 
                  onClick={() => setShowEnquiry(!showEnquiry)}
                  className="w-full bg-pine text-white py-4 rounded-full font-semibold hover:bg-pine-light transition-all flex items-center justify-center gap-2 group"
                 >
                  Enquire Now
                  <motion.div
                    animate={{ rotate: showEnquiry ? 180 : 0 }}
                  >
                    <Smartphone size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.div>
                 </button>

                 <AnimatePresence>
                  {showEnquiry && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="mt-4 bg-white rounded-3xl p-3 shadow-2xl space-y-2 border border-gray-100"
                    >
                      {enquiryOptions.map((opt, i) => (
                        <a
                          key={i}
                          href={opt.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className={`${opt.color} p-2 rounded-xl text-white group-hover:scale-110 transition-transform flex items-center justify-center min-w-[40px] h-[40px]`}>
                            {opt.img ? (
                              <img src={opt.img} alt={opt.title} className="w-6 h-6 object-contain" />
                            ) : (
                              <opt.icon />
                            )}
                          </div>
                          <div>
                            <div className="text-ink font-bold text-sm">{opt.title}</div>
                            <div className="text-gray-400 text-xs">{opt.desc}</div>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                 </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
