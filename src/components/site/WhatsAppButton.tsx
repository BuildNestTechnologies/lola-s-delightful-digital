import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NUMBER = "919876543210";

export const WhatsAppButton = () => {
  const [hover, setHover] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    if (!hover) return;
    setTip(true);
    const t = setTimeout(() => setTip(false), 2000);
    return () => clearTimeout(t);
  }, [hover]);

  const open = () => {
    window.open(
      `https://wa.me/${NUMBER}?text=${encodeURIComponent(
        "Hello Dear Lola, I'd like to make a reservation or inquire about your menu."
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
    setTip(false);
  };

  return (
    <div
      className="fixed bottom-5 left-5 z-50 flex items-center gap-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {tip && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            className="hidden sm:inline-block bg-brand-ink text-[hsl(var(--brand-cream))] text-xs px-3 py-1.5 rounded-full shadow-soft"
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>
      <button
        onClick={open}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        aria-label="Chat on WhatsApp"
        className="relative h-14 w-14 rounded-full bg-[hsl(142,70%,40%)] text-white flex items-center justify-center shadow-elegant transition-transform hover:scale-110 animate-pulse-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.13-.756.34-.685.65-1.03 1.318-1.044 2.247v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.715.888.817 0 2.4-.515 2.733-1.318.13-.302.187-.63.215-.94 0-.4-.144-.487-.473-.6-.343-.115-1.673-.797-2.073-.797zM16.452 28.3c-1.5 0-2.962-.402-4.245-1.146l-.473-.273-4.673 1.247 1.247-4.673-.273-.473A8.7 8.7 0 0 1 7.7 19.205c0-4.83 3.92-8.752 8.752-8.752s8.752 3.922 8.752 8.752c0 4.83-3.92 8.752-8.752 8.752zM26.45 9.65A12.967 12.967 0 0 0 16.452 5.4c-7.156 0-12.987 5.83-12.987 12.987 0 2.286.6 4.516 1.748 6.488L3.3 32l7.273-1.906A12.918 12.918 0 0 0 16.452 31.5c7.156 0 12.987-5.83 12.987-12.987 0-3.467-1.346-6.733-3.79-9.16z" />
        </svg>
      </button>
    </div>
  );
};
