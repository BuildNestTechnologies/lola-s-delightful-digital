import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        className="w-14 h-14 bg-[var(--deep)] rounded-full flex items-center justify-center shadow-lg relative interactive"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--base)]"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ChatBloom;
