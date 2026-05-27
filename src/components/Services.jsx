import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Smile, 
  Activity, 
  Zap, 
  Waves, 
  Layers, 
  Clock, 
  Sun, 
  Heart,
  GraduationCap,
  ChevronRight,
  Search
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Acne Solutions',
    category: 'Skin',
    icon: Sparkles,
    desc: 'Advanced acne-clearing programs, comedone extraction, and medical-grade solutions to clear active acne and prevent breakouts.',
    price: 'Clear Skin'
  },
  {
    id: 2,
    title: 'Acne Scar Treatment',
    category: 'Skin',
    icon: Layers,
    desc: 'Deep subcision, microneedling fractional RF, and pixel lasers designed to remodel scar tissue and smooth deep indentations.',
    price: 'Scar Remodeling'
  },
  {
    id: 3,
    title: 'Hair Loss Treatment',
    category: 'Hair',
    icon: Smile,
    desc: 'Doctor-led clinical therapies, DHT blockers, and customized solutions to halt hair fall and reactivate weak follicles.',
    price: 'Root Care'
  },
  {
    id: 4,
    title: 'PRP Therapy',
    category: 'Hair',
    icon: Activity,
    desc: 'Platelet-Rich Plasma therapy using concentrated growth factors to trigger cellular repair and boost hair density naturally.',
    price: 'Growth Factor'
  },
  {
    id: 5,
    title: 'HydraFacial',
    category: 'Skin',
    icon: Waves,
    desc: 'Premium multi-step hydradermabrasion system that deeply cleanses, extracts impurities, and infuses active antioxidant serums.',
    price: 'Instant Glow'
  },
  {
    id: 6,
    title: 'Chemical Peels',
    category: 'Skin',
    icon: Sparkles,
    desc: 'Doctor-formulated resurfacing peels to slough off damaged outer layers, improving skin tone, texture, and brightness.',
    price: 'Clinical Peel'
  },
  {
    id: 7,
    title: 'Pigmentation Correction',
    category: 'Skin',
    icon: Sun,
    desc: 'Advanced laser toning, photofacials, and depigmenting regimens targeting melasma, dark spots, and uneven skin tone.',
    price: 'Even Tone'
  },
  {
    id: 8,
    title: 'Anti-Aging Treatments',
    category: 'Aesthetics',
    icon: Clock,
    desc: 'Premium dermal fillers, skin-tightening protocols, and fine-line relaxation treatments to restore youthful contours naturally.',
    price: 'Bespoke Youth'
  },
  {
    id: 9,
    title: 'Skin Rejuvenation',
    category: 'Skin',
    icon: Heart,
    desc: 'Microneedling RF, carbon lasers, and collagen induction therapies designed to remodel and firm skin texture.',
    price: 'Collagen Boost'
  },
  {
    id: 10,
    title: 'Aesthetic Procedures',
    category: 'Aesthetics',
    icon: Zap,
    desc: 'Bespoke non-surgical contouring, lip enhancements, and facial sculpting procedures tailored to your unique structure.',
    price: 'Premium Art'
  },
  {
    id: 11,
    title: 'Trichology Services',
    category: 'Hair',
    icon: Activity,
    desc: 'Scientific scalp analysis, medical trichology consultations, and specialized treatments for alopecia and scalp disorders.',
    price: 'Scalp Science'
  },
  {
    id: 12,
    title: 'Beauty Training Programs',
    category: 'Academy',
    icon: GraduationCap,
    desc: 'Professional certification courses in advanced cosmetology, trichology, and modern clinical beauty treatments.',
    price: 'Expert Training'
  }
];

const categories = ['All', 'Skin', 'Hair', 'Aesthetics', 'Academy'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-cream/30">
      
      {/* Decorative luxury vector shapes */}
      <div className="absolute top-[30%] left-[-5%] w-72 h-72 rounded-full bg-brand-blush/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Signature Treatments
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            Bespoke Clinical Solutions
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            Experience advanced, FDA-approved technologies and procedures led by Dr. Priyanka Kawale. We specialize in custom-tailored regimens that reveal radiant, flawless results.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 w-full glass-panel p-4 rounded-3xl border border-brand-gold/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-dark text-white shadow-sm'
                    : 'text-brand-dark hover:text-brand-gold hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-brand-gold/20 bg-white/50 text-xs text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all duration-300"
            />
            <Search className="w-4 h-4 text-brand-dark-light/50 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Services Interactive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel flex flex-col items-start p-8 rounded-[2rem] border border-brand-gold/10 shadow-sm relative overflow-hidden group hover:border-brand-gold/30 hover:shadow-brand-gold/5 transition-all duration-300"
                >
                  
                  {/* Subtle top decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/5 to-transparent rounded-tr-[2rem] pointer-events-none" />

                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <IconComp className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Tag Indicator */}
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold-dark font-semibold px-2.5 py-1 rounded-md bg-brand-gold/5 border border-brand-gold/10 mb-4">
                    {service.price}
                  </span>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-gold-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-brand-dark-light/80 text-xs md:text-sm font-light leading-relaxed mb-6 flex-grow text-left">
                    {service.desc}
                  </p>

                  {/* Bottom Action */}
                  <a
                    href="#booking"
                    className="flex items-center gap-1 font-sans text-xs tracking-wider uppercase font-semibold text-brand-dark group-hover:text-brand-gold transition-colors duration-300 mt-auto"
                  >
                    Request consultation
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="font-sans text-brand-dark-light/70 text-sm">
              No signature treatments match your search query. Try another keyword.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
