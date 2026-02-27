
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { 
    question: "What is Shilajit?", 
    answer: "Shilajit is a potent, mineral-rich resin formed over centuries from the decomposition of plant matter in high-altitude mountain ranges. It is a foundational substance in traditional wellness, prized for its high concentration of fulvic acid and 84+ trace minerals." 
  },
  { 
    question: "What are the benefits of Shilajit?", 
    answer: "Shilajit supports a wide range of physiological systems, including natural energy production, cognitive focus, and physical recovery. It is highly effective for high performers, athletes, entrepreneurs, and those focused on longevity and natural mineral support." 
  },
  { 
    question: "Who is Shilajit best suited for?", 
    answer: "It is ideal for active individuals, mental performance seekers, and anyone focused on vitality. Note: It is not recommended for pregnant or breastfeeding women without consulting a healthcare professional." 
  },
  { 
    question: "How do I take Shilajit resin?", 
    answer: "Dissolve a pea-sized amount (300–500mg) in warm water, tea, or milk. For optimal absorption, we recommend taking it in the morning on an empty stomach. It can be taken daily as part of your wellness routine." 
  },
  { 
    question: "How long before I notice results?", 
    answer: "While some feel an increase in energy and focus within a few days, deeper physiological benefits typically take 2–4 weeks of consistent use. Consistency is key to unlocking the full potential of this mineral complex." 
  },
  { 
    question: "Is your Shilajit third-party lab tested?", 
    answer: "Yes. Every batch is rigorously third-party tested for purity, heavy metals, and microbial contamination. We verify fulvic acid percentages to ensure potency, and COAs are available upon request for complete transparency." 
  },
  { 
    question: "Where is your Shilajit sourced?", 
    answer: "Our Shilajit is wild-harvested from the highest altitudes of the Himalayan and Karakoram mountain ranges, where the environment is pristine and untouched by modern pollutants." 
  },
  { 
    question: "Does it contain additives or fillers?", 
    answer: "No. Neuroveda Labs Shilajit is 100% natural, pure resin. We never use fillers, shortcuts, or synthetic additives—just the raw, concentrated power of the earth." 
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-section-sm md:py-section-md bg-parchment">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-charcoal tracking-tight whitespace-nowrap">Frequently Asked Questions</h2>
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
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
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

