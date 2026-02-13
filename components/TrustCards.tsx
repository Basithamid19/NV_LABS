
import React from 'react';

interface CardData {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  gridClass?: string;
}

const trustData: CardData[] = [
  {
    category: "Sourcing",
    title: "Authenticity",
    description: "Harvested high in the Himalayas and the Altai Mountains. Processed in accordance with centuries-old tradition.",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    gridClass: "lg:col-span-6 lg:row-span-2 min-h-[480px]"
  },
  {
    category: "Results",
    title: "Potency",
    description: "Top-quality shilajit—feel the effect right after the first use. Risk-free, money-back guarantee!",
    imageUrl: "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1200&auto=format&fit=crop",
    gridClass: "lg:col-span-6 lg:row-span-1 min-h-[230px]"
  },
  {
    category: "Standards",
    title: "Testing",
    description: "Our products are tested by 3rd party ISO/IEC 17025 accredited laboratories for safety and efficacy.",
    imageUrl: "https://images.unsplash.com/photo-1579154273821-0a672a04ee3b?q=80&w=800&auto=format&fit=crop",
    gridClass: "lg:col-span-3 lg:row-span-1 min-h-[230px]"
  },
  {
    category: "Quality",
    title: "Purity",
    description: "Highest purity standards in the market. No artificial additives or fillers. Up to 99.9% pure resin.",
    imageUrl: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=800&auto=format&fit=crop",
    gridClass: "lg:col-span-3 lg:row-span-1 min-h-[230px]"
  }
];

const TrustCard: React.FC<CardData> = ({ category, title, description, imageUrl, gridClass }) => {
  return (
    <div className={`relative overflow-hidden rounded-[24px] group flex-shrink-0 w-[85vw] lg:w-full snap-center transition-all duration-500 border border-charcoal/5 ${gridClass}`}>
      {/* Image with subtle hover zoom */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      
      {/* Text Content */}
      <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end text-white">
        <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.3em] mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
          {category}
        </span>
        <h3 className="text-3xl lg:text-4xl font-serif font-bold uppercase mb-4 leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-white/80 font-light leading-relaxed max-w-[280px] lg:max-w-[340px] group-hover:text-white transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};

export const TrustCards: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-parchment">
      {/* Responsive Layout: Mobile Scroll / Desktop Grid */}
      <div className="flex lg:grid lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
        {trustData.map((card, idx) => (
          <TrustCard key={idx} {...card} />
        ))}
      </div>

      {/* Mobile Interaction Hint */}
      <div className="flex lg:hidden justify-center items-center space-x-3 mt-4 opacity-40">
        <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-charcoal/20"></div>
        <span className="text-[10px] font-bold uppercase tracking-widest ml-2 italic">Swipe to Explore</span>
      </div>
    </section>
  );
};
