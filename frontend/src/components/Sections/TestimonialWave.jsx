import React from 'react';
import { motion } from 'framer-motion';

const TestimonialWave = () => {
  const reviews = [
    { name: "Narayan", text: "Incredible vibe. The Laal Maas was absolutely spectacular. A must visit in Kalyan.", rating: 5, rotate: -2, yOffset: "0%" },
    { name: "Anagha", text: "The Tempura Prawns are to die for. Beautiful interiors and great service from Arup.", rating: 5, rotate: 3, yOffset: "40%" },
    { name: "Hiten", text: "Perfect for date night. The mocktails are so refreshing and the dimsums are authentic.", rating: 4, rotate: -4, yOffset: "10%" },
    { name: "Priya S.", text: "A hidden gem! The music, the moody lighting, and the Butter Chicken. Flawless.", rating: 5, rotate: 4, yOffset: "50%" }
  ];

  return (
    <section className="py-40 px-6 bg-[var(--base)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-center mb-32">
          Word on the <span className="italic text-[var(--accent)]">street.</span>
        </h2>

        <div className="relative h-[600px] md:h-[400px] w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Fictional Sine wave path for visual structure on desktop */}
          <svg className="absolute inset-0 w-full h-full hidden md:block pointer-events-none opacity-10" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path d="M 0,100 Q 250,0 500,100 T 1000,100" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>

          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="bg-white p-8 border border-black/5 rounded-2xl shadow-soft w-full md:w-[280px] flex-shrink-0 interactive group transition-all duration-300 relative"
              style={{ 
                transform: `rotate(${review.rotate}deg)`,
                marginTop: window.innerWidth > 768 ? review.yOffset : '0px'
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans font-light italic text-black/80 mb-6 line-clamp-4 group-hover:line-clamp-none transition-all">"{review.text}"</p>
              <p className="font-serif text-sm uppercase tracking-widest text-[var(--accent)]">— {review.name}</p>
              
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <span className="font-serif text-2xl">"</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialWave;
