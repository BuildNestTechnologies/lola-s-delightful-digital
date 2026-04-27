import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuTabs } from "@/components/site/MenuTabs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { MapSection } from "@/components/site/MapSection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Chatbot } from "@/components/site/Chatbot";
import { ReservationModal } from "@/components/site/ReservationModal";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CursorFollower } from "@/components/site/CursorFollower";

const Index = () => {
  const [reserveOpen, setReserveOpen] = useState(false);
  const openReserve = () => setReserveOpen(true);

  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <ScrollProgress />
      <CursorFollower />
      <Navbar onReserve={openReserve} />
      <Hero onReserve={openReserve} />
      <About />
      <MenuTabs />
      <Gallery />
      <Testimonials />
      <MapSection />
      <Footer />

      <WhatsAppButton />
      <Chatbot />
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </main>
  );
};

export default Index;
