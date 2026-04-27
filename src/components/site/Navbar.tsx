import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/dear-lola-logo.jpg";

interface NavbarProps {
  onReserve: () => void;
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ onReserve }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-soft border-b border-brand-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 md:py-4">
          <a href="#home" className="flex items-center gap-3 group" aria-label="Dear Lola — Home">
            <span className="relative inline-block">
              <img
                src={logo}
                alt="Dear Lola"
                className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover ring-2 ring-brand-gold/50 transition-transform group-hover:scale-105"
              />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_0_3px_hsl(var(--background))]" />
            </span>
            <span className="font-serif text-xl md:text-2xl text-brand-ink leading-none">
              Dear<span className="text-brand-gold-deep">,</span> Lola
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brand-ink/80 hover:text-brand-ink transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={onReserve} className="hidden md:inline-flex ink-button text-sm py-2.5 px-5">
              Reserve a Table
            </button>
            <button
              aria-label="Open menu"
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-brand-gold/40 text-brand-ink"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile slide-in */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-brand-ink/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-[82%] max-w-sm bg-[hsl(var(--brand-cream))] shadow-elegant flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-brand-gold/30">
                <span className="font-serif text-xl text-brand-ink">Menu</span>
                <button
                  aria-label="Close menu"
                  className="h-9 w-9 rounded-full border border-brand-gold/40 inline-flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="flex-1 px-5 py-6 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="font-serif text-2xl py-3 border-b border-brand-gold/20 text-brand-ink"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="p-5 border-t border-brand-gold/30">
                <button
                  onClick={() => {
                    setOpen(false);
                    onReserve();
                  }}
                  className="ink-button w-full"
                >
                  Reserve a Table
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
