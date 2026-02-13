
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentView: 'home' | 'shop';
  onNavigate: (view: 'home' | 'shop') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use the dark header (for white text contrast)
  const isDarkBg = isScrolled || currentView === 'shop';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isDarkBg ? 'bg-charcoal/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-lg md:text-xl font-serif font-bold tracking-tight transition-colors duration-300 ${isDarkBg ? 'text-white' : 'text-white'}`}
          >
            NEUROVEDA LABS
          </button>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold">
          <button 
            onClick={() => onNavigate('shop')}
            className={`relative text-white transition-opacity hover:opacity-100 opacity-80 group py-2`}
          >
            <span>Shop</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button className="relative text-white transition-opacity hover:opacity-100 opacity-80 group py-2">
            <span>Quality</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button className="relative text-white transition-opacity hover:opacity-100 opacity-80 group py-2">
            <span>Story</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </nav>

        {/* Right: Cart */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/20 hover:border-white transition-all py-1">
            CART (0)
          </button>
        </div>
      </div>
    </header>
  );
};
