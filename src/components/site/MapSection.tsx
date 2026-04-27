import { motion } from "framer-motion";
import { MapPin, Star, ExternalLink } from "lucide-react";

const ADDRESS =
  "Ground Floor, Mohan Tribeca, Gandhare Road, near KM Agrawal College, Khadakpada, Kalyan 421301";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Dear+Lola+Kitchen+%26+Bar+Kalyan";

export const MapSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-5 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex flex-col justify-center"
        >
          <span className="eyebrow">Find Us</span>
          <h2 className="section-title mt-3">We've saved a seat for you.</h2>

          <div className="mt-6 inline-flex items-center gap-2 self-start glass-card rounded-full px-3 py-1.5">
            <Star className="h-4 w-4 fill-brand-gold-deep text-brand-gold-deep" />
            <span className="text-sm font-medium text-brand-ink">4.4</span>
            <span className="text-xs text-brand-ink/60">· 69 reviews on Google</span>
          </div>

          <div className="mt-6 flex items-start gap-3 text-brand-ink/80">
            <MapPin className="h-5 w-5 mt-0.5 text-brand-gold-deep shrink-0" />
            <p className="leading-relaxed">{ADDRESS}</p>
          </div>

          <div className="mt-4 text-sm text-brand-ink/70">
            <span className="font-medium text-brand-ink">Open daily</span> · until 1 AM
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="ink-button mt-8 self-start"
          >
            Get Directions <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 rounded-3xl overflow-hidden shadow-elegant border border-brand-gold/30 min-h-[360px] md:min-h-[440px]"
        >
          <iframe
            title="Dear Lola Kitchen & Bar location"
            src="https://maps.google.com/maps?q=Dear+Lola+Kitchen+%26+Bar+Kalyan&output=embed"
            className="w-full h-full min-h-[360px] md:min-h-[440px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};
