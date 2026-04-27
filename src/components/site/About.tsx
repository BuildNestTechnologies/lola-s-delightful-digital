import { motion } from "framer-motion";
import { Star, Instagram, Sparkles, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[hsl(var(--brand-cream))]/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title mt-3 text-balance">
            An <em className="not-italic text-brand-gold-deep">alchemy</em> of taste, time and warm conversations.
          </h2>
          <p className="mt-6 text-brand-ink/75 leading-relaxed text-base md:text-lg">
            Tucked into the heart of Kalyan, Dear Lola is where slow evenings meet bold flavours.
            Our kitchen reimagines familiar comforts — Tempura Prawns, Truffle Dimsums, the
            Butter Chicken everyone whispers about — and our bar shakes mocktails worth posting.
          </p>
          <p className="mt-4 text-brand-ink/75 leading-relaxed">
            We're proudly loved on Instagram, deeply protective of our regulars, and lucky to have
            <span className="text-brand-ink font-medium"> Arup</span> — the server every guest
            ends up asking for by name.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
              <Star className="h-5 w-5 text-brand-gold-deep fill-brand-gold-deep" />
              <div>
                <div className="font-serif text-lg leading-none">4.4</div>
                <div className="text-xs text-brand-ink/60 mt-1">Google · 69 reviews</div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
              <Instagram className="h-5 w-5 text-brand-gold-deep" />
              <div>
                <div className="font-serif text-lg leading-none">@dearlola_india</div>
                <div className="text-xs text-brand-ink/60 mt-1">1,060+ followers</div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
              <Heart className="h-5 w-5 text-brand-gold-deep" />
              <div>
                <div className="font-serif text-lg leading-none">Open Late</div>
                <div className="text-xs text-brand-ink/60 mt-1">Daily · until 1 AM</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80"
              alt="Moody interior of Dear Lola Kitchen & Bar"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent" />
          </div>

          <div className="hidden md:flex absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-4 items-center gap-3 max-w-[260px]">
            <Sparkles className="h-5 w-5 text-brand-gold-deep" />
            <p className="text-sm text-brand-ink/80 leading-snug">
              "The vibe is unmatched — and Arup made our night."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
