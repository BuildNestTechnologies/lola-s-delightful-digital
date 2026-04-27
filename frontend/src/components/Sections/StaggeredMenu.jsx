import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const StaggeredMenu = () => {
  const [ref, inView] = useScrollReveal({ threshold: 0.1 });

  const menuItems = [
    { name: "Tempura Prawns", price: "₹450", desc: "Crispy, juicy, served with a tangy dip.", badge: "Popular" },
    { name: "Signature Dimsums", price: "₹380", desc: "Handcrafted, delicate wrappers, bursting with flavor.", badge: "" },
    { name: "Mutton Laal Maas", price: "₹645", desc: "Slow-cooked boneless mutton, fiery mathania chili.", badge: "Spicy" },
    { name: "Subzi Diwani Handi", price: "₹395", desc: "Slow-cooked in a traditional handi, deeply flavored.", badge: "" },
    { name: "Butter Chicken", price: "₹520", desc: "Rich, smoky, fenugreek infused. Perfect with naan.", badge: "Essential" },
    { name: "Pollo Primavera Pizza", price: "₹615", desc: "Pesto, tomato sauce, fajita chicken, mushrooms.", badge: "" },
    { name: "Ras Malai Tres Leches", price: "₹415", desc: "Overnight soaked, whipped cream, 24 carat gold dust.", badge: "Dessert" },
    { name: "Pull Me Up Tiramisu", price: "₹415", desc: "Coffee infused lady fingers, mascarpone mousse.", badge: "" }
  ];

  return (
    <section id="menu" className="py-32 px-6 md:px-20 bg-[var(--base)] text-[var(--deep)] relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="mb-24 text-center md:text-left relative inline-block">
          <h2 className="text-5xl md:text-7xl font-serif">What's cooking</h2>
          {/* Hand-drawn underline */}
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

        <div className="flex flex-col gap-12 md:gap-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 hidden md:block"></div>
          
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
              className={`flex flex-col md:w-1/2 group interactive cursor-pointer ${index % 2 === 0 ? 'md:pr-16 md:self-start' : 'md:pl-16 md:self-end'}`}
            >
              <div className="flex items-end justify-between border-b border-black/10 pb-4 relative overflow-hidden">
                <div className="flex flex-col transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-serif text-2xl md:text-3xl flex items-center gap-3">
                    {item.name}
                    {item.badge && <span className="text-[10px] uppercase tracking-widest font-sans bg-[var(--accent)] text-white px-2 py-1 rounded-sm">{item.badge}</span>}
                  </h3>
                  <p className="text-sm opacity-60 mt-2 max-w-[80%] font-sans">{item.desc}</p>
                </div>
                
                <span className="font-serif italic text-xl md:text-2xl text-[var(--accent)] transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {item.price}
                </span>

                {/* Hover swap effect layer */}
                <div className="absolute inset-0 bg-[var(--accent)] text-white p-4 flex items-center justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-lg">
                  <span className="font-serif italic text-2xl">{item.price}</span>
                  <h3 className="font-serif text-2xl">{item.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block border border-[var(--deep)] rounded-full px-8 py-3 text-sm tracking-widest uppercase cursor-pointer hover:bg-[var(--deep)] hover:text-[var(--base)] transition-colors interactive"
          >
            Ask our chatbot about today's specials
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaggeredMenu;
