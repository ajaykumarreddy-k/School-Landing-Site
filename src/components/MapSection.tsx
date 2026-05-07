export default function MapSection() {
  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="w-full h-[400px] sm:h-[500px] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
          <iframe
            src="https://maps.google.com/maps?q=Rayalaseema+High+School+Kalikiri&t=k&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
