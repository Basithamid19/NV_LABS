
import React, { useState } from 'react';
import { TrustCards } from './TrustCards';
import { ProductReviews } from './ProductReviews';
import { BenefitGrid } from './BenefitGrid';

export const ProductPage: React.FC = () => {
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscribe'>('subscribe');
  const [bundle, setBundle] = useState<1 | 2>(2);
  const [upsells, setUpsells] = useState<string[]>([]);

  const toggleUpsell = (id: string) => {
    setUpsells(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const bundles = [
    {
      id: 1,
      name: "Single Supply",
      servings: "30 Daily Servings",
      price: 77.00,
      oldPrice: 154.00,
      badge: null
    },
    {
      id: 2,
      name: "Double Supply",
      servings: "60 Daily Servings",
      price: 132.00,
      oldPrice: 308.00,
      badge: "Best Value"
    }
  ];

  const selectedBundleData = bundles.find(b => b.id === bundle)!;
  const finalPrice = purchaseType === 'subscribe' ? selectedBundleData.price : selectedBundleData.price * 1.25;

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-parchment">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
          
          {/* Media Gallery - Left Column */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <div className="space-y-4">
              <div className="aspect-square rounded-[40px] overflow-hidden bg-mutedParchment border border-charcoal/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop" 
                  alt="Pure Himalayan Shilajit Resin" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
                  Hand-Harvested at 16,000ft
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-mutedParchment border border-charcoal/5 cursor-pointer hover:border-primary transition-all">
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
            {/* AG1 Header Strategy */}
            <div className="space-y-4">
              <div className="flex items-end space-x-4">
                <span className="text-5xl md:text-6xl font-serif font-bold tracking-tight">${selectedBundleData.price.toFixed(0)}</span>
                <span className="text-2xl text-charcoal/20 line-through mb-1.5">${selectedBundleData.oldPrice.toFixed(0)}</span>
                <span className="bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-full mb-1.5 uppercase tracking-widest">Save 50%**</span>
              </div>
              <p className="text-sm text-charcoal/50 leading-relaxed font-light">
                Your science-backed supplement for daily support of body and mind.<sup>1 2 3 4</sup>
              </p>
              
              <div className="flex items-center space-x-2 pt-2 border-b border-charcoal/5 pb-4">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold tracking-tight text-charcoal/70 uppercase">50,000+ verified 5-star Neuroveda reviews*</span>
              </div>
            </div>

            {/* Benefit Box */}
            <div className="bg-[#F0F4F2] p-8 rounded-[32px] border-l-4 border-primary/40">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-center text-[11px] font-bold uppercase tracking-widest text-charcoal/80">
                  <span className="mr-3 text-orange-400 text-xl">⚡</span> Sustained energy & focus<sup>2,4</sup>
                </li>
                <li className="flex items-center text-[11px] font-bold uppercase tracking-widest text-charcoal/80">
                  <span className="mr-3 text-blue-400 text-xl">🛡️</span> Immune defence<sup>1</sup>
                </li>
                <li className="flex items-center text-[11px] font-bold uppercase tracking-widest text-charcoal/80">
                  <span className="mr-3 text-emerald-400 text-xl">💚</span> Supports digestion<sup>7</sup>
                </li>
                <li className="flex items-center text-[11px] font-bold uppercase tracking-widest text-charcoal/80">
                  <span className="mr-3 text-pink-400 text-xl">😊</span> Stress & mood support<sup>4</sup>
                </li>
              </ul>
            </div>

            {/* Select Quantity Grid */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">Select Quantity</h3>
              <div className="grid grid-cols-2 gap-4">
                {bundles.map((b) => (
                  <div 
                    key={b.id}
                    onClick={() => setBundle(b.id as 1|2)}
                    className={`p-6 rounded-[24px] border-2 transition-all cursor-pointer relative flex flex-col justify-between min-h-[160px] ${bundle === b.id ? 'border-primary bg-primary/[0.04]' : 'border-charcoal/10 bg-white hover:border-charcoal/20'}`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${bundle === b.id ? 'border-primary' : 'border-charcoal/20'}`}>
                          {bundle === b.id && <div className="w-3.5 h-3.5 rounded-full bg-primary"></div>}
                        </div>
                        {b.badge && <span className="text-[8px] font-bold uppercase tracking-widest bg-primary text-white px-2.5 py-1 rounded-full">{b.badge}</span>}
                      </div>
                      <h4 className="font-bold text-lg leading-tight">{b.name}</h4>
                      <p className="text-[10px] font-medium text-charcoal/40 uppercase tracking-widest">{b.servings}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase Type Strategy */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">Choose Purchase Type</h3>
                <div className="bg-[#FEF08A] text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest flex items-center shadow-sm">
                   ✨ Save up to 50% with subscription
                </div>
              </div>

              {/* Recommendation Banner */}
              <div className="bg-charcoal/5 p-6 rounded-[24px] border-l-4 border-charcoal/20 flex items-start space-x-4">
                <span className="text-3xl">👍</span>
                <p className="text-xs leading-relaxed text-charcoal/70">
                  <span className="font-bold text-primary">Recommended:</span> 93% of customers choose Subscribe & Save to get exclusive gifts, the best price, and to never run out of Neuroveda.
                </p>
              </div>

              <div className="space-y-3">
                <div 
                  onClick={() => setPurchaseType('subscribe')}
                  className={`p-6 rounded-[24px] border-2 transition-all cursor-pointer relative flex items-center justify-between ${purchaseType === 'subscribe' ? 'border-primary bg-primary/[0.02]' : 'border-charcoal/10 hover:border-charcoal/20'}`}
                >
                  <div className="flex items-center space-x-5">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${purchaseType === 'subscribe' ? 'border-primary' : 'border-charcoal/20'}`}>
                      {purchaseType === 'subscribe' && <div className="w-3.5 h-3.5 rounded-full bg-primary"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-[0.2em]">Subscribe and Save</h4>
                      <p className="text-[10px] text-charcoal/40 font-medium">✨ Delivered every 30 days • Cancel anytime</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-red-600 text-white text-[8px] font-bold px-2 py-0.5 rounded mb-1 inline-block uppercase tracking-widest">50% OFF</span>
                    <div className="text-2xl font-bold">${selectedBundleData.price.toFixed(2)}</div>
                    <div className="text-[10px] text-charcoal/20 line-through font-bold tracking-widest">${selectedBundleData.oldPrice.toFixed(2)}</div>
                  </div>
                </div>

                <div 
                  onClick={() => setPurchaseType('one-time')}
                  className={`p-6 rounded-[24px] border-2 transition-all cursor-pointer flex items-center justify-between ${purchaseType === 'one-time' ? 'border-primary bg-primary/[0.02]' : 'border-charcoal/10 hover:border-charcoal/20'}`}
                >
                  <div className="flex items-center space-x-5">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${purchaseType === 'one-time' ? 'border-primary' : 'border-charcoal/20'}`}>
                      {purchaseType === 'one-time' && <div className="w-3.5 h-3.5 rounded-full bg-primary"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-[0.2em]">One Time Purchase</h4>
                      <p className="text-[10px] text-charcoal/40 font-medium">Standard one-time delivery</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">${(selectedBundleData.price * 1.25).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Checkbox Summary */}
            <div className="p-8 rounded-[32px] border-2 border-charcoal/5 space-y-6 bg-white/40">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal">Included with your subscription:</h4>
              <ul className="space-y-4">
                {[
                  { label: "Free Copper Ritual Spoon", detail: "The perfect dose every time ($15 value)" },
                  { label: "Free Neuroveda Welcome Kit", detail: "Step-by-step usage & wellness guide" },
                  { label: "Free tracked shipping", detail: "Available on all recurring orders" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-4 text-primary font-bold text-lg">✓</span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-[10px] text-charcoal/40 font-medium">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Final Sequence */}
            <div className="space-y-5 pt-4">
               <div className="bg-[#7F1D1D] text-white py-3.5 px-6 rounded-2xl text-center text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center shadow-xl">
                <span className="mr-3">⏰</span> Hurry! Limited supplies of exclusive Gifts available.
               </div>
               <button className="w-full bg-primary text-white h-[80px] rounded-[24px] text-lg font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center space-x-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span>Add to Cart</span>
                  <span className="bg-[#FEF08A] text-charcoal text-[11px] px-5 py-2 rounded-full ml-4 font-black shadow-sm tracking-widest">Save 50%**</span>
               </button>
               <div className="flex justify-center items-center space-x-10 pt-4 text-[10px] text-charcoal/30 font-bold uppercase tracking-[0.2em]">
                  <span className="flex items-center"><span className="mr-2 text-lg">🔒</span> 30-Day Money Back</span>
                  <span className="flex items-center"><span className="mr-2 text-lg">💳</span> Secure Checkout</span>
               </div>
            </div>
          </div>
        </div>

        {/* Support Grid Sections */}
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
