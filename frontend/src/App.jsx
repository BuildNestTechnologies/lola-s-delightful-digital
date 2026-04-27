import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HeroSplit from './components/Sections/HeroSplit';
import AsymmetricAbout from './components/Sections/AsymmetricAbout';
import StaggeredMenu from './components/Sections/StaggeredMenu';
import ScrollGallery from './components/Sections/ScrollGallery';
import TestimonialWave from './components/Sections/TestimonialWave';
import ContactMagnet from './components/Sections/ContactMagnet';
import CustomCursor from './components/UI/CustomCursor';
import WhatsAppOrb from './components/UI/WhatsAppOrb';
import ChatBloom from './components/UI/ChatBloom';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full bg-[var(--base)] min-h-screen">
      {/* Global Elements */}
      <div className="grain-overlay"></div>
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-screen bg-[var(--accent)]/20 z-50 origin-top hidden md:block"
        style={{ scaleY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-screen bg-[var(--accent)] z-50 origin-top hidden md:block"
        style={{ scaleY }}
      />

      <Navbar />
      <WhatsAppOrb />
      <ChatBloom />

      {/* Main Content */}
      <main>
        <HeroSplit />
        <AsymmetricAbout />
        <StaggeredMenu />
        <ScrollGallery />
        <TestimonialWave />
        <ContactMagnet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
