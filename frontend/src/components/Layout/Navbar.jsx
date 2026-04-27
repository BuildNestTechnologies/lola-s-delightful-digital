import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { EASINGS, buttonHover, buttonTap } from '../../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "The Vibe", href: "#gallery" },
    { name: "What's Cooking", href: "#menu" },
    { name: "Our Story", href: "#about" },
    { name: "Join Us", href: "#contact" }
  ];

  return (
    <>
      {/* Cinematic Horizontal Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASINGS.default }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled 
            ? 'bg-[var(--deep)]/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo - Consistently Visible */}
          <a href="#" className="relative group interactive flex items-center gap-2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-2xl md:text-3xl font-serif tracking-tighter"
            >
              <span className={scrolled ? 'text-[var(--base)]' : 'text-[var(--deep)]'}>Dear </span>
              <span className="italic text-[var(--accent)] font-light">Lola.</span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.4em] font-sans transition-all duration-500 hover:text-[var(--accent)] hover:translate-y-[-2px] interactive ${
                  scrolled ? 'text-[var(--base)]/80' : 'text-[var(--deep)]/70'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <motion.button 
              whileHover={buttonHover}
              whileTap={buttonTap}
              className={`px-10 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-sans transition-all duration-500 interactive shadow-2xl ${
                scrolled 
                  ? 'bg-[var(--accent)] text-white hover:bg-white hover:text-[var(--deep)]' 
                  : 'bg-[var(--deep)] text-[var(--base)] hover:bg-[var(--accent)]'
              }`}
            >
              Reservations
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className={`md:hidden p-3 rounded-full transition-all duration-500 ${
              scrolled ? 'text-[var(--base)] bg-white/5' : 'text-[var(--deep)] bg-[var(--deep)]/5'
            }`}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[var(--deep)] flex flex-col p-10 md:p-20 overflow-hidden"
          >
            {/* Artistic Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none grain-overlay" />
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--accent)]/10 blur-[150px] rounded-full" />
            
            <div className="flex justify-between items-center mb-24 relative z-10">
              <span className="text-xl font-serif text-[var(--base)] italic opacity-40">Navigation</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-[var(--base)] p-4 bg-white/5 rounded-full hover:bg-[var(--accent)] transition-all"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, ease: EASINGS.default }}
                  onClick={() => setIsOpen(false)}
                  className="text-6xl md:text-8xl font-serif text-[var(--base)] hover:text-[var(--accent)] transition-all flex items-baseline gap-6 group"
                >
                  <span className="text-xs font-sans opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/5 relative z-10 flex flex-col md:flex-row justify-between gap-12">
              <div className="flex flex-col gap-6">
                <p className="text-[var(--base)] opacity-40 uppercase tracking-[0.3em] text-[10px]">Alchemy of Taste & Time</p>
                <div className="flex gap-8">
                  <a href="#" className="text-[var(--accent)] hover:text-white transition-colors"><Instagram size={28} /></a>
                  <a href="#" className="text-[var(--accent)] hover:text-white transition-colors"><Phone size={28} /></a>
                  <a href="#" className="text-[var(--accent)] hover:text-white transition-colors"><MapPin size={28} /></a>
                </div>
              </div>
              <button className="bg-[var(--accent)] text-white px-12 py-6 rounded-2xl font-serif text-2xl italic shadow-2xl hover:scale-[1.02] transition-transform">
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
