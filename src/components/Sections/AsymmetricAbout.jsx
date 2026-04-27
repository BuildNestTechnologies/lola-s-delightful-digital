import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const AsymmetricAbout = () => {
  const [ref, inView] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="our-story" className="py-32 px-6 md:px-20 bg-[var(--deep)] text-[var(--base)] relative overflow-hidden clip-diagonal mt-[-5vh] z-20">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px' }}></div>
      
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end relative z-10">
        
        {/* Tall Column 1 */}
        <motion.div 
          className="md:col-span-5 h-full flex flex-col justify-end"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mb-8 clip-asymmetric overflow-hidden">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" alt="Arup from Dear Lola" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-4 left-4 right-4 bg-[var(--deep)]/80 backdrop-blur-md p-4 text-sm border border-white/10 rounded-lg">
              <p className="font-serif italic opacity-90">"Food is just the start. It's the warmth that makes you stay."</p>
              <p className="mt-2 text-xs text-[var(--accent)] uppercase tracking-widest">— Arup, Hospitality Manager</p>
            </div>
          </div>
        </motion.div>

        {/* Short Column 2 */}
        <motion.div 
          className="md:col-span-3 flex flex-col justify-end md:pb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-serif mb-6 leading-tight">More than <br/>just a <span className="text-[var(--accent)] italic">kitchen.</span></h2>
          <p className="opacity-70 font-sans font-light leading-relaxed mb-8">
            We built Dear Lola to be that elusive sweet spot—where the music is just right, the lighting makes everyone look good, and the food speaks for itself.
          </p>
          
          <div className="p-6 border border-white/10 rounded-2xl bg-white/5 flex items-center gap-6 interactive">
            {/* CSS Only Donut Chart */}
            <div className="w-16 h-16 rounded-full relative flex items-center justify-center bg-[var(--deep)]" style={{ background: 'conic-gradient(var(--accent) 88%, #333 0)' }}>
              <div className="w-12 h-12 bg-[var(--deep)] rounded-full flex items-center justify-center absolute">
                <span className="text-sm font-bold">4.4</span>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--accent)]">Google Reviews</p>
              <p className="font-serif italic text-lg">69 happy guests</p>
            </div>
          </div>
        </motion.div>

        {/* Tall Column 3 */}
        <motion.div 
          className="md:col-span-4 h-full flex flex-col justify-end md:pl-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-[var(--accent)] text-[var(--deep)] p-10 rounded-3xl clip-asymmetric transform md:rotate-2 hover:rotate-0 transition-all duration-500 interactive">
            <h3 className="font-serif text-2xl mb-4">The secret ingredient?</h3>
            <p className="font-sans mb-8">We don't do compromises. From our 12-hour slow-cooked Laal Maas to our signature Tempura Prawns, every plate is crafted with obsession.</p>
            
            <p className="font-['Caveat',_cursive] text-3xl transform -rotate-3 text-white">
              Instagram famous? Actually, we're just delicious.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AsymmetricAbout;
