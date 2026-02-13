
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'shop') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-parchment pt-section-md pb-12 border-t border-charcoal/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-serif font-bold tracking-tight text-primary hover:opacity-80 transition-opacity"
            >
              NEUROVEDA LABS
            </button>
            <p className="text-sm text-charcoal/40 uppercase tracking-[0.3em] font-medium">Ancient Wisdom. Modern Science.</p>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl pt-4">
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em]">Shop</h5>
              <ul className="space-y-2 text-sm text-charcoal/60">
                <li><button onClick={() => onNavigate('shop')} className="hover:text-primary transition-colors">All Products</button></li>
                <li><button onClick={() => onNavigate('shop')} className="hover:text-primary transition-colors">Subscriptions</button></li>
                <li><button onClick={() => onNavigate('shop')} className="hover:text-primary transition-colors">Bundles</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em]">Company</h5>
              <ul className="space-y-2 text-sm text-charcoal/60">
                <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Our Story</button></li>
                <li><button className="hover:text-primary transition-colors">Lab Results</button></li>
                <li><button className="hover:text-primary transition-colors">Sustainability</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em]">Legal</h5>
              <ul className="space-y-2 text-sm text-charcoal/60">
                <li><button className="hover:text-primary transition-colors">Shipping Policy</button></li>
                <li><button className="hover:text-primary transition-colors">Privacy Policy</button></li>
                <li><button className="hover:text-primary transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-8 pt-4">
            <a href="#" className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>

          <p className="text-[10px] text-charcoal/30 uppercase tracking-[0.2em] pt-8">
            &copy; 2024 NEUROVEDA LABS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
