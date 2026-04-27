import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LolaChat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Lola's AI assistant. Ask me about our menu, hours, or how to get here.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    const userText = text || input;
    if (!userText.trim()) return;

    const newMsgs = [...messages, { text: userText, sender: "user" }];
    // Keep last 5 messages
    if (newMsgs.length > 6) {
      newMsgs.splice(0, newMsgs.length - 6);
    }
    setMessages(newMsgs);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botResponse = "Hmm, I'm still a young bloom. But you can WhatsApp us or call +91 98765 43210.";

      if (lower.includes("hours") || lower.includes("time")) {
        botResponse = "Mon–Sun, 12 PM – 1 AM. Last order 12:30 AM.";
      } else if (lower.includes("address") || lower.includes("direction") || lower.includes("location")) {
        botResponse = "Mohan Tribeca, Gandhare Road, Kalyan – here's a link: https://maps.app.goo.gl/";
      } else if (lower.includes("tempura prawns")) {
        botResponse = "Our Tempura Prawns are legendary – crispy, juicy, served with a tangy dip. ₹450.";
      } else if (lower.includes("butter chicken")) {
        botResponse = "Rich, smoky, with a hint of kasuri methi. Pairs perfectly with our garlic naan. ₹520.";
      } else if (lower.includes("arup")) {
        botResponse = "Arup is our hospitality gem! He'll make you feel like family.";
      } else if (lower.includes("delivery") || lower.includes("zomato") || lower.includes("order")) {
        botResponse = "We have kerbside pickup and no-contact delivery via Zomato.";
      } else if (lower.includes("rating") || lower.includes("review")) {
        botResponse = "4.4 stars from 69 Google reviews. Want to leave one? Here's the link.";
      } else if (lower.includes("instagram") || lower.includes("social")) {
        botResponse = "@dearlola_india – we post daily specials and behind-the-scenes.";
      } else if (lower.includes("menu") || lower.includes("food")) {
        botResponse = "Check out the Staggered Menu section on this page, or ask me about any dish.";
      } else if (lower.includes("reservation") || lower.includes("book") || lower.includes("table")) {
        botResponse = "You can use the draggable card in the Contact section, or just tell me how many people and when – I'll simulate a booking (for demo).";
      } else if (lower.includes("veg") || lower.includes("vegetarian")) {
        botResponse = "We have plenty of veg options! Our Subzi Diwani Handi and Signature Dimsums are crowd favorites.";
      } else if (lower.includes("parking")) {
        botResponse = "Valet parking is available at the entrance.";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-[var(--base)] rounded-[30px] overflow-hidden text-[var(--deep)] shadow-2xl border border-[var(--accent)]/30">
      {/* Header */}
      <div className="bg-[var(--deep)] text-white p-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center font-serif italic">L</div>
          <div>
            <h4 className="font-serif tracking-wide leading-none">Lola AI</h4>
            <span className="text-[10px] text-green-400">● Online</span>
          </div>
        </div>
        <button onClick={onClose} className="hover:text-[var(--accent)] transition-colors interactive">✕</button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-sm font-sans bg-[var(--base)]">
        {messages.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`max-w-[85%] p-3 rounded-2xl ${m.sender === 'user' ? 'bg-[var(--accent)] text-white self-end rounded-br-sm' : 'bg-white border border-black/5 self-start rounded-bl-sm shadow-sm'}`}
          >
            {m.text}
          </motion.div>
        ))}
        
        {isTyping && (
          <div className="bg-white border border-black/5 self-start p-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 w-12 justify-center">
            <motion.div className="w-1.5 h-1.5 bg-black/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
            <motion.div className="w-1.5 h-1.5 bg-black/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
            <motion.div className="w-1.5 h-1.5 bg-black/40 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="p-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-black/5 shrink-0 bg-white">
        {["📍 Directions", "🍽️ Menu", "🕒 Hours", "⭐ Review"].map(chip => (
          <button 
            key={chip}
            onClick={() => handleSend(chip)}
            className="whitespace-nowrap text-xs border border-[var(--accent)] text-[var(--accent)] px-3 py-1.5 rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors interactive"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input */}
      <form 
        className="p-3 bg-white flex gap-2 shrink-0 border-t border-black/5"
        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
      >
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-[var(--base)] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
        />
        <button 
          type="submit"
          className="bg-[var(--deep)] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition-colors interactive"
        >
          ↑
        </button>
      </form>
    </div>
  );
};

export default LolaChat;
