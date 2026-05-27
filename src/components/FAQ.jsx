import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What clinical treatments do you offer for acne and scars?',
    answer: 'We provide comprehensive, dermatologist-supervised acne programs. For active acne, we offer clinical comedone extractions, salicylic acid peels, and LED blue-light therapies. For structural acne scars, we utilize gold-standard Subcision, Microneedling Fractional RF (MNRF), and CO2 fractional lasers to stimulate deep collagen remodeling and smooth textural indentations.'
  },
  {
    id: 2,
    question: 'Is Laser Hair Removal safe for all skin tones, and does it hurt?',
    answer: 'Yes! We use advanced, FDA-approved triple-wavelength diode laser systems that are scientifically proven to be safe and highly effective for all skin tones (Fitzpatrick Scale I to VI). Our device features an advanced contact cooling sapphire tip that chills the skin to 4°C during treatment, neutralizing heat sensations and making the procedure virtually painless.'
  },
  {
    id: 3,
    question: 'What is PRP Scalp Therapy and how does it treat hair fall?',
    answer: 'Platelet-Rich Plasma (PRP) therapy is an advanced, non-surgical hair restoration treatment. A small amount of your blood is drawn and spun in a specialized centrifuge to isolate growth-factor-rich platelets. This concentrated plasma is then precisely micro-injected into the scalp. These growth factors revitalize dormant follicles, arrest hair thinning, and trigger thick new hair growth.'
  },
  {
    id: 4,
    question: 'Is there any downtime or recovery associated with Chemical Peels?',
    answer: 'It depends on the strength of the peel. Light peels (like salicylic or glycolic peels) have zero downtime—you might experience mild pinkness for a few hours. Deep rejuvenating peels (like yellow peels) may trigger light flaking or skin shedding starting on day 3, which resolves completely by day 7, revealing exceptionally soft, brand-new baby skin.'
  },
  {
    id: 5,
    question: 'How do I book an appointment and what is the consulting fee?',
    answer: 'You can book easily by filling out our online Booking Form, clicking the floating WhatsApp Button, or calling us directly. Our basic clinical consulting fee is very premium yet accessible, covering a thorough, personalized digital analysis and a custom-crafted cosmetology treatment blueprint mapped out by Dr. Priyanka Kawale.'
  },
  {
    id: 6,
    question: 'Are the academy training courses suitable for beginners, and do I get certified?',
    answer: 'Absolutely! Our training programs are designed to accommodate both beginners entering the beauty and cosmetology space, and medical graduates seeking advanced device qualifications. Every course incorporates rigorous practical models and 100% hands-on training. Upon successful completion, you will receive a professional academy certification representing SHIVSAI 360.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blush/20 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Got Questions?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            Frequently Asked Queries
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            Clear, honest answers to help you make informed decisions regarding clinical treatments.
          </p>
        </div>

        {/* Accordions Wrapper */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-panel rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-gold/40 shadow-md bg-white/90' 
                    : 'border-brand-gold/10 hover:border-brand-gold/30 hover:bg-white/60'
                }`}
              >
                {/* Accordion Trigger header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-500 ${isOpen ? 'text-brand-gold-dark' : 'text-brand-dark-light/45'}`} />
                    <span className="font-serif text-base md:text-lg font-bold text-brand-dark">
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Indicator icon */}
                  <div className={`w-8 h-8 rounded-full border border-brand-gold/15 flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-brand-gold text-white rotate-180' : 'bg-brand-gold/5 text-brand-gold-dark'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-brand-gold/10 text-left">
                        <p className="font-sans text-brand-dark-light/90 text-xs md:text-sm font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
