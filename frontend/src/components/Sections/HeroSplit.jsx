import React from 'react';
import { motion } from 'framer-motion';

const HeroSplit = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-[var(--base)]">
      {/* Left Side: Content */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="w-full md:w-[40%] h-[50vh] md:h-full flex flex-col justify-center px-8 md:px-20 z-10 relative pt-20 md:pt-0"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-md">
          {/* Badge */}
          <motion.div variants={textVariants} className="inline-block px-4 py-1 border border-[var(--accent)] rounded-full text-xs tracking-widest uppercase text-[var(--accent)] mb-8">
            4.4 ☆ Google
          </motion.div>
          
          <motion.h1 variants={textVariants} className="text-6xl md:text-8xl font-serif leading-[0.9] mb-6 text-[var(--deep)]">
            <span className="block">Dear</span>
            <span className="block italic text-[var(--accent)] pr-4">Lola</span>
          </motion.h1>
          
          <motion.p variants={textVariants} className="text-lg md:text-xl font-sans text-black/70 mb-10 leading-relaxed">
            <span className="block overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 1.2, duration: 0.5 }}>Cozy.</motion.span></span>
            <span className="block overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 1.4, duration: 0.5 }}>Lively.</motion.span></span>
            <span className="block overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 1.6, duration: 0.5 }}>Uniquely Flavorful.<motion.span animate={{ opacity: [0,1,0] }} transition={{ repeat: Infinity, duration: 1 }}>_</motion.span></motion.span></span>
          </motion.p>
          
          <motion.div variants={textVariants} className="flex items-center gap-6">
            <a href="#menu" className="group font-serif italic text-xl border-b border-[var(--deep)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors interactive">
              Discover the menu <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
            </a>
            <button className="px-6 py-2 rounded-full border border-black/20 text-sm tracking-wide hover:bg-[var(--deep)] hover:text-white transition-all interactive hover:shadow-[0_0_15px_rgba(212,163,115,0.3)]">
              Reserve
            </button>
          </motion.div>
        </motion.div>
        
        {/* Animated split line indicator for desktop */}
        <motion.div 
          animate={{ y: [0, 50, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent hidden md:block"
        />
      </motion.div>

      {/* Right Side: Video/Image */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="w-full md:w-[60%] h-[50vh] md:h-full relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--base)] via-transparent to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--base)] via-transparent to-transparent z-10 md:hidden block"></div>
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 ease-linear"
          poster="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          {/* Using a placeholder video from a reliable source or relying on poster if video fails */}
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9d7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

export default HeroSplit;
