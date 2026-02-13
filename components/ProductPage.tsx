
import React, { useState } from 'react';
import { TrustCards } from './TrustCards';
import { ProductReviews } from './ProductReviews';
import { BenefitGrid } from './BenefitGrid';

export const ProductPage: React.FC = () => {
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscribe'>('subscribe');
  const [bundle, setBundle] = useState<1 | 3 | 6>(3);
  const [quantity, setQuantity] = useState(1);

  const bundles = [
    {
      id: 1,
      qty: 1,
      price: 77.00,
      perPack: 77.00,
      costPerDay: "~$2.50 / day",
      badge: null
    },
    {
      id: 3,
      qty: 3,
      price: 198.66,
      oldPrice: 231.00,
      save: 32.34,
      perPack: 66.00,
      discount: 14,
      costPerDay: "Only ~$1.50 / day",
      badge: "MOST POPULAR"
    },
    {
      id: 6,
      qty: 6,
      price: 330.33,
      oldPrice: 462.00,
      save: 131.67,
      perPack: 55.00,
      discount: 28,
      costPerDay: "~$1.20 / day",
      badge: "Best value"
    }
  ];

  const selectedBundleData = bundles.find(b => b.id === bundle)!;
  const basePrice = selectedBundleData.price;
  const finalPrice = purchaseType === 'subscribe' ? basePrice * 0.85 : basePrice;

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          
          {/* Media Gallery - Left Column */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <div className="space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden bg-mutedParchment border border-charcoal/5">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop" 
                  alt="Pure Himalayan Shilajit Resin" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden bg-mutedParchment border border-charcoal/5 cursor-pointer hover:border-primary/40 transition-colors">
                    <img 
                      src={`https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop&sig=${i}`} 
                      alt={`Product view ${i}`} 
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details - Right Column */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold tracking-widest text-charcoal/60 uppercase">4.9 | Trusted by 10,000+ customers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">Organic Himalayan Shilajit Resin</h1>
              <p className="text-lg text-charcoal/60 font-light leading-relaxed">
                High-altitude Himalayan shilajit resin with 84+ trace minerals and fulvic acid. Designed for steady energy, focus, and long-term vitality.
              </p>
            </div>

            {/* Bundle Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-2">Select Quantity</h3>
              </div>
              <div className="space-y-3">
                {bundles.map((b) => (
                  <div 
                    key={b.id}
                    onClick={() => setBundle(b.id as 1|3|6)}
                    className={`relative p-5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${bundle === b.id ? 'border-primary bg-primary/[0.04] shadow-md' : 'border-charcoal/10 hover:border-charcoal/20 bg-white'}`}
                  >
                    {b.badge && (
                      <div className="absolute -top-3 right-4 bg-[#14B8A6] text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-sm">
                        {b.badge}
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${bundle === b.id ? 'border-charcoal' : 'border-charcoal/20'}`}>
                        {bundle === b.id && <div className="w-3 h-3 rounded-full bg-charcoal"></div>}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-lg">Buy {b.qty}</h4>
                          {b.save && (
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">Save ${b.save}</span>
                          )}
                        </div>
                        <p className="text-[11px] text-charcoal/70 font-medium">
                          ${b.perPack}/Pack {b.discount && <span className="text-primary font-bold">({b.discount}% OFF)</span>}
                        </p>
                        <p className="text-[10px] text-primary/80 font-bold italic uppercase tracking-tighter">
                          {b.costPerDay}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-bold">${b.price}</div>
                      {b.oldPrice && (
                        <div className="text-xs text-charcoal/30 line-through">${b.oldPrice}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing / Buy Box */}
            <div className="space-y-4">
              <div 
                onClick={() => setPurchaseType('subscribe')}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer relative ${purchaseType === 'subscribe' ? 'border-primary bg-primary/[0.03]' : 'border-charcoal/10 hover:border-charcoal/20'}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'subscribe' ? 'border-primary' : 'border-charcoal/20'}`}>
                      {purchaseType === 'subscribe' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest">Subscribe & Save 15%</h4>
                      <p className="text-xs text-charcoal/50">Pause or cancel anytime. Free shipping.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-primary">${(basePrice * 0.85).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => setPurchaseType('one-time')}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${purchaseType === 'one-time' ? 'border-primary bg-primary/[0.03]' : 'border-charcoal/10 hover:border-charcoal/20'}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'one-time' ? 'border-primary' : 'border-charcoal/20'}`}>
                      {purchaseType === 'one-time' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest">One-time purchase</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold">${basePrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA and Trust Badges */}
            <div className="space-y-6 pt-4">
              <div className="space-y-3">
                <div className="flex space-x-4">
                  <div className="flex items-center border border-charcoal/10 rounded-full px-6 h-[64px]">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-light hover:text-primary transition-colors">-</button>
                    <span className="w-12 text-center font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="text-xl font-light hover:text-primary transition-colors">+</button>
                  </div>
                  <button className="flex-1 bg-primary text-white h-[64px] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                    Add to Cart — ${(finalPrice * quantity).toFixed(2)}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-8 border-y border-charcoal/5">
                {[
                  { icon: "🏔️", label: "Wild Harvested" },
                  { icon: "🧪", label: "Lab Tested" },
                  { icon: "✨", label: "84+ Minerals" }
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Tabs / Accordions */}
            <div className="space-y-4 pt-4">
              {[
                { title: "Benefits", content: "Our shilajit is wild-harvested at 16,000ft in the Himalayas. It acts as a cellular fuel, supporting mitochondrial health and nutrient absorption." },
                { title: "Usage", content: "Dissolve a pea-sized portion in warm water or milk. Take 1-2 times daily, ideally on an empty stomach for maximum absorption." },
                { title: "Lab Results", content: "Every batch is 3rd-party tested for purity and heavy metals. ISO-Certified results are available via QR code on every jar." }
              ].map((tab, idx) => (
                <details key={idx} className="group border-b border-charcoal/10 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                    <span className="text-sm font-bold uppercase tracking-widest">{tab.title}</span>
                    <span className="transform group-open:rotate-45 transition-transform">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </summary>
                  <div className="pt-4 text-sm text-charcoal/60 leading-relaxed font-light">
                    {tab.content}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* New Split Benefit Grid Section */}
        <div className="relative -mx-6 lg:mx-0">
          <BenefitGrid />
        </div>

        {/* Full-width section below main layout columns */}
        <div className="mt-20 border-t border-charcoal/5 space-y-12">
          <TrustCards />
          <ProductReviews />
        </div>
      </div>
    </div>
  );
};
