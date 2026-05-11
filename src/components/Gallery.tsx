import img1 from '../../assets/Gallary/WhatsApp Image 2026-05-07 at 20.19.54.jpeg';
import img2 from '../../assets/Gallary/WhatsApp Image 2026-05-07 at 20.20.31.jpeg';
import img3 from '../../assets/Gallary/WhatsApp Image 2026-05-07 at 20.21.37.jpeg';
import img4 from '../../assets/Gallary/WhatsApp Image 2026-05-07 at 20.22.22.jpeg';
import img5 from '../../assets/Gallary/WhatsApp Image 2026-05-07 at 20.23.06.jpeg';

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section id="gallery" className="py-24 bg-stone/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter text-ink mb-12 text-center">
          Campus Life
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="space-y-4 lg:space-y-6">
            <div className="h-[300px] lg:h-[400px] overflow-hidden rounded-[2rem]">
              <img src={images[0]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="h-[250px] lg:h-[300px] overflow-hidden rounded-[2rem]">
              <img src={images[1]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="h-[250px] lg:h-[300px] overflow-hidden rounded-[2rem]">
              <img src={images[4]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
          </div>
          <div className="space-y-4 lg:space-y-6 pt-0 md:pt-12">
             <div className="h-[250px] lg:h-[300px] overflow-hidden rounded-[2rem]">
              <img src={images[2]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="h-[300px] lg:h-[400px] overflow-hidden rounded-[2rem]">
              <img src={images[3]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
