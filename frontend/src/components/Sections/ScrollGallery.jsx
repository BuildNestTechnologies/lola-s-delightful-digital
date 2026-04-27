import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollGallery = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const images = [
    {
      url: "/lola_interior_1777296150924.png",
      caption: "The Ambience"
    },
    {
      url: "/lola_laksa_1777296134706.png",
      caption: "Signature Laksa"
    },
    {
      url: "/lola_cocktail_1777296184867.png",
      caption: "Crafted Cocktails"
    },
    {
      url: "/lola_cheesecake_1777296167677.png",
      caption: "Sweet Endings"
    }
  ];

  return (
    <section id="gallery" ref={containerRef} className="relative h-[400vh] bg-[var(--deep)]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Mobile vertical stack (hidden on desktop) */}
        <div className="md:hidden flex flex-col gap-8 px-6 w-full py-20 h-full overflow-y-auto pb-40">
          <h2 className="text-4xl text-[var(--base)] font-serif mb-4">Through the lens</h2>
          {images.map((img, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden w-full h-[60vh] clip-asymmetric">
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[var(--base)] font-serif text-2xl">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop horizontal scroll */}
        <motion.div style={{ x }} className="hidden md:flex gap-12 px-[10vw]">
          <div className="w-[30vw] flex-shrink-0 flex items-center">
            <h2 className="text-7xl text-[var(--base)] font-serif leading-tight">
              A glimpse <br/>
              <span className="italic text-[var(--accent)]">inside.</span>
            </h2>
          </div>
          
          {images.map((img, i) => (
            <div key={i} className="relative w-[70vw] h-[70vh] flex-shrink-0 group overflow-hidden clip-asymmetric border border-white/5 interactive">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              
              <div className="absolute bottom-10 left-10 overflow-hidden">
                <motion.p 
                  className="text-[var(--base)] font-serif text-4xl translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out"
                >
                  {img.caption}
                </motion.p>
              </div>
            </div>
          ))}

          <div className="w-[40vw] flex-shrink-0 flex items-center justify-center">
            <a 
              href="https://www.instagram.com/dearlola_india" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[var(--base)] text-[var(--deep)] p-12 rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 flex flex-col items-center justify-center w-64 h-64 interactive group"
            >
              <span className="font-serif italic text-3xl mb-2">Explore more</span>
              <span className="text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">on Instagram →</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ScrollGallery;
