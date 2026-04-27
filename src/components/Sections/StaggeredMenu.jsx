import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const StaggeredMenu = () => {
  const [ref, inView] = useScrollReveal({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  const menuItems = [
    { 
      name: "Tempura Prawns", 
      price: "₹450", 
      desc: "Crispy, juicy, served with a tangy dip.", 
      badge: "Popular",
      image: "/menu_prawns_1777297401646.png"
    },
    { 
      name: "Signature Dimsums", 
      price: "₹380", 
      desc: "Handcrafted, delicate wrappers, bursting with flavor.", 
      badge: "",
      image: "/menu_dimsums_1777297417621.png"
    },
    { 
      name: "Mutton Laal Maas", 
      price: "₹645", 
      desc: "Slow-cooked boneless mutton, fiery mathania chili.", 
      badge: "Spicy",
      image: "/menu_laal_maas_1777297436391.png"
    },
    { 
      name: "Subzi Diwani Handi", 
      price: "₹395", 
      desc: "Slow-cooked in a traditional handi, deeply flavored.", 
      badge: "",
      image: "/menu_diwani_handi_1777297452868.png"
    },
    { 
      name: "Butter Chicken", 
      price: "₹520", 
      desc: "Rich, smoky, fenugreek infused. Perfect with naan.", 
      badge: "Essential",
      image: "/menu_butter_chicken_1777297466562.png"
    },
    { 
      name: "Pollo Primavera Pizza", 
      price: "₹615", 
      desc: "Pesto, tomato sauce, fajita chicken, mushrooms.", 
      badge: "",
      image: "/menu_pizza_primavera_1777297483012.png"
    },
    { 
      name: "Ras Malai Tres Leches", 
      price: "₹415", 
      desc: "Overnight soaked, whipped cream, 24 carat gold dust.", 
      badge: "Dessert",
      image: "/menu_tres_leches_1777297499404.png"
    },
    { 
      name: "Pull Me Up Tiramisu", 
      price: "₹415", 
      desc: "Coffee infused lady fingers, mascarpone mousse.", 
      badge: "",
      image: "/menu_tiramisu_pull_me_up_1777297518585.png"
    }
  ];

  return (
    <section id="menu" className="py-32 px-6 md:px-20 bg-[var(--base)] text-[var(--deep)] relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="mb-24 text-center md:text-left relative inline-block">
          <h2 className="text-5xl md:text-7xl font-serif">What's cooking</h2>
          <svg className="absolute -bottom-4 left-0 w-full text-[var(--accent)]" viewBox="0 0 300 20" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 0 10 Q 75 20, 150 10 T 300 10" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="3" 
            />
          </svg>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 hidden md:block"></div>
          
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: (index % 2) * 0.1 }}
              className={`flex items-start gap-8 md:w-1/2 group interactive cursor-pointer relative ${
                index % 2 === 0 
                  ? 'md:pr-12 md:self-start' 
                  : 'md:pl-12 md:self-end md:flex-row-reverse'
              }`}
            >
              {/* Larger 1:1 Image Thumbnail with Click-to-Zoom */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(item.image);
                }}
                className="relative shrink-0 overflow-hidden rounded-2xl shadow-xl w-32 h-32 md:w-48 md:h-48 group/img"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out"
                />
                {/* Click Hint Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs uppercase tracking-widest font-sans border border-white/40 px-3 py-1 rounded-full backdrop-blur-sm">Zoom</span>
                </div>
              </div>

              <div className="flex-1 min-h-[128px] md:min-h-[192px] flex flex-col justify-between py-2 relative overflow-hidden">
                <div className="border-b border-black/10 pb-6 relative overflow-hidden group/content">
                  
                  <div className="flex flex-col transform transition-transform duration-500 group-hover/content:-translate-y-full">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-xl md:text-3xl flex items-center gap-3">
                        {item.name}
                        {item.badge && (
                          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-sans bg-[var(--accent)] text-white px-2 py-1 rounded-sm">
                            {item.badge}
                          </span>
                        )}
                      </h3>
                      <span className="font-serif italic text-lg md:text-2xl text-[var(--accent)] ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm opacity-50 font-sans leading-relaxed max-w-[90%]">{item.desc}</p>
                  </div>

                  <div className="absolute inset-0 bg-[var(--accent)] text-white p-6 flex items-center justify-between translate-y-full group-hover/content:translate-y-0 transition-transform duration-500 rounded-xl shadow-lg">
                    <span className="font-serif italic text-2xl md:text-4xl">{item.price}</span>
                    <h3 className="font-serif text-xl md:text-3xl text-right leading-tight">{item.name}</h3>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Menu CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col items-center text-center"
        >
          <div className="w-px h-24 bg-gradient-to-b from-black/20 to-transparent mb-12"></div>
          <h3 className="text-3xl md:text-5xl font-serif mb-8 italic">Craving the full list?</h3>
          <a 
            href="/dear-lola-menu.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="group relative px-12 py-5 bg-[var(--deep)] text-[var(--base)] rounded-full overflow-hidden interactive shadow-2xl transition-all hover:scale-105"
          >
            <span className="relative z-10 font-sans uppercase tracking-[0.3em] text-xs">View Full Menu (PDF)</span>
            <motion.div 
              className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </a>
          <p className="mt-6 text-[10px] uppercase tracking-widest opacity-40 font-sans">Available for dine-in & takeaway</p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl"
          >
            <motion.button 
              className="absolute top-8 right-8 text-white p-4 bg-white/10 rounded-full hover:bg-[var(--accent)] transition-all"
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
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
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

export default StaggeredMenu;
