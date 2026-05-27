import React from 'react';
import { Award, BookOpen, HeartPulse, GraduationCap } from 'lucide-react';

const credentials = [
  {
    id: 1,
    icon: GraduationCap,
    label: 'Medical Graduate',
    desc: 'Rigorous medical clinical graduate foundation ensuring a safe, evidence-based approach to skincare.'
  },
  {
    id: 2,
    icon: Award,
    label: 'Post Graduate in Medical Cosmetology (USA)',
    desc: 'Advanced training and specialization in high-performance cosmetic treatments from the United States.'
  },
  {
    id: 3,
    icon: BookOpen,
    label: 'Cosmetology & Trichology Expert',
    desc: 'Extensive specialization in deep hair disorders, scalp therapies, lasers, and facial aesthetics.'
  },
  {
    id: 4,
    icon: HeartPulse,
    label: 'Custom Aesthetic Solutions',
    desc: 'Personalized treatment blueprints utilizing FDA-approved procedures for highest patient satisfaction.'
  }
];

export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-24 bg-white relative overflow-hidden">
      
      {/* Luxury gold and blush vector background shapes */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blush/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Elegant doctor visual representation */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Framer outline effects */}
          <div className="absolute top-[-5%] left-[-5%] w-[110%] h-[110%] border border-brand-gold/15 rounded-[3rem] pointer-events-none" />
          
          <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[10px] border-brand-beige shadow-xl bg-brand-gold/5">
            <img 
              src="/doctor.jpg" 
              alt="Dr. Priyanka Kawale - Clinical Director"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Elegant glass name bar */}
            <div className="absolute bottom-4 left-4 right-4 glass-panel py-3 px-5 rounded-2xl border border-white/40 shadow-md text-left">
              <h4 className="font-serif text-base font-bold text-brand-dark">Dr. Priyanka Kawale</h4>
              <p className="text-[10px] font-sans text-brand-gold-dark uppercase tracking-wider font-semibold">Founder & Chief Cosmetologist</p>
            </div>
          </div>

        </div>

        {/* Right Side: Qualifications, Clinical details and Philosophy */}
        <div className="lg:col-span-7 text-left">
          
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Founder & Medical Cosmetologist
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Meet <span className="gold-gradient-text">Dr. Priyanka Kawale</span>
          </h2>
          
          <div className="w-16 h-[1px] bg-brand-gold mb-6"></div>

          {/* Philosophy Text */}
          <blockquote className="font-serif text-lg text-brand-dark-light/95 italic border-l-2 border-brand-gold pl-6 mb-8 leading-relaxed">
            "Every individual deserves healthy, glowing skin and thick, beautiful hair that inspires confidence. By merging advanced USA-standard cosmetology techniques with customized personal care, our clinic crafts life-changing transformations that stand the test of time."
          </blockquote>

          {/* Credentials Listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {credentials.map((cred) => {
              const IconComp = cred.icon;
              return (
                <div key={cred.id} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">
                      {cred.label}
                    </h4>
                    <p className="font-sans text-brand-dark-light/80 text-xs md:text-sm font-light leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
