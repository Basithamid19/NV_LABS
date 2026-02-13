
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { MineralFormula } from './components/MineralFormula';
import { BrandBlock } from './components/BrandBlock';
import { Benefits } from './components/Benefits';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductPage } from './components/ProductPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'shop'>('home');
  const heroRef = useRef<HTMLDivElement>(null);

  const navigateTo = (newView: 'home' | 'shop') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Reveal Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [view]);

  return (
    <div className="relative font-sans text-charcoal bg-parchment min-h-screen">
      <Header currentView={view} onNavigate={navigateTo} />
      
      {view === 'home' ? (
        <>
          <div ref={heroRef}>
            <Hero onNavigate={() => navigateTo('shop')} />
          </div>
          <main className="overflow-hidden">
            <div className="scroll-reveal"><MineralFormula /></div>
            <div className="scroll-reveal"><Benefits onNavigate={() => navigateTo('shop')} /></div>
            <div className="scroll-reveal"><Testimonials /></div>
            <div className="scroll-reveal"><TrustSection /></div>
            <div className="scroll-reveal"><FAQ /></div>
            {/* BRAND BLOCK MOVED HERE - FINAL CTA ABOVE FOOTER */}
            <div className="scroll-reveal"><BrandBlock onNavigate={() => navigateTo('shop')} /></div>
          </main>
        </>
      ) : (
        <ProductPage />
      )}
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
