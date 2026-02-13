
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Ancient Himalayan Mountains",
    heading: "NEUROVEDA LABS",
    subheading: ""
  },
  {
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070&auto=format&fit=crop",
    alt: "Pristine Himalayan Peak",
    heading: <>Restore. Recharge. <span className="italic font-light">Rise.</span></>,
    subheading: "Live Energized"
  }
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000); // Standard 6-second rotation for accessibility and readability

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

  const activeSlide = SLIDES[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Background Images Slider */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="w-full h-full object-cover scale-105"
          />
          {/* 
            STRICT COMPLIANCE: 
            Slide 0 (Greenish) uses a lighter parchment-tinted overlay to make requested BLACK text legible.
            Slide 1 (Snowy) retains the original dark atmospheric gradient as requested to remain 'exactly as-is'.
          */}
          <div className={`absolute inset-0 transition-all duration-1000 ${index === 0 ? 'bg-parchment/30' : 'bg-gradient-to-b from-black/50 via-transparent to-parchment/20'}`}></div>
          <div className={`absolute inset-0 transition-all duration-1000 ${index === 0 ? 'bg-transparent' : 'bg-black/20'}`}></div>
        </div>
      ))}
      
      {/* Slide Navigation Controls */}
      <button 
        onClick={prevSlide}
        className={`absolute left-6 z-20 w-12 h-12 rounded-full border flex items-center justify-center transition-colors hidden md:flex ${currentSlide === 0 ? 'border-charcoal/20 text-charcoal hover:bg-charcoal/10' : 'border-white/20 text-white hover:bg-white/10'}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button 
        onClick={nextSlide}
        className={`absolute right-6 z-20 w-12 h-12 rounded-full border flex items-center justify-center transition-colors hidden md:flex ${currentSlide === 0 ? 'border-charcoal/20 text-charcoal hover:bg-charcoal/10' : 'border-white/20 text-white hover:bg-white/10'}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-colors duration-500 ${currentSlide === 0 ? 'text-charcoal' : 'text-white'}`}>
        <div className="space-y-[16px] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className={`inline-block text-[10px] font-bold tracking-[0.4em] uppercase mb-2 drop-shadow-sm ${currentSlide === 0 ? 'text-charcoal/80' : 'text-white/80'}`}>
            Organic Himalayan Shilajit
          </span>
          <h1 className="text-6xl md:text-9xl font-serif leading-tight drop-shadow-2xl tracking-tight">
            {activeSlide.heading}
          </h1>
          {activeSlide.subheading && (
            <p className="text-xl md:text-2xl font-medium tracking-[0.2em] uppercase drop-shadow-lg opacity-90">
              {activeSlide.subheading}
            </p>
          )}
        </div>
        
        <div className="mt-[32px] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          <p className="text-base md:text-xl font-light leading-relaxed max-w-xl mx-auto drop-shadow-md">
            Organic Himalayan Shilajit Resin<br />
            One source to support whole-body balance.
          </p>
        </div>

        <div className="pt-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <button 
            onClick={onNavigate}
            className={`px-8 h-[52px] rounded-full text-[10px] font-bold uppercase tracking-[0.25em] transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center space-x-3 mb-8 ${currentSlide === 0 ? 'bg-charcoal text-white hover:bg-primary' : 'bg-primary text-white hover:bg-white hover:text-primary'}`}
          >
            <span>Shop Shilajit</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>

          {/* Trust Anchors - Minimal Horizontal Bar */}
          <div className={`flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] ${currentSlide === 0 ? 'text-charcoal/70' : 'text-white/70'}`}>
            <div className="flex items-center">
              <span className="mr-2 text-primary">✔</span> 
              <span>2,400+ Verified Reviews</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-primary">✔</span> 
              <span>Third-Party Lab Tested</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-primary">✔</span> 
              <span>QR Batch Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {[0, 1].map((i) => (
          <div 
            key={i}
            className={`h-[2px] w-8 transition-all duration-500 ${i === currentSlide ? (currentSlide === 0 ? 'bg-charcoal w-12' : 'bg-primary w-12') : (currentSlide === 0 ? 'bg-charcoal/20' : 'bg-white/20')}`}
          />
        ))}
      </div>
    </section>
  );
};
