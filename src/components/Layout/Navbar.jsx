import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { EASINGS } from '../../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Basic active section detection
      const sections = ['gallery', 'menu', 'our-story', 'reservations'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "The Vibe", href: "#gallery", id: "gallery" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "Our Story", href: "#our-story", id: "our-story" },
    { name: "Reserve", href: "#reservations", id: "reservations" }
  ];

  return (
    <>
      {/* Floating Island Navbar */}
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASINGS.default }}
          className={`
            pointer-events-auto
            flex items-center gap-4 md:gap-10 px-6 md:px-10 py-2.5 md:py-3.5
            bg-[#1E1A17] rounded-full
            border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]
            transition-all duration-500
            ${scrolled ? 'scale-90 opacity-90' : 'scale-100'}
          `}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-serif tracking-tighter text-white">
              Dear <span className="italic text-[#D4A374]">Lola.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`
                  relative text-[9px] uppercase tracking-[0.4em] font-sans font-medium transition-all duration-300
                  ${activeLink === link.id ? 'text-[#D4A374]' : 'text-white/80 hover:text-white'}
                `}
              >
                {link.name}
                {activeLink === link.id && (
                  <motion.div 
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent)] rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-white/10 hidden md:block" />

          {/* Contact Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <a href="https://www.instagram.com/dearlola_india" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[var(--accent)] transition-colors"><Instagram size={18} /></a>
            <a href="tel:+917304131415" className="text-white/40 hover:text-[var(--accent)] transition-colors"><Phone size={18} /></a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden text-[var(--base)] p-1 hover:text-[var(--accent)] transition-colors"
          >
            <Menu size={20} />
          </button>
        </motion.nav>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: EASINGS.default }}
            className="fixed inset-0 z-[110] bg-[var(--deep)] flex flex-col p-10 md:p-20 overflow-hidden"
          >
            {/* Artistic Background elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none grain-overlay" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-[var(--accent)]/5 blur-[120px] rounded-full" 
            />
            
            <div className="flex justify-between items-center mb-24 relative z-10">
              <span className="text-xl font-serif text-[var(--base)] italic opacity-40 font-light">Menu</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-[var(--base)] p-5 bg-white/5 rounded-full hover:bg-[var(--accent)] transition-all shadow-xl"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1, ease: EASINGS.default }}
                  onClick={() => setIsOpen(false)}
                  className="text-6xl md:text-8xl font-serif text-[var(--base)] hover:text-[var(--accent)] transition-all flex items-baseline gap-6 group"
                >
                  <span className="text-xs font-sans opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/5 relative z-10 flex flex-col md:flex-row justify-between gap-12">
              <div className="flex flex-col gap-8">
                <div className="flex gap-10">
                  <a href="https://www.instagram.com/dearlola_india" target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:text-white transition-all transform hover:scale-110"><Instagram size={32} /></a>
                  <a href="tel:+917304131415" className="text-[var(--accent)] hover:text-white transition-all transform hover:scale-110"><Phone size={32} /></a>
                  <a href="https://www.google.com/maps/search/?api=1&query=Dear+Lola+Kitchen+Bar+Mohan+Tribeca+Kalyan" target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:text-white transition-all transform hover:scale-110"><MapPin size={32} /></a>
                </div>
                <p className="text-[var(--base)] opacity-30 uppercase tracking-[0.5em] text-[8px]">Crafting moments in Kalyan</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a 
                  href="/dear-lola-menu.pdf" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white/5 text-white px-12 py-6 rounded-2xl font-serif text-2xl italic border border-white/10 hover:bg-white/10 transition-all text-center"
                >
                  Download Menu
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-[var(--accent)] text-white px-12 py-6 rounded-2xl font-serif text-2xl italic shadow-2xl hover:scale-[1.02] transition-transform"
                >
                  Book a Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
