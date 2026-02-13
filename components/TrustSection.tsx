
import React from 'react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-section-sm md:py-section-md bg-mutedParchment border-y border-charcoal/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Trusted Quality. Clear Standards.</h2>
        <p className="text-charcoal/60 mb-12 max-w-xl mx-auto font-light">We believe in radical transparency. No fillers, no shortcuts, just the highest quality Himalayan resin.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Sourcing</h4>
            <h3 className="text-xl font-serif italic">High-Altitude Extraction</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed px-4">Wild-harvested from above 16,000 ft in the Himalayan mountains where the air is pure and the soil is untouched.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Testing</h4>
            <h3 className="text-xl font-serif italic">Batch Transparency</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed px-4">Every single gram is tested in ISO-certified labs for purity, potency, and safety. View the labs on every product page.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Purity</h4>
            <h3 className="text-xl font-serif italic">Ancient Purification</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed px-4">Traditional water-purification methods are used to retain the full mineral profile without the use of harsh chemicals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

