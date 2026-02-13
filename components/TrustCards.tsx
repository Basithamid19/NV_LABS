import React, { useRef } from 'react';

interface TrustItem {
  title: string;
  body: string;
  icon: React.ReactNode;
  bgColor: string;
}

const trustData: TrustItem[] = [
  {
    title: "Sourcing & Extraction",
    body: "Harvested above 17,000 ft in the Himalayas. Ethically sourced, gold-grade shilajit extracted using traditional methods.",
    bgColor: "#B1B9B2", // Sage Green (from image 1)
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: "Filtration & Purification",
    body: "Traditionally soaked with Triphala, then purified through UV treatment and ion-exchange filtration to remove heavy metals.",
    bgColor: "#D2D9E2", // Soft Blue Gray (from image 2)
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    title: "Third-Party Lab Tested",
    body: "Tested by ISO/IEC 17025 accredited laboratories for safety, purity, and quality verification.",
    bgColor: "#D4C9BC", // Warm Taupe (from image 3)
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Potency & Results",
    body: "Mineral-dense and highly bioavailable, crafted for steady energy and clarity. Backed by our 30-day money-back guarantee.",
    bgColor: "#DCC7C7", // Muted Pink (from image 4)
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  }
];

export const TrustCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#F5F5F7] border-t border-charcoal/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 space-y-6 md:space-y-0">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-6xl font-serif font-bold tracking-tight text-charcoal leading-[1.1]">
              Every Step, <span className="italic font-light">Refined.</span>
            </h2>
          </div>
          
          {/* Desktop Navigation Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 lg:gap-8 pb-10 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {trustData.map((item, idx) => (
            <div 
              key={idx} 
              style={{ backgroundColor: item.bgColor }}
              className="flex-shrink-0 w-[85vw] md:w-[480px] lg:w-[640px] min-h-[380px] md:min-h-[440px] lg:min-h-[480px] snap-center rounded-[32px] lg:rounded-[48px] p-8 lg:p-14 flex flex-col justify-between transition-transform duration-700 hover:scale-[1.01] group"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-charcoal mb-8">
                {item.icon}
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl lg:text-4xl font-serif font-bold text-charcoal tracking-tight leading-tight uppercase">
                  {item.title}
                </h3>
                <div className="w-12 lg:w-16 h-[1px] bg-charcoal/20 group-hover:w-20 lg:group-hover:w-24 transition-all duration-700" />
                <p className="text-charcoal/70 text-base lg:text-xl leading-relaxed font-light max-w-xl">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Indicators */}
        <div className="flex md:hidden justify-center items-center space-x-2 mt-2 opacity-30">
          {trustData.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
          ))}
        </div>
        
        {/* Verification Standards Footer */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-charcoal/5 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-30">
           {['GMP Certified', 'Non-GMO', '100% Organic', 'ISO/IEC 17025', 'Ethically Sourced'].map((cert) => (
             <span key={cert} className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.4em] text-charcoal">
               {cert}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};
