import React from 'react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-section-sm md:py-section-md bg-mutedParchment border-y border-charcoal/5">
      <div className="container mx-auto px-6">
        
        {/* Alignment Container: Synchronized max-width and balanced text wrapping */}
        <div className="max-w-[720px] mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal tracking-tight leading-tight mb-4 text-balance">
            Trusted Quality. Clear Standards.
          </h2>
          <p className="text-charcoal/80 font-light leading-[1.6] text-base md:text-lg text-balance">
            No fillers, no shortcuts, just the highest quality Organic Shilajit resin sourced from Himalayan & Karakoram Mountain ranges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Sourcing</h4>
            <h3 className="text-xl font-serif italic">High-Altitude Extraction</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed px-4 md:px-0">Wild-harvested from above 18,000 ft in the Himalayan mountains where the air is pure and the soil is untouched.</p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Purity</h4>
            <h3 className="text-xl font-serif italic">4-Step Purification</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed px-4 md:px-0">Traditionally soaked with Triphala, then purified through UV treatment and ion-exchange filtration to remove heavy metals.</p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Testing</h4>
            <h3 className="text-xl font-serif italic">Batch Transparency</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed px-4 md:px-0">Every single gram is tested in ISO-certified labs for purity, potency, and safety. View the labs on every product page.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
