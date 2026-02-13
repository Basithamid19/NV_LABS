
import React from 'react';

interface BrandBlockProps {
  onNavigate: () => void;
}

export const BrandBlock: React.FC<BrandBlockProps> = ({ onNavigate }) => {
  return (
    <section className="bg-parchment py-16 md:py-28 border-b border-charcoal/5">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        {/* Review Summary */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#0c6658] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-charcoal/50">
            4.9 (10,000+ HAPPY CUSTOMERS)
          </span>
        </div>

        {/* Brand Header */}
        <h2 className="text-5xl md:text-7xl font-serif mb-5 tracking-tight text-charcoal">
          Neuroveda Labs
        </h2>
        
        {/* Subtitle with high-end tracking */}
        <p className="text-[#0c6658] font-bold tracking-[0.25em] text-[10px] md:text-[11px] uppercase mb-12">
          PREMIUM ORGANIC HIMALAYN SHILAJIT RESIN
        </p>

        {/* CTA Button - Matched to Hero Size */}
        <button 
          onClick={onNavigate}
          className="bg-[#0c6658] text-white px-8 h-[52px] rounded-full text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[#0a574b] transition-all transform hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(12,102,88,0.4)]"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};
