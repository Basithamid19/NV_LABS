import React, { useRef, useState, useEffect } from 'react';

interface BenefitCard {
  title: string;
  description: string;
  category: string;
  tag: string;
  bgColor: string;
  textColor: string;
  image?: string;
}

const benefitData: BenefitCard[] = [
  {
    category: "01",
    title: "Recovery support",
    description: "Aid natural rejuvenation and structural balance after daily exertion.",
    tag: "Ionic recovery",
    bgColor: "#C0C9C0",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "02",
    title: "Energy & stamina",
    description: "Support sustained vitality and endurance without the synthetic crash.",
    tag: "Cellular fuel",
    bgColor: "#E1E6EB",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?q=80&w=2070&auto=format&fit=crop",
  },
  {
    category: "03",
    title: "Cognitive clarity",
    description: "Support mental sharpness, focus, and long-term cognitive endurance.",
    tag: "Nootropic support",
    bgColor: "#D7CEC1",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1573142143200-2a6d95ae7352?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "04",
    title: "Stress & mood",
    description: "Support a grounded, balanced response to environmental stressors.",
    tag: "Inner calm",
    bgColor: "#E5D2D2",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1619365734050-cb5e64a42d43?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "05",
    title: "Testosterone support",
    description: "Support healthy hormonal balance, strength, and drive through foundational mineral nourishment.",
    tag: "Hormonal balance",
    bgColor: "#E1DDE5",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "06",
    title: "Mineral balance",
    description: "84+ trace minerals in their most bioavailable, earth-grown form.",
    tag: "Full-spectrum",
    bgColor: "#DDE0E3",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1768154916321-f8c94b176b3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "07",
    title: "Cellular vitality",
    description: "Support mitochondrial energy production and cellular resilience at the foundational level.",
    tag: "Mitochondrial support",
    bgColor: "#C0C9C0",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1706639449756-9ffea3f420a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "08",
    title: "Healthy aging",
    description: "Support cellular health and longevity focus across the years.",
    tag: "Timeless wellness",
    bgColor: "#E1DDE5",
    textColor: "text-charcoal",
    image: "https://images.unsplash.com/photo-1575572779113-49527c36dd19?q=80&w=1200&auto=format&fit=crop",
  },
];

interface BenefitsProps {
  onNavigate: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onNavigate: _onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const children = container.children;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const distance = Math.abs(child.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    if (closestIndex !== activeDot) setActiveDot(closestIndex);
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.offsetWidth * 0.55;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDot]);

  return (
    <section className="pt-16 md:pt-[120px] pb-16 md:pb-[120px] bg-white border-t border-charcoal/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-8xl font-serif leading-[1.05] tracking-tight text-charcoal">
            One source. Many systems <span className="italic font-light text-charcoal/80">supported.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 space-y-8 md:space-y-0">
          <div className="max-w-xl">
            <p className="text-charcoal/50 text-lg md:text-xl font-light leading-relaxed">
              A concentrated, fulvic-rich mineral complex formulated to support foundational physiological systems.
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-4 pb-2">
            <button
              onClick={() => scrollByAmount('left')}
              className="w-16 h-16 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-white hover:border-charcoal hover:shadow-xl transition-all active:scale-90"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="w-16 h-16 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-white hover:border-charcoal hover:shadow-xl transition-all active:scale-90"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12"
          >
            {benefitData.map((benefit, idx) => {
              const titleClass =
                "text-2xl md:text-[36px] font-serif mb-6 md:mb-8 leading-[1.1] tracking-tight font-bold uppercase " +
                "md:h-[44px] md:whitespace-nowrap md:overflow-hidden md:text-ellipsis";

              const descClass =
                "leading-relaxed text-base md:text-lg font-light opacity-60 max-w-xl mb-10 " +
                (benefit.textColor === 'text-white' ? 'opacity-80 ' : '') +
                "md:h-[28px] md:overflow-hidden md:whitespace-nowrap md:text-ellipsis";

              return (
                <div
                  key={idx}
                  style={{ backgroundColor: benefit.bgColor }}
                  className={
                    "flex-shrink-0 snap-start border border-charcoal/5 flex flex-col justify-between " +
                    "rounded-[32px] md:rounded-[40px] p-8 md:p-14 transition-all duration-500 group/card " +
                    // ✅ Uniform size on desktop
                    "w-[88vw] md:w-[600px] " +
                    "min-h-[460px] md:h-[640px] " +
                    benefit.textColor +
                    " md:hover:-translate-y-2 md:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
                  }
                >
                  <div>
                    <div className="flex justify-between items-start mb-8 md:mb-12">
                      <span
                        className={
                          "text-[12px] font-bold tracking-[0.3em] opacity-20 " +
                          (benefit.textColor === 'text-white' ? 'opacity-40' : '')
                        }
                      >
                        {benefit.category}
                      </span>
                      <div
                        className={
                          "w-14 h-[1px] mt-2 opacity-10 " +
                          (benefit.textColor === 'text-white' ? 'bg-white' : 'bg-charcoal')
                        }
                      />
                    </div>

                    <h3 className={titleClass}>{benefit.title}</h3>

                    <p className={descClass}>{benefit.description}</p>

                    {benefit.image && (
                      // ✅ Uniform photo size on desktop
                      <div className="overflow-hidden rounded-[24px] aspect-[4/3] md:aspect-auto md:h-[260px] bg-black/5">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          loading="lazy"
                          className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover/card:scale-105 transition-transform duration-1000"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop";
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-12">
                    <span
                      className={
                        "text-[10px] font-black uppercase tracking-[0.35em] " +
                        (benefit.textColor === 'text-white' ? 'text-white/80' : 'text-charcoal/60')
                      }
                    >
                      {benefit.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center space-x-3 mt-6 md:mt-12">
            {benefitData.map((_, i) => (
              <div
                key={i}
                className={
                  "transition-all duration-500 rounded-full " +
                  (i === activeDot ? 'w-8 md:w-16 h-1 bg-charcoal' : 'w-2 h-1 bg-charcoal/10')
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
