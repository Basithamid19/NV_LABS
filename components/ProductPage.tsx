
import React, { useState } from 'react';
import { TrustCards } from './TrustCards';
import { ProductReviews } from './ProductReviews';
import { BenefitGrid } from './BenefitGrid';

export const ProductPage: React.FC = () => {
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscribe'>('subscribe');
  const [bundle, setBundle] = useState<1 | 3 | 6>(3);

  // Adjusted pricing to create a clear value ladder (lower price per day for larger packs)
  const bundles = [
    {
      id: 1,
      name: "Buy 1",
      servings: 30,
      subscriptionPrice: 66.00,
      oneTimePrice: 77.00,
      msrp: 77.00,
      badge: null
    },
    {
      id: 3,
      name: "Buy 3",
      servings: 90,
      subscriptionPrice: 167.00, // Significant discount for bulk
      oneTimePrice: 197.00,
      msrp: 231.00, // 77 * 3
      badge: "MOST POPULAR"
    },
    {
      id: 6,
      name: "Buy 6",
      servings: 180,
      subscriptionPrice: 297.00, // Best value per serving
      oneTimePrice: 347.00,
      msrp: 462.00, // 77 * 6
      badge: "Best value"
    }
  ];

  const selectedBundleData = bundles.find(b => b.id === bundle)!;
  
  // Helper to get current price based on state
  const getCurrentPrice = (b: typeof bundles[0]) => 
    purchaseType === 'subscribe' ? b.subscriptionPrice : b.oneTimePrice;

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-parchment">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
          
          {/* Media Gallery - Left Column */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <div className="space-y-4">
              <div className="aspect-square rounded-[32px] overflow-hidden bg-mutedParchment border border-charcoal/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop" 
                  alt="Pure Himalayan Shilajit Resin" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                  16,000ft Altitude
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden bg-mutedParchment border border-charcoal/5 cursor-pointer hover:border-primary transition-all">
                    <img 
                      src={`https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop&sig=${i}`} 
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details - Right Column */}
          <div className="lg:w-1/2 space-y-8">
            {/* Minimalist Header */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-[10px] font-bold tracking-widest text-charcoal/40 uppercase">10,000+ Happy Customers</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Organic <span className="italic font-light">Shilajit Resin.</span></h1>
              <p className="text-sm text-charcoal/50 leading-relaxed max-w-lg">
                One science-backed source for whole-body balance.
              </p>
            </div>

            {/* 1. Quantity Selector - STACKED LIST */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">SELECT QUANTITY</h3>
              <div className="flex flex-col gap-4">
                {bundles.map((b) => {
                  const currentPrice = getCurrentPrice(b);
                  const savings = b.msrp - currentPrice;
                  const pricePerDay = (currentPrice / b.servings).toFixed(2);
                  const packPrice = (currentPrice / (b.id)).toFixed(0);

                  return (
                    <div 
                      key={b.id}
                      onClick={() => setBundle(b.id as 1|3|6)}
                      className={`relative p-5 md:p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${bundle === b.id ? 'border-primary bg-primary/[0.04]' : 'border-charcoal/5 bg-white hover:border-charcoal/10'}`}
                    >
                      {/* Badge */}
                      {b.badge && (
                        <div className="absolute -top-3 right-6 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-lg shadow-sm">
                          {b.badge}
                        </div>
                      )}

                      {/* Left: Info */}
                      <div className="flex items-center space-x-5">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${bundle === b.id ? 'border-charcoal bg-charcoal' : 'border-charcoal/20'}`}>
                          {bundle === b.id && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-bold text-xl">{b.name}</h4>
                            {savings > 0 && (
                              <span className="bg-charcoal/5 text-[10px] font-bold px-2 py-1 rounded">Save ${savings.toFixed(2)}</span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                            <p className="text-xs text-charcoal/40 font-medium">
                              ${packPrice}/Pack {b.msrp > currentPrice && `(${Math.round((1 - currentPrice/b.msrp)*100)}% OFF)`}
                            </p>
                            <span className="w-1 h-1 rounded-full bg-charcoal/10 hidden md:inline-block"></span>
                            <p className="text-xs text-primary font-bold tracking-tight">
                              ${pricePerDay} per day
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Price */}
                      <div className="text-right">
                        <div className="text-2xl font-bold font-serif">${currentPrice.toFixed(2)}</div>
                        {b.msrp > currentPrice && (
                          <div className="text-xs text-charcoal/20 line-through font-bold">${b.msrp.toFixed(2)}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Purchase Type Selector */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">Choose Purchase Type</h3>
                {purchaseType === 'subscribe' && (
                  <span className="bg-[#FEF08A] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm flex items-center">
                    ✨ RECOMMENDED CHOICE
                  </span>
                )}
              </div>

              <div className="space-y-2">
                {/* Subscription Option */}
                <div 
                  onClick={() => setPurchaseType('subscribe')}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${purchaseType === 'subscribe' ? 'border-primary bg-primary/[0.02]' : 'border-charcoal/5 bg-white'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'subscribe' ? 'border-primary' : 'border-charcoal/10'}`}>
                      {purchaseType === 'subscribe' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest">Subscribe & Save</h4>
                      <p className="text-[9px] text-charcoal/40 font-medium">✨ Free Spoon + Welcome Kit + Best Price</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">${(selectedBundleData.subscriptionPrice).toFixed(2)}</div>
                  </div>
                </div>

                {/* One Time Option */}
                <div 
                  onClick={() => setPurchaseType('one-time')}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${purchaseType === 'one-time' ? 'border-primary bg-primary/[0.02]' : 'border-charcoal/5 bg-white'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'one-time' ? 'border-primary' : 'border-charcoal/10'}`}>
                      {purchaseType === 'one-time' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest">One-time purchase</h4>
                      <p className="text-[9px] text-charcoal/40 font-medium">Standard delivery</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">${selectedBundleData.oneTimePrice.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simplified Checklist */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                "Free Tracking",
                "Cancel Anytime",
                "Money-back Guarantee",
                "ISO Lab Tested"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <span className="text-primary text-xs">✓</span>
                  <span className="text-[10px] font-bold uppercase tracking-tight text-charcoal/50">{text}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="space-y-4 pt-2">
               <button className="w-full bg-primary text-white h-[68px] rounded-2xl text-base font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-primary/10 flex items-center justify-center space-x-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span>Checkout</span>
               </button>
               <div className="flex justify-center space-x-6 text-[9px] text-charcoal/20 font-bold uppercase tracking-widest">
                  <span className="flex items-center">🔒 Secure Checkout</span>
                  <span className="flex items-center">💳 All cards accepted</span>
               </div>
            </div>
          </div>
        </div>

        {/* Informational Blocks */}
        <div className="relative -mx-6 lg:mx-0 mt-20">
          <BenefitGrid />
        </div>

        <div className="mt-20 border-t border-charcoal/5 space-y-12">
          <TrustCards />
          <ProductReviews />
        </div>
      </div>
    </div>
  );
};
