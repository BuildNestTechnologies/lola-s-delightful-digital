import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-20 px-6 md:px-20 bg-[var(--base)] text-[var(--deep)] border-t border-black/10 flex flex-col items-center justify-center text-center pb-32 md:pb-20">
      <h2 className="text-6xl md:text-8xl font-serif mb-12 italic font-light tracking-tighter">Dear Lola</h2>
      
      <div className="flex gap-10 mb-12">
        <a href="https://www.instagram.com/dearlola_india" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors interactive">
          <Instagram size={24} />
        </a>
        <a href="tel:+917304131415" className="hover:text-[var(--accent)] transition-colors interactive">
          <Phone size={24} />
        </a>
        <a href="https://www.google.com/maps/search/?api=1&query=Dear+Lola+Kitchen+Bar+Mohan+Tribeca+Kalyan" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors interactive">
          <MapPin size={24} />
        </a>
      </div>

      <div className="w-16 h-px bg-[var(--accent)] mb-8"></div>
      <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 font-sans mb-4">© {new Date().getFullYear()} Dear Lola Kitchen & Bar</p>
      <p className="text-xs opacity-30 font-serif italic">Crafted for Kalyan</p>
    </footer>
  );
};

export default Footer;
