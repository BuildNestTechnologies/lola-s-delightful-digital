import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, User as UserIcon, Phone } from "lucide-react";
import { toast } from "sonner";

const NUMBER = "919876543210";

interface ReservationModalProps {
  open: boolean;
  onClose: () => void;
}

export const ReservationModal = ({ open, onClose }: ReservationModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Dear Lola, I'd like to reserve a table for ${guests} on ${date} at ${time}. Name: ${name}, Phone: ${phone}.`;
    window.open(`https://wa.me/${NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to confirm your reservation…");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="resv"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-brand-ink/55 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resv-title"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[hsl(var(--background))] rounded-3xl shadow-elegant border border-brand-gold/30 overflow-hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 h-9 w-9 rounded-full inline-flex items-center justify-center text-brand-ink/70 hover:bg-brand-gold/15"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-6 pt-7 pb-5 bg-gradient-warm">
              <span className="eyebrow">Reservation</span>
              <h3 id="resv-title" className="font-serif text-2xl mt-2 text-brand-ink">
                Save your seat at Dear Lola
              </h3>
              <p className="text-sm text-brand-ink/70 mt-1">
                We'll confirm via WhatsApp within minutes.
              </p>
            </div>

            <form onSubmit={submit} className="px-6 py-6 space-y-4">
              <Field icon={<UserIcon className="h-4 w-4" />} label="Full name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent outline-none text-sm py-2"
                />
              </Field>
              <Field icon={<Phone className="h-4 w-4" />} label="Phone number">
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 …"
                  className="w-full bg-transparent outline-none text-sm py-2"
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field icon={<Calendar className="h-4 w-4" />} label="Date">
                  <input
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm py-2"
                  />
                </Field>
                <Field icon={<Clock className="h-4 w-4" />} label="Time">
                  <input
                    required
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm py-2"
                  />
                </Field>
              </div>
              <Field icon={<Users className="h-4 w-4" />} label="Guests">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm py-2"
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} {i === 0 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </Field>

              <button type="submit" className="ink-button w-full mt-2">
                Confirm via WhatsApp
              </button>
              <p className="text-[11px] text-brand-ink/55 text-center">
                Tapping confirm opens WhatsApp with your details pre-filled.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Field = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="text-[11px] uppercase tracking-[0.18em] text-brand-ink/60 font-medium">
      {label}
    </span>
    <div className="mt-1 flex items-center gap-2 px-3 rounded-xl border border-brand-gold/40 bg-white/60 focus-within:ring-2 focus-within:ring-brand-gold focus-within:border-brand-gold transition-all">
      <span className="text-brand-gold-deep">{icon}</span>
      {children}
    </div>
  </label>
);
