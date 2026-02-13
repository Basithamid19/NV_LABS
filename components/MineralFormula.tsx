
import React from 'react';

interface ProductFeaturedProps {
  onNavigate: () => void;
}

export const ProductFeatured: React.FC<ProductFeaturedProps> = ({ onNavigate }) => {
  return (
    <section className="bg-white py-16 md:py-32 overflow-hidden border-y border-charcoal/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Product Visual - Left Column */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden bg-mutedParchment border border-charcoal/5 shadow-2xl transition-all duration-700 group-hover:shadow-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop" 
                alt="Neuroveda Premium Shilajit Resin" 
                className="w-full h-full object-cover mix-blend-multiply opacity-95 transition-transform duration-[2000ms] group-hover:scale-110"
              />
            </div>
            
            {/* Absolute Badges */}
            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-primary text-white p-6 md:p-8 rounded-full shadow-2xl animate-pulse">
               <div className="text-center flex flex-col items-center">
                 <span className="text-[8px] font-black uppercase tracking-widest mb-1">Save</span>
                 <span className="text-2xl font-serif font-bold">50%</span>
                 <span className="text-[8px] font-bold uppercase tracking-widest mt-1">Today</span>
               </div>
            </div>
            
            <div className="absolute -bottom-6 left-12 bg-white/90 backdrop-blur-md border border-charcoal/5 px-6 py-4 rounded-2xl shadow-xl flex items-center space-x-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-charcoal">Batch No. NV-8842</p>
                 <p className="text-[9px] font-medium text-charcoal/40 uppercase tracking-widest italic">100% Purity Certified</p>
               </div>
            </div>
          </div>

          {/* Product Info - Right Column */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase block">
                The Gold Standard of Resin
              </span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.05] tracking-tight">
                Organic <br />
                <span className="italic font-light">Shilajit Resin</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-charcoal/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                Directly sourced from the Karakoram range, our resin is sun-dried and water-purified to preserve the world's most dense concentration of trace minerals.
              </p>
              
              <ul className="space-y-4">
                {[
                  "84+ Essential Trace Minerals",
                  "High Fulvic & Humic Acid Profile",
                  "Wild-Harvested at 16,000 ft",
                  "Verified Third-Party Lab Results"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-bold uppercase tracking-[0.15em] text-charcoal/80">
                    <span className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center mr-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-serif font-bold">$77.00</span>
                  <span className="text-lg text-charcoal/20 line-through font-medium">$154.00</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Limited Time Trial Offer</p>
              </div>

              <button 
                onClick={onNavigate}
                className="bg-primary text-white h-[72px] px-12 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center group"
              >
                <span>Shop Premium Resin</span>
                <svg className="w-4 h-4 ml-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
            
            {/* Social Proof Footer */}
            <div className="pt-10 border-t border-charcoal/5 flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-mutedParchment shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-primary space-x-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50">2,482 verified happy customers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
