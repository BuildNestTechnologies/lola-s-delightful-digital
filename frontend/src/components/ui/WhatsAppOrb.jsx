import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppOrb = () => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent("Hey Lola, I saw your website - I'd love to visit / order.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex items-center justify-end interactive"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        animate={{
          width: hovered ? 160 : 60,
          borderRadius: hovered ? 30 : 30
        }}
        className="bg-[#25D366] h-[60px] shadow-lg flex items-center justify-start overflow-hidden cursor-pointer backdrop-blur-sm"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="min-w-[60px] h-[60px] flex items-center justify-center">
          <MessageCircle size={28} color="white" />
        </div>
        <motion.span
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : -20
          }}
          className="text-white font-medium whitespace-nowrap pr-6"
        >
          WhatsApp us
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppOrb;
