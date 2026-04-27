import React, { useRef, useState } from 'react';
import { motion, useSpring, useAnimationFrame, useMotionValue, useVelocity } from 'framer-motion';

const TestimonialCard = ({ review, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 w-[300px] md:w-[400px] mx-8 h-[250px] md:h-[300px]"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? (index % 2 === 0 ? 15 : -15) : 0,
          rotateX: isHovered ? 5 : 0,
          scale: isHovered ? 1.05 : 1,
          z: isHovered ? 50 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full bg-white/80 backdrop-blur-md border border-black/5 rounded-3xl p-8 shadow-2xl flex flex-col justify-between group overflow-hidden"
      >
        {/* Background Decorative Quote */}
        <div className="absolute -top-10 -right-10 text-[15rem] font-serif text-[var(--accent)]/5 pointer-events-none select-none">
          "
        </div>

        <div className="relative z-10">
          <div className="flex gap-1 mb-6">
            {[...Array(review.rating)].map((_, j) => (
              <motion.svg 
                key={j} 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * j }}
                className="w-4 h-4 text-[var(--accent)]" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
          <p className="font-sans font-light italic text-black/80 text-lg leading-relaxed mb-6">
            "{review.text}"
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="font-serif text-sm uppercase tracking-widest text-[var(--accent)]">— {review.name}</p>
            <p className="text-[10px] text-black/30 uppercase tracking-[0.2em] font-sans">Verified Guest</p>
          </div>
          <motion.div 
            animate={{ x: isHovered ? 5 : 0 }}
            className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TestimonialWave = () => {
  const reviews = [
    { name: "Narayan", text: "Incredible vibe. The Laal Maas was absolutely spectacular. A must visit in Kalyan.", rating: 5 },
    { name: "Anagha", text: "The Tempura Prawns are to die for. Beautiful interiors and great service from Arup.", rating: 5 },
    { name: "Hiten", text: "Perfect for date night. The mocktails are so refreshing and the dimsums are authentic.", rating: 4 },
    { name: "Priya S.", text: "A hidden gem! The music, the moody lighting, and the Butter Chicken. Flawless.", rating: 5 },
    { name: "Vikram", text: "The Burnt Basque Cheesecake is the best I've ever had. Highly recommended.", rating: 5 },
    { name: "Sanya", text: "Everything from the decor to the food is top-notch. Love the Signature Lola Spritz.", rating: 5 },
    { name: "Rohan", text: "The dimsums were delicate and flavorful. Great atmosphere for a weekend lunch.", rating: 4 },
    { name: "Meera", text: "Lola's is my new favorite spot. The staff is so friendly and the food is delicious.", rating: 5 }
  ];

  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [speed, setSpeed] = useState(0.5);

  useAnimationFrame((t, delta) => {
    const moveBy = speed * (delta / 16); // Normalize for 60fps
    x.set(x.get() - moveBy);

    // Loop logic: If we've moved past half the duplicated items, reset
    if (x.get() <= -3600) { // Approx width of one set of cards
      x.set(0);
    }
  });

  return (
    <section className="py-40 md:py-60 bg-[var(--base)] overflow-hidden relative perspective-1000">
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-serif leading-none mb-6">
              Word on the <br />
              <span className="italic text-[var(--accent)] ml-12 md:ml-24">street.</span>
            </h2>
            <p className="text-lg md:text-xl font-sans text-black/60 max-w-md">
              Don't take our word for it. Here's what our community of food lovers and cocktail enthusiasts have to say.
            </p>
          </div>
          
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[var(--accent)] animate-pulse">
              <span className="text-xs uppercase tracking-widest font-sans">Live</span>
            </div>
            <div className="w-px h-12 bg-black/10"></div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-serif italic">4.9/5</span>
              <span className="text-[10px] uppercase tracking-widest text-black/40">Average Rating</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* The Infinite Marquee Container */}
      <div 
        className="relative z-10 py-10"
        onMouseEnter={() => setSpeed(0.15)}
        onMouseLeave={() => setSpeed(0.5)}
      >
        <motion.div 
          ref={containerRef}
          style={{ x }}
          className="flex"
        >
          {/* Triple the items for a seamless loop */}
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <TestimonialCard key={i} review={review} index={i} />
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-[var(--base)] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-60 bg-gradient-to-l from-[var(--base)] to-transparent z-20 pointer-events-none" />
      </div>

      {/* Bottom Kinetic Strip */}
      <div className="mt-20 border-t border-b border-black/5 py-6 overflow-hidden relative">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center opacity-30"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sm md:text-lg font-serif uppercase tracking-[0.5em]">
              Crafted with Love • Fresh Ingredients • Cinematic Ambience • Artisan Cocktails • 
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialWave;

