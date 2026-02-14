import React from 'react';

interface BenefitGridProps {
  onOpenFacts?: () => void;
}

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Immune support"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: "Energy & stamina"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "Healthy aging"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M20.42 4.58a5 5 0 00-7.07 0l-.35.35-.35-.35a5 5 0 00-7.07 7.07l.35.35L12 19l6.07-6.07.35-.35a5 5 0 000-7.07z" />
      </svg>
    ),
    label: "Stress & mood balance"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: "Cognitive clarity"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6 3v12" /><path d="M18 9v12" /><path d="M6 21v-2" /><path d="M18 3v2" /><path d="M12 3v18" />
      </svg>
    ),
    label: "Mineral replenishment"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 1v22M5 12h14" />
      </svg>
    ),
    label: "Recovery support"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path d="M8 12h8" />
      </svg>
    ),
    label: "Gut support"
  }
];

export const BenefitGrid: React.FC<BenefitGridProps> = ({ onOpenFacts }) => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left: Atmospheric Visual */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[800px] relative overflow-hidden bg-mutedParchment">
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop" 
            alt="Athlete running on track representing peak performance" 
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
          {/* Subtle overlay for editorial feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        {/* Right: Content Grid */}
        <div className="w-full lg:w-1/2 px-8 lg:px-24 py-16 lg:py-0 space-y-10">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-6xl font-serif leading-[1.1] mb-6 tracking-tight">
              Why 84+ trace <span className="italic font-light">minerals matter.</span>
            </h2>
            <p className="text-charcoal/50 text-base lg:text-lg font-light leading-relaxed">
              Each drop delivers 84+ trace minerals and fulvic acid to support energy, resilience, and cognitive clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="text-charcoal/30 group-hover:text-primary transition-colors duration-500">
                  {benefit.icon}
                </div>
                <h4 className="text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.15em] text-charcoal/80 leading-tight">
                  {benefit.label}
                </h4>
              </div>
            ))}
          </div>

          <div>
            <button 
              onClick={onOpenFacts}
              className="h-[52px] px-8 rounded-full bg-charcoal text-white text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-charcoal/10 flex items-center space-x-3"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>View Supplement Facts</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
