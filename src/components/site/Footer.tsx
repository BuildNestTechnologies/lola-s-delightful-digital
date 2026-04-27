import { Instagram, MessageCircle, Utensils, ArrowUp } from "lucide-react";
import logo from "@/assets/dear-lola-logo.jpg";

const WHATSAPP =
  "https://wa.me/919876543210?text=Hello%20Dear%20Lola%2C%20I%27d%20like%20to%20make%20a%20reservation%20or%20inquire%20about%20your%20menu.";

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative bg-[hsl(var(--brand-cream))]/60 border-t border-brand-gold/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dear Lola" className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-gold/50" />
            <span className="font-serif text-2xl text-brand-ink">Dear<span className="text-brand-gold-deep">,</span> Lola</span>
          </div>
          <p className="mt-4 text-sm text-brand-ink/70 leading-relaxed max-w-xs">
            Alchemy of taste and time, crafted for nights that refuse to end.
          </p>
        </div>

        <div className="md:text-center">
          <div className="font-serif text-lg text-brand-ink">Stay in touch</div>
          <div className="mt-4 flex md:justify-center items-center gap-3">
            <a
              href="https://instagram.com/dearlola_india"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-11 w-11 rounded-full border border-brand-gold/40 inline-flex items-center justify-center text-brand-ink hover:bg-brand-gold/15 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Zomato"
              className="h-11 w-11 rounded-full border border-brand-gold/40 inline-flex items-center justify-center text-brand-ink hover:bg-brand-gold/15 transition-colors"
            >
              <Utensils className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-11 w-11 rounded-full border border-brand-gold/40 inline-flex items-center justify-center text-brand-ink hover:bg-brand-gold/15 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <button
            onClick={scrollTop}
            className="gold-button"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="border-t border-brand-gold/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-5 text-xs md:text-sm text-brand-ink/60 flex flex-col md:flex-row gap-2 items-center justify-between">
          <span>© 2025 Dear Lola. Crafted with warmth.</span>
          <span>Kalyan · Open daily until 1 AM</span>
        </div>
      </div>
    </footer>
  );
};
