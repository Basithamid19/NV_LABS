import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentView: 'home' | 'shop';
  onNavigate: (view: 'home' | 'shop') => void;
  heroSlideIndex?: number;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, heroSlideIndex = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidHeader = isScrolled || currentView === 'shop';
  
  // Text color logic:
  // 1. If header is solid (scrolled/shop), text is white.
  // 2. If transparent and on slide 0 (NEUROVEDA labs), text is black.
  // 3. If transparent and on slide 1 (Restore), text is white.
  const textColorClass = isSolidHeader 
    ? 'text-white' 
    : (currentView === 'home' && heroSlideIndex === 0 ? 'text-charcoal' : 'text-white');

  const borderColorClass = isSolidHeader
    ? 'border-white/20'
    : (currentView === 'home' && heroSlideIndex === 0 ? 'border-charcoal/20' : 'border-white/20');

  const hoverBorderColorClass = isSolidHeader
    ? 'border-white'
    : (currentView === 'home' && heroSlideIndex === 0 ? 'border-charcoal' : 'border-white');

  const underlineColorClass = isSolidHeader
    ? 'bg-white'
    : (currentView === 'home' && heroSlideIndex === 0 ? 'bg-charcoal' : 'bg-white');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolidHeader ? 'bg-charcoal/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-lg md:text-xl font-serif font-bold tracking-tight transition-colors duration-500 ${textColorClass}`}
          >
            NEUROVEDA LABS
          </button>
        </div>

        {/* Center: Navigation Links */}
        <nav className={`hidden md:flex flex-1 justify-center items-center space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${textColorClass}`}>
          <button 
            onClick={() => onNavigate('shop')}
            className="relative transition-opacity hover:opacity-100 opacity-80 group py-2"
          >
            <span>Shop</span>
            <span className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${underlineColorClass}`}></span>
          </button>
          <button className="relative transition-opacity hover:opacity-100 opacity-80 group py-2">
            <span>Quality</span>
            <span className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${underlineColorClass}`}></span>
          </button>
          <button className="relative transition-opacity hover:opacity-100 opacity-80 group py-2">
            <span>Story</span>
            <span className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${underlineColorClass}`}></span>
          </button>
        </nav>

        {/* Right: Cart */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className={`text-[10px] font-bold uppercase tracking-[0.2em] border-b transition-all duration-500 py-1 ${textColorClass} ${borderColorClass} hover:${hoverBorderColorClass}`}>
            CART (0)
          </button>
        </div>
      </div>
    </header>
  );
};
