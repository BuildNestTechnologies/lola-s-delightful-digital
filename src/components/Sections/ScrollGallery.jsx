import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ScrollGallery = () => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
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
        
        {/* Mobile vertical stack */}
        <div className="md:hidden flex flex-col gap-8 px-6 w-full py-20 h-full overflow-y-auto pb-40">
          <h2 className="text-4xl text-[var(--base)] font-serif mb-8">Through the lens</h2>
          {images.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(img.url)}
              className="relative rounded-2xl overflow-hidden w-full h-[60vh] clip-asymmetric border border-white/5 shadow-2xl cursor-pointer"
            >
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                <p className="text-[var(--base)] font-serif text-sm italic">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop horizontal scroll */}
        <motion.div style={{ x }} className="hidden md:flex gap-16 px-[10vw]">
          <div className="w-[30vw] flex-shrink-0 flex items-center">
            <h2 className="text-7xl text-[var(--base)] font-serif leading-tight">
              A glimpse <br/>
              <span className="italic text-[var(--accent)]">inside.</span>
            </h2>
          </div>
          
          {images.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(img.url)}
              className="relative w-[70vw] h-[70vh] flex-shrink-0 group overflow-hidden clip-asymmetric border border-white/5 interactive shadow-2xl cursor-pointer"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs uppercase tracking-[0.4em] font-sans border border-white/20 px-6 py-2 rounded-full backdrop-blur-sm">Enlarge</span>
              </div>
              
              <div className="absolute bottom-8 right-8 z-20">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="px-6 py-2 bg-black/30 backdrop-blur-lg rounded-full border border-white/10"
                >
                  <p className="text-[var(--base)] font-serif text-lg italic tracking-wide">
                    {img.caption}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}

          <div className="w-[40vw] flex-shrink-0 flex items-center justify-center">
            <motion.a 
              href="https://www.instagram.com/dearlola_india" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--base)] text-[var(--deep)] p-12 rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-500 flex flex-col items-center justify-center w-72 h-72 interactive group shadow-2xl border border-white/5"
            >
              <span className="font-serif italic text-3xl mb-2">Explore more</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">on Instagram →</span>
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Shared Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl cursor-pointer"
          >
            <motion.button 
              className="absolute top-8 right-8 text-white p-4 bg-white/10 rounded-full hover:bg-[var(--accent)] transition-all z-[1010]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-10 text-white/40 font-serif italic text-lg"
            >
              Click anywhere to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScrollGallery;
