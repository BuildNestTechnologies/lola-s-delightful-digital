import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onReserve: () => void;
}

export const Hero = ({ onReserve }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Ken-Burns background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-block text-[hsl(var(--brand-cream))]/85 uppercase tracking-[0.4em] text-xs md:text-sm mb-5"
        >
          Kitchen & Bar · Kalyan
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-[hsl(var(--brand-cream))] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-balance"
        >
          Welcome to <span className="italic text-brand-gold">Dear Lola</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-[hsl(var(--brand-cream))]/85 text-lg md:text-2xl font-light tracking-wide"
        >
          Cozy. Lively. Uniquely Flavorful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a href="#menu" className="gold-button text-[hsl(var(--brand-cream))] border-[hsl(var(--brand-cream))]/70 hover:bg-[hsl(var(--brand-cream))]/15">
            View Menu
          </a>
          <button onClick={onReserve} className="ink-button bg-brand-gold text-brand-ink hover:bg-brand-gold/90">
            Reserve a Table
          </button>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[hsl(var(--brand-cream))]/85 animate-float-y"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
};
