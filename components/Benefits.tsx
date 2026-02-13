
import React, { useRef } from 'react';

interface BenefitCard {
  title: string;
  description: string;
  category: string;
  tag: string;
}

const benefitData: BenefitCard[] = [
  { 
    category: "01", 
    title: "Recovery support", 
    description: "Aid natural rejuvenation and structural balance after daily exertion.", 
    tag: "Ionic recovery" 
  },
  { 
    category: "02", 
    title: "Energy & stamina", 
    description: "Support sustained vitality and endurance without the synthetic crash.", 
    tag: "Cellular fuel" 
  },
  { 
    category: "03", 
    title: "Cognitive clarity", 
    description: "Support mental sharpness, focus, and long-term cognitive endurance.", 
    tag: "Nootropic support" 
  },
  { 
    category: "04", 
    title: "Stress & mood", 
    description: "Support a grounded, balanced response to environmental stressors.", 
    tag: "Inner calm" 
  },
  { 
    category: "05", 
    title: "Immune support", 
    description: "Support your body's innate defense systems and resilience.", 
    tag: "Grounded health" 
  },
  { 
    category: "06", 
    title: "Mineral replenishment", 
    description: "84+ trace minerals in their most bioavailable, earth-grown form.", 
    tag: "Full-spectrum" 
  },
  { 
    category: "07", 
    title: "Gut support", 
    description: "Support healthy nutrient absorption and microbial harmony.", 
    tag: "Bioavailable intake" 
  },
  { 
    category: "08", 
    title: "Healthy aging", 
    description: "Support cellular health and longevity focus across the years.", 
    tag: "Timeless wellness" 
  },
];

interface BenefitsProps {
  onNavigate: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-16 bg-mutedParchment border-t border-charcoal/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            Systemic Support
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1] tracking-tight">
            One source. <br />
            Many systems <span className="italic font-light">supported.</span>
          </h2>
          <p className="text-charcoal/60 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Ancient material refined through modern standards of purity to support your optimal human potential.
          </p>
        </div>

        {/* Desktop Grid / Mobile Carousel */}
        <div className="relative group">
          {/* Mobile Scroll Indicator (only visible on small screens) */}
          <div className="flex md:hidden items-center justify-between mb-4 px-2">
            <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">Slide to explore</span>
            <div className="flex space-x-1">
              <div className="w-4 h-[1px] bg-primary"></div>
              <div className="w-2 h-[1px] bg-charcoal/20"></div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-10 md:pb-0 no-scrollbar snap-x snap-mandatory"
          >
            {benefitData.map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[82vw] md:w-full bg-parchment p-8 md:p-10 rounded-2xl snap-start border border-charcoal/5 flex flex-col justify-between min-h-[280px] md:min-h-[320px] transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group/card"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[11px] font-bold tracking-widest text-charcoal/20 group-hover/card:text-primary/40 transition-colors">
                      {benefit.category}
                    </span>
                    <div className="w-6 h-[1px] bg-charcoal/10 group-hover/card:bg-primary/30 transition-colors mt-2"></div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif mb-4 leading-tight tracking-tight text-charcoal group-hover/card:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm md:text-base font-light">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-charcoal/5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary/70">
                    {benefit.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
