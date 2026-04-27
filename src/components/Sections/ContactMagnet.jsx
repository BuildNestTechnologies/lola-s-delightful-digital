import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactMagnet = () => {
  const [status, setStatus] = useState("idle"); // idle, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="reservations" className="py-32 px-6 md:px-20 bg-[var(--deep)] text-[var(--base)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left: Draggable Reservation Card */}
        <div className="relative">
          <div className="hidden md:block absolute -inset-10 border border-white/10 rounded-[40px] transform -rotate-3"></div>
          
          <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            whileDrag={{ scale: 1.02, cursor: "grabbing" }}
            className="bg-[var(--base)] text-[var(--deep)] p-10 rounded-3xl clip-asymmetric relative z-10 cursor-grab interactive shadow-2xl"
          >
            <h3 className="font-serif text-4xl mb-2">Table for you.</h3>
            <p className="font-sans text-sm opacity-70 mb-8">Drag me around. Or just fill me out.</p>

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="h-[300px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-[var(--accent)] text-white rounded-full flex items-center justify-center mb-4">✓</div>
                <h4 className="font-serif text-2xl">See you soon!</h4>
                <p className="text-sm mt-2 opacity-70">Your reservation request has been sent.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-1 opacity-60">Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-1 opacity-60">Guests</label>
                    <select className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-1 opacity-60">Date</label>
                    <input required type="date" className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-1 opacity-60">Time</label>
                    <input required type="time" className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-[var(--deep)] text-white py-4 rounded-xl hover:bg-[var(--accent)] transition-colors tracking-widest uppercase text-xs font-semibold mt-4 interactive">
                  Request Booking
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Right: Map & Info */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative shrink-0 w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-8 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group interactive"
          >
            {/* User Provided Map Embed - White Style */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.470721620106!2d73.1350679!3d19.2618854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7972011631e6d%3A0x9787e9f13e446082!2sDear%20Lola%20Kitchen%20%26%20Bar!5e0!3m2!1sen!2sin!4v1777306908956!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out"
            ></iframe>
            
            {/* Clean Ring Overlay */}
            <div className="absolute inset-0 border-[10px] border-[var(--deep)] rounded-full pointer-events-none"></div>
          </motion.div>

          <div className="text-center md:text-left max-w-sm">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 text-[var(--accent)]">Dear Lola <br className="hidden md:block" />Kitchen & Bar</h3>
            <p className="font-sans opacity-80 mb-4 leading-relaxed text-sm md:text-base">
              Ground Floor, Mohan Tribeca, <br />
              Gandhare Road, near KM Agrawal College, <br />
              West, Khadakpada, Kalyan, <br />
              Maharashtra 421301
            </p>
            <p className="font-sans opacity-80 mb-8 italic text-sm">Mon–Sun, 12 PM – 1 AM</p>
            
            <button className="text-[var(--base)] border-b border-[var(--base)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors uppercase tracking-widest text-[10px] interactive">
              Chat with Lola (our AI) ↓
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMagnet;
