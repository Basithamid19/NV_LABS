
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "How do I take the shilajit resin?", answer: "Dissolve a pea-sized amount (approx. 250mg) in warm water, tea, or milk once or twice daily on an empty stomach." },
  { question: "Where is your shilajit sourced?", answer: "We exclusively source our resin from high-altitude regions of the Himalayas, ensuring purity and concentration." },
  { question: "Is it third-party tested?", answer: "Yes, every batch undergoes rigorous third-party testing for heavy metals and purity. Lab results are available upon request." },
  { question: "How long before I see results?", answer: "While individual experiences vary, most customers report feeling increased energy and clarity within 7 to 10 days of consistent use." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-section-sm md:py-section-md bg-parchment">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Getting started</h2>
          <p className="text-charcoal/40 uppercase tracking-[0.2em] text-[10px] font-bold">Frequently Asked Questions</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`rounded-2xl transition-all duration-300 ${openIndex === idx ? 'bg-mutedParchment' : 'bg-transparent'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex justify-between items-center w-full text-left p-6 group"
              >
                <span className={`text-lg font-medium pr-8 transition-colors ${openIndex === idx ? 'text-primary' : 'text-charcoal'}`}>{faq.question}</span>
                <span className={`w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-primary text-white border-primary rotate-45' : 'group-hover:border-primary group-hover:text-primary'}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-charcoal/70 leading-relaxed font-light text-base border-t border-charcoal/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
