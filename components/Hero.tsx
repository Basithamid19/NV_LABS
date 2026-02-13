
import React from 'react';

export const MineralFormula: React.FC = () => {
  return (
    <section className="bg-parchment py-section-sm md:py-section-md relative overflow-hidden">
      {/* Subtle green ambient glow on the right side as requested by visual reference */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e6f0ee] to-transparent pointer-events-none opacity-60"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-6xl font-serif leading-[1.1] mb-8 tracking-tight text-charcoal">
            <span className="font-bold">Fuel</span> your day with nature’s powerful & complete mineral formula.
          </h2>
          
          <p className="text-base md:text-xl text-charcoal/70 leading-relaxed font-light mb-12 max-w-4xl">
            Formed over centuries in mineral-rich mountain environments, shilajit contains fulvic acid, humic compounds and 85+ trace minerals in a highly bioavailable form. Designed for daily use, it supports steady energy, mental clarity, and overall balance — without spikes or crashes.
          </p>
          
          {/* Grey accent bar at the bottom left */}
          <div className="w-24 h-2 bg-[#939393] rounded-sm"></div>
        </div>
      </div>
    </section>
  );
};
