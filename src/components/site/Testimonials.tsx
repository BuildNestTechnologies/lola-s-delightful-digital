import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const t = TESTIMONIALS[i];

  return (
    <section id="reviews" className="relative py-20 md:py-28 bg-brand-ink text-[hsl(var(--brand-cream))]">
      <div
        ref={ref}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="container mx-auto px-6 md:px-12 lg:px-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow text-brand-gold">Guest Love</span>
          <h2 className="section-title mt-3 text-[hsl(var(--brand-cream))]">
            Stories from our regulars.
          </h2>
        </motion.div>

        <div className="mt-12 max-w-3xl mx-auto relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star
                    key={n}
                    className={`h-4 w-4 ${
                      n < t.rating
                        ? "fill-brand-gold text-brand-gold"
                        : "text-[hsl(var(--brand-cream))]/30"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-[hsl(var(--brand-cream))]/95 text-balance">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full ring-2 ring-brand-gold/60 object-cover"
                />
                <div className="text-left">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-[hsl(var(--brand-cream))]/60">Verified guest</div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Show review ${n + 1}`}
              className={`h-2 rounded-full transition-all ${
                n === i ? "w-8 bg-brand-gold" : "w-2 bg-[hsl(var(--brand-cream))]/30 hover:bg-[hsl(var(--brand-cream))]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
