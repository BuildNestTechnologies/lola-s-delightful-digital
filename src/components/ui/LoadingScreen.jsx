import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('text'); // text, transition, complete

  useEffect(() => {
    // Phases timing
    const textTimer = setTimeout(() => setPhase('transition'), 2500);
    const completeTimer = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const letters = "Lola".split("");

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1E1A17] overflow-hidden">
      {/* Cinematic Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-overlay" />
      
      <AnimatePresence mode="wait">
        {phase === 'text' && (
          <motion.div 
            key="text-container"
            className="relative flex items-baseline gap-1"
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.1, 
                    ease: [0.215, 0.61, 0.355, 1] 
                  }}
                  className="text-8xl md:text-[12rem] font-serif text-[var(--accent)] inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <motion.span 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="w-4 h-4 md:w-6 md:h-6 bg-[var(--accent)] rounded-full mb-4 md:mb-8"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The "WOW" Transition Layer */}
      <AnimatePresence>
        {phase === 'transition' && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#F7F3EF] z-10"
          />
        )}
      </AnimatePresence>

      {/* Subtle light leak effect during loading */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[150px] rounded-full pointer-events-none"
      />
    </div>
  );
};

export default LoadingScreen;
