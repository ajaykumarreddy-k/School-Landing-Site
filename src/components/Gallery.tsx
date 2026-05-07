export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1427504494785-319ce8372ac0?q=80&w=800&auto=format&fit=crop"
  ];

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
