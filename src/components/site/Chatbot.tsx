import { memo, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

interface ChatMessage {
  text: string;
  sender: "bot" | "user";
}

const GREETING: ChatMessage = {
  sender: "bot",
  text: "Hey there! I'm Lola, the virtual assistant. Ask me anything about our restaurant, menu, hours, or Arup! 😊",
};

const QUICK_REPLIES = [
  { label: "📍 Directions", query: "directions" },
  { label: "📞 Call", query: "call" },
  { label: "🕒 Hours", query: "hours" },
];

function answerFor(raw: string): string {
  const m = raw.toLowerCase();
  const has = (...keys: string[]) => keys.some((k) => m.includes(k));

  if (has("hour", "open", "close", "timing")) return "We're open daily until 1 AM.";
  if (has("address", "location", "where", "directions"))
    return "We're at Ground Floor, Mohan Tribeca, Gandhare Road, near KM Agrawal College, Khadakpada, Kalyan 421301.";
  if (has("call", "phone", "number"))
    return "You can reach us on WhatsApp at +91 98765 43210 — tap the green button on the bottom-left.";
  if (has("tempura", "prawn"))
    return "Our Tempura Prawns are a signature dish — crispy, juicy, and highly recommended!";
  if (has("butter chicken")) return "Butter Chicken with Naan is a customer favourite. It has a unique, rich gravy.";
  if (has("arup")) return "Arup is one of our star servers — guests love his attentive and warm service!";
  if (has("delivery", "pickup", "kerbside", "zomato"))
    return "We offer kerbside pickup and no-contact delivery. Call us or order via Zomato.";
  if (has("rating", "google", "review"))
    return "We have a 4.4-star rating from 69 reviews on Google. People love the vibe and unique taste.";
  if (has("instagram", "insta", "promo", "social"))
    return "We're heavily promoted on Instagram! Follow @dearlola_india for updates and offers.";
  if (has("ambience", "ambiance", "vibe", "atmosphere", "music"))
    return "Cozy, warm lighting, lively crowd — perfect for date nights or group hangouts.";
  if (has("mocktail", "drink", "spritz", "cocktail"))
    return "Try our Signature Lola Spritz, Lotus Gem or the Piña Colada Reimagined — all bar-crafted.";
  if (has("dimsum", "dim sum"))
    return "Our Truffle Dimsums are hand-pleated daily — wild mushroom with a black truffle drizzle.";
  if (has("price", "cost", "expensive", "cheap"))
    return "Most starters are ₹395–545, mains ₹525–645, mocktails ₹265–325. Comfortable for two without surprises.";
  if (has("park", "parking")) return "Yes — convenient parking is available right outside the building.";
  if (has("reserv", "book", "table"))
    return "Tap any 'Reserve a Table' button on the page — we'll confirm on WhatsApp within minutes.";
  if (has("menu", "food", "dish", "eat"))
    return "Scroll up to the Menu section — we have Starters, Mains, Mocktails and Desserts. The Tempura Prawns and Butter Chicken are crowd favourites!";
  if (has("hi", "hello", "hey", "yo")) return "Hi there! 👋 Ask me about our menu, hours, location or anything else.";

  return "I'm still learning! But you can call us or WhatsApp for immediate help. 😊";
}

const Bubble = memo(({ m }: { m: ChatMessage }) => (
  <div className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl ${
        m.sender === "user"
          ? "bg-brand-ink text-[hsl(var(--brand-cream))] rounded-br-sm"
          : "bg-white text-brand-ink border border-brand-gold/30 rounded-bl-sm"
      }`}
    >
      {m.text}
    </div>
  </div>
));
Bubble.displayName = "Bubble";

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((prev) => {
      const next: ChatMessage[] = [
        ...prev,
        { sender: "user", text },
        { sender: "bot", text: answerFor(text) },
      ];
      return next.length > 11 ? [GREETING, ...next.slice(-10)] : next;
    });
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ transformOrigin: "bottom right" }}
            className="w-[min(92vw,320px)] h-[400px] rounded-3xl shadow-elegant border border-brand-gold/30 bg-white/85 backdrop-blur-xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="Lola virtual assistant"
          >
            <div className="px-4 py-3 bg-brand-ink text-[hsl(var(--brand-cream))] flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-brand-gold text-brand-ink font-serif font-bold flex items-center justify-center">
                L
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium leading-none">Lola</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-1">Virtual host</div>
              </div>
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-white/10 inline-flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 bg-[hsl(var(--brand-cream))]/40">
              {messages.map((m, i) => (
                <Bubble key={i} m={m} />
              ))}
            </div>

            <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 bg-[hsl(var(--brand-cream))]/40 border-t border-brand-gold/20">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q.label}
                  onClick={() => send(q.query)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-brand-gold/40 text-brand-ink hover:bg-brand-gold/15 transition-colors"
                >
                  {q.label}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="p-2 bg-white flex items-center gap-2 border-t border-brand-gold/20">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about hours, menu, Arup…"
                className="flex-1 px-3 py-2 text-sm rounded-full bg-[hsl(var(--brand-cream))]/60 border border-brand-gold/30 outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Type your message"
              />
              <button
                type="submit"
                aria-label="Send"
                className="h-9 w-9 rounded-full bg-brand-ink text-[hsl(var(--brand-cream))] inline-flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with Lola"}
        className="h-14 w-14 rounded-full bg-brand-ink text-[hsl(var(--brand-cream))] shadow-elegant flex items-center justify-center hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="m"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};
