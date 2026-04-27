import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, MapPin, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "-100%", transition: { ease: "circIn", duration: 0.5 } },
    open: { opacity: 1, x: 0, transition: { ease: "circOut", duration: 0.5 } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  const links = ["Menu", "Our Story", "Gallery", "Reservations"];

  return (
    <>
      {/* Desktop & Mobile Menu Trigger */}
      <motion.div 
        className="fixed top-6 left-6 z-50 mix-blend-difference hidden md:block interactive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[var(--accent)] text-white px-6 py-2 rounded-full font-medium tracking-wide flex items-center gap-2 hover:bg-white hover:text-[var(--deep)] transition-colors"
        >
          <Menu size={18} /> Menu
        </button>
      </motion.div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[var(--deep)] text-white p-4 z-40 md:hidden flex justify-around items-center border-t border-white/10 backdrop-blur-md bg-opacity-90">
        <button onClick={() => setIsOpen(true)} className="flex flex-col items-center gap-1 text-[var(--accent)] interactive">
          <Menu size={24} />
          <span className="text-[10px] uppercase tracking-wider">Menu</span>
        </button>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 interactive">
          <Phone size={24} />
          <span className="text-[10px] uppercase tracking-wider">Call</span>
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 interactive">
          <MapPin size={24} />
          <span className="text-[10px] uppercase tracking-wider">Find Us</span>
        </a>
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[var(--deep)] text-[var(--base)] z-[100] flex flex-col justify-center px-12 md:px-32"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-[var(--base)] hover:text-[var(--accent)] transition-colors interactive group"
            >
              <X size={48} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>

            <div className="flex flex-col gap-6 md:gap-10">
              {links.map((link, i) => (
                <motion.div
                  key={link}
                  custom={i}
                  variants={linkVariants}
                  className="overflow-hidden"
                >
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[var(--base)] to-[var(--base)] hover:from-[var(--accent)] hover:to-[#B5835A] transition-all interactive block w-max"
                  >
                    {link}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={linkVariants}
              custom={4}
              className="mt-20 flex gap-8 items-center"
            >
              <a href="https://www.instagram.com/dearlola_india" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors interactive">
                <Instagram size={24} /> <span className="uppercase tracking-widest text-sm">Instagram</span>
              </a>
              <div className="h-px w-12 bg-white/20"></div>
              <p className="text-sm opacity-60">Mon-Sun, 12 PM - 1 AM</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
