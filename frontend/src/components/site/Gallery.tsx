import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "@/data/gallery";

const Img = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <button
      onClick={onClick}
      className="relative block w-full mb-4 overflow-hidden rounded-2xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      aria-label={`Open image: ${alt}`}
    >
      {!loaded && <div className="absolute inset-0 skeleton-shimmer" aria-hidden />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export const Gallery = () => {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-[hsl(var(--brand-cream))]/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title mt-3">A look around the room.</h2>
          <p className="mt-4 text-brand-ink/70">
            Plates, pours and the moments in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 columns-1 sm:columns-2 md:columns-3 gap-4"
        >
          {GALLERY.map((g, i) => (
            <Img key={g.src} src={g.src} alt={g.alt} onClick={() => setIndex(i)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-brand-ink/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-[hsl(var(--brand-cream))] inline-flex items-center justify-center"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-3 md:left-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-[hsl(var(--brand-cream))] inline-flex items-center justify-center"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-3 md:right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-[hsl(var(--brand-cream))] inline-flex items-center justify-center"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.img
              key={GALLERY[index].src}
              src={GALLERY[index].src}
              alt={GALLERY[index].alt}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elegant object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
