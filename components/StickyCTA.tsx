import React from 'react';

interface StickyCTAProps {
  isVisible: boolean;
  onNavigate: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible, onNavigate }) => {
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <button 
        onClick={onNavigate}
        className="bg-primary text-white whitespace-nowrap px-8 h-[56px] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary/90 shadow-2xl shadow-primary/40 flex items-center space-x-3"
      >
        <span>Shop Shilajit</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
      </button>
    </div>
  );
};