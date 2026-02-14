import React from 'react';

interface SupplementFactsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupplementFacts: React.FC<SupplementFactsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content - Precise Table Alignment */}
      <div className="relative w-full max-w-2xl bg-white md:rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 max-h-screen md:max-h-[92vh] flex flex-col font-sans">
        
        {/* Top Label & Language Selector */}
        <div className="px-6 py-6 md:px-10 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-normal text-charcoal">Nutrition Information</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-2 px-4 py-1.5 border border-charcoal/20 rounded-md text-sm font-normal text-primary">
                <span>English</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-black transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Thick Main Divider */}
        <div className="mx-6 md:mx-10 border-b-2 border-charcoal"></div>

        {/* Scrollable Label Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 no-scrollbar bg-white text-charcoal">
          
          {/* Main Title Section */}
          <div className="mb-6">
            <div className="space-y-1 text-[13px] font-normal leading-tight pt-2">
              <p>Serving Size: 1 large pea-sized portion (750 mg ≈ 1 generous dollop)</p>
            </div>
          </div>

          {/* Table Header - Grid based for alignment */}
          <div className="border-t border-charcoal mt-8"></div>
          <div className="grid grid-cols-12 py-1.5 text-[12px] font-bold">
            <div className="col-span-7"></div>
            <div className="col-span-3 text-right">Per Serving (750mg)</div>
            <div className="col-span-2 text-right">NRV*</div>
          </div>
          <div className="border-t border-charcoal mb-1"></div>

          {/* MAJOR CONSTITUENTS - Using consistent grid columns */}
          {[
            { name: "Fulvic Acid", amt: "375 mg", nrv: "†" },
            { name: "Humic Substances", amt: "75 mg", nrv: "†" },
            { name: "Dibenzo-Alpha-Pyrones (DBPs)", amt: "Trace", nrv: "†" }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 py-3 border-b border-charcoal/10 text-[13px] items-center">
              <div className="col-span-7 font-bold">{item.name}</div>
              <div className="col-span-3 text-right font-medium">{item.amt}</div>
              <div className="col-span-2 text-right font-bold">{item.nrv}</div>
            </div>
          ))}

          {/* MINERAL ITEMS */}
          {[
            { name: "Magnesium", source: "muscle, ATP production", amt: "36 mg", nrv: "9%" },
            { name: "Iron", source: "oxygen transport", amt: "2.4 mg", nrv: "18%" },
            { name: "Zinc", source: "immune & hormone support", amt: "0.15 mg", nrv: "3%" },
            { name: "Copper", source: "enzymatic reactions", amt: "Trace", nrv: "†" },
            { name: "Selenium", source: "antioxidant defense", amt: "Trace", nrv: "†" },
            { name: "Manganese", source: "bone & metabolism", amt: "Trace", nrv: "†" },
            { name: "Potassium", source: "nerve signaling", amt: "Trace", nrv: "†" },
            { name: "Calcium", source: "structural + signaling", amt: "Trace", nrv: "†" }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 py-3 border-b border-charcoal/10 text-[13px] items-start">
              <div className="col-span-7 leading-snug">
                <span className="font-medium">{item.name}</span>
                <span className="text-charcoal/40 ml-1">({item.source})</span>
              </div>
              <div className="col-span-3 text-right font-medium">{item.amt}</div>
              <div className="col-span-2 text-right font-bold">{item.nrv}</div>
            </div>
          ))}

          {/* AMINO ACIDS */}
          <div className="border-b-2 border-charcoal/20 mt-6 mb-2"></div>
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-40 mb-3">Amino Acid Complex</p>
          {[
            'Glutamic acid', 'Aspartic acid', 'Alanine', 'Glycine', 'Valine', 'Leucine', 
            'Isoleucine', 'Lysine', 'Arginine', 'Tyrosine', 'Phenylalanine', 'Serine', 
            'Threonine', 'Proline'
          ].map((aa, idx) => (
            <div key={idx} className="grid grid-cols-12 py-2.5 border-b border-charcoal/10 text-[13px] items-center">
              <div className="col-span-7 font-medium">{aa}</div>
              <div className="col-span-3 text-right text-charcoal/40 italic">Trace</div>
              <div className="col-span-2 text-right font-bold">†</div>
            </div>
          ))}

          {/* BIOACTIVE ORGANIC CONSTITUENTS */}
          <div className="border-b-2 border-charcoal/20 mt-6 mb-2"></div>
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-40 mb-3">Organic Constiuents</p>
          {[
            'Polyphenols', 'Triterpenes', 'Sterols', 'Fatty acids', 'Benzoic acid', 
            'Hippuric acid', 'Uronic acids', 'Phenolic compounds'
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 py-2.5 border-b border-charcoal/10 text-[13px] items-center">
              <div className="col-span-7 font-medium">{item}</div>
              <div className="col-span-3 text-right text-charcoal/40 italic">Trace</div>
              <div className="col-span-2 text-right font-bold">†</div>
            </div>
          ))}

          {/* IONIC TRACE ELEMENT MATRIX */}
          <div className="border-b-2 border-charcoal/20 mt-6 mb-2"></div>
          <div className="py-4 text-[13px] leading-relaxed border-b border-charcoal/10">
            <span className="font-bold uppercase text-[11px] block mb-2 opacity-40">Ionic Trace Element Matrix:</span>
            <div className="flex flex-wrap items-center">
              <p className="text-charcoal/80">
                {[
                  'Boron', 'Chromium', 'Molybdenum', 'Cobalt', 'Nickel', 'Vanadium', 
                  'Lithium', 'Strontium', 'Rubidium', 'Cesium', 'Titanium', 'Silver', 
                  'Gold', 'Silicon', 'Iodine', 'Fluorine', 'Tin', 'Barium'
                ].join(', ')}
              </p>
              <span className="ml-2 font-bold">†</span>
            </div>
          </div>

          {/* Footer Footnotes */}
          <div className="mt-10 pt-6 border-t border-charcoal/10 space-y-4 text-[11px] text-charcoal font-normal leading-normal pb-8">
            <p>
              * Percentage Nutrient Reference Value based on a 2,000 calorie diet.<br />
              † Daily Value not established.
            </p>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <p className="italic text-primary/80">
                Neuroveda Gold is wild-harvested at 17,000 ft altitude. Traditional sun-drying and purification via triple-filtered spring water is used to maintain the integrity of 84+ trace minerals and unique molecular compounds. 3rd party laboratory verified for safety and purity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
