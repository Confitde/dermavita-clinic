import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Clinical Cosmetology Certification',
    duration: '4 Weeks',
    level: 'Advanced',
    desc: 'Bespoke certification covering chemical peels, micro-needling, HydraFacial systems, skin diagnostics, and high-end facial aesthetics.',
    highlights: ['Hands-on clinical practicals', 'Chemical peel formulation theory', 'Client skin analysis technology', 'Clinical hygiene protocols']
  },
  {
    id: 2,
    title: 'Trichology & Scalp Rejuvenation',
    duration: '2 Weeks',
    level: 'Professional',
    desc: 'Scientific hair care protocols focusing on trichology, hair loss diagnosis, alopecia, scalp disorders, and advanced PRP delivery systems.',
    highlights: ['PRP scalp therapy protocols', 'Hair density scanning systems', 'Alopecia treatment blueprints', 'Scalp hygiene standards']
  },
  {
    id: 3,
    title: 'Advanced Laser Aesthetics',
    duration: '3 Weeks',
    level: 'Expert Mastery',
    desc: 'High-performance laser machinery training covering triple-wavelength diode lasers, carbon peels, toning, and laser physics safety.',
    highlights: ['Painless laser hair removal training', 'Carbon laser peel setup', 'Laser toning and Q-Switch Nd:YAG', 'Safety glasses & safety laws']
  }
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-white relative overflow-hidden">
      
      {/* Golden auric light glow effects */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blush/20 blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-10 h-10 rounded-full border border-brand-gold/15 bg-brand-cream/40 backdrop-blur-sm pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            SHIVSAI 360 Training Academy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            Empowering Future Aesthetics Leaders
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            Elevate your career with premium beauty care, cosmetology, and trichology programs. Designed and directed by Dr. Priyanka Kawale, incorporating international USA-standard syllabus guidelines.
          </p>
        </div>

        {/* Courses Listing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-[2.5rem] border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-brand-gold/5 shadow-sm relative flex flex-col justify-between group transition-all duration-300"
            >
              
              <div>
                {/* Course Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-brand-blush/65 border border-brand-gold/10 text-brand-dark-light">
                    {course.level}
                  </span>
                </div>

                {/* Course Meta */}
                <div className="flex gap-4 text-[10px] uppercase tracking-wider font-semibold text-brand-gold-dark mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> Hands-on</span>
                </div>

                {/* Course Title & Description */}
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3 leading-snug group-hover:text-brand-gold-dark transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="font-sans text-brand-dark-light/80 text-xs md:text-sm font-light leading-relaxed mb-6">
                  {course.desc}
                </p>

                {/* Course Highlights Bullet List */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {course.highlights.map((hl, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-left text-xs font-sans text-brand-dark-light/95">
                      <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course CTA */}
              <a
                href="#booking"
                className="flex items-center justify-center gap-1.5 font-sans text-xs tracking-widest uppercase font-semibold text-white bg-brand-dark hover:bg-brand-gold-dark py-4 rounded-2xl transition-all duration-300 w-full"
              >
                Enroll / Inquire Course
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

            </motion.div>
          ))}
        </div>

        {/* Academy Key Value Metrics Banner */}
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-brand-gold/20 shadow-md relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-gold/5 to-transparent rounded-tr-[2.5rem] pointer-events-none" />
          
          <div className="text-left max-w-xl">
            <div className="flex items-center gap-2 text-brand-gold-dark font-sans text-xs uppercase tracking-widest font-bold mb-3">
              <Award className="w-4.5 h-4.5 animate-pulse-subtle" />
              <span>Certified Professional Future</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Step Into the Luxury Aesthetics Market
            </h3>
            <p className="font-sans text-brand-dark-light text-xs md:text-sm font-light leading-relaxed">
              We offer comprehensive post-course support, interactive clinical models, live equipment training, and professional academy certifications to boost your clinical profile immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
            <a
              href="https://wa.me/917066312444?text=Hi%20SHIVSAI%20360%20Academy,%20I%20want%20to%20know%20more%20about%20your%20cosmetology%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-brand-green hover:text-white border-2 border-brand-green/30 hover:border-brand-green bg-white hover:bg-emerald-500 px-6 py-4.5 rounded-2xl shadow-sm transition-all duration-300"
            >
              Consult via WhatsApp
            </a>
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-white bg-brand-dark hover:bg-brand-gold-dark px-6 py-4.5 rounded-2xl shadow-md transition-all duration-300"
            >
              Apply Online Now
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
