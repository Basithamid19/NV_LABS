
import React from 'react';

const testimonials = [
  { text: "The quality of Neuroveda Labs is on another level. I've tried other brands, but the texture and immediate clarity I get from this resin is unmatched.", author: "Sarah M.", title: "Wellness Practitioner" },
  { text: "As a marathon runner, recovery is everything. This shilajit has become a staple in my morning routine for sustained energy throughout the day.", author: "James L.", title: "Endurance Athlete" },
  { text: "Clear, transparent, and effective. The lab results being so accessible gave me the confidence to switch brands. I'm glad I did.", author: "Michael R.", title: "Health Enthusiast" }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-section-sm md:py-section-md bg-parchment">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex overflow-x-auto space-x-8 no-scrollbar snap-x">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-full md:w-[600px] snap-center px-4">
              <div className="text-center space-y-6">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-serif italic text-charcoal/80 leading-snug">
                  "{t.text}"
                </blockquote>
                <div className="pt-4">
                  <p className="font-bold uppercase tracking-widest text-sm">{t.author}</p>
                  <p className="text-primary text-xs uppercase tracking-[0.2em] font-medium mt-1">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
