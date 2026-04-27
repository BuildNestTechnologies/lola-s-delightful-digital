import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, MENU, type MenuCategory } from "@/data/menu";
import { Star } from "lucide-react";

export const MenuTabs = () => {
  const [active, setActive] = useState<MenuCategory>("Starters");

  return (
    <section id="menu" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow">The Menu</span>
          <h2 className="section-title mt-3">A few reasons to stay a little longer.</h2>
          <p className="mt-4 text-brand-ink/70">
            Seasonal, hand-crafted plates and signature mocktails — explore by course.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative rounded-full px-5 md:px-6 py-2.5 text-sm md:text-base font-medium transition-colors ${
                  isActive
                    ? "text-[hsl(var(--brand-cream))]"
                    : "text-brand-ink/70 hover:text-brand-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-bg"
                    className="absolute inset-0 rounded-full bg-brand-ink"
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-5 md:gap-6"
            >
              {MENU[active].map((item) => (
                <article
                  key={item.name}
                  className="glass-card rounded-2xl p-6 flex gap-4 items-start hover:shadow-elegant transition-shadow"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-xl text-brand-ink leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg text-brand-gold-deep whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.popular && (
                      <span className="inline-flex items-center gap-1 mt-2 text-[10px] uppercase tracking-[0.18em] text-brand-gold-deep bg-brand-gold/15 border border-brand-gold/40 px-2 py-0.5 rounded-full">
                        <Star className="h-3 w-3 fill-brand-gold-deep text-brand-gold-deep" />
                        Popular
                      </span>
                    )}
                    <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
