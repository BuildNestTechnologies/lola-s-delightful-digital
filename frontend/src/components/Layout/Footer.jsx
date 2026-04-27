import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-20 bg-[var(--base)] text-[var(--deep)] border-t border-black/10 flex flex-col items-center justify-center text-center pb-24 md:pb-16">
      <h2 className="text-6xl md:text-8xl font-serif mb-6 italic font-light tracking-tighter">Dear Lola</h2>
      <div className="w-16 h-px bg-[var(--accent)] mb-6"></div>
      <p className="text-sm tracking-widest uppercase opacity-60 font-sans mb-2">© {new Date().getFullYear()} Dear Lola Kitchen & Bar</p>
      <p className="text-xs opacity-40 font-serif italic">Made in Kalyan</p>
    </footer>
  );
};

export default Footer;
