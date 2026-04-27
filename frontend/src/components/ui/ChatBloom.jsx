import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import LolaChat from '../Chatbot/LolaChat';

const ChatBloom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute bottom-16 left-0 w-[360px] h-[500px]"
          >
            {/* Petal decorations */}
            <motion.div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-[var(--accent)] opacity-20 rounded-full" style={{ borderTopRightRadius: '100px', borderBottomLeftRadius: '100px' }}></motion.div>
            <motion.div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-[var(--accent)] opacity-20 rounded-full" style={{ borderBottomLeftRadius: '100px', borderTopRightRadius: '100px' }}></motion.div>
            
            <LolaChat onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#D4A374] text-[var(--deep)] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(212,163,116,0.3)] relative interactive border-2 border-white/20"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <MessageCircle size={28} fill="currentColor" fillOpacity={0.1} />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ChatBloom;
