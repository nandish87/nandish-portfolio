import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../data/content';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    // Respect user's reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Tripled lists for seamless wide scroll
  const row1Images = [...IMAGES.marqueeRow1, ...IMAGES.marqueeRow1, ...IMAGES.marqueeRow1];
  const row2Images = [...IMAGES.marqueeRow2, ...IMAGES.marqueeRow2, ...IMAGES.marqueeRow2];

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      aria-label="Work Showcase"
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: row1Transform,
            willChange: 'transform',
            transition: 'transform 0.05s linear',
          }}
        >
          {row1Images.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#181818] border border-white/5"
            >
              <img
                src={src}
                alt={`Portfolio showcase item ${((index % IMAGES.marqueeRow1.length) + 1).toString().padStart(2, '0')}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: row2Transform,
            willChange: 'transform',
            transition: 'transform 0.05s linear',
          }}
        >
          {row2Images.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#181818] border border-white/5"
            >
              <img
                src={src}
                alt={`Portfolio showcase item ${((index % IMAGES.marqueeRow2.length) + 12).toString().padStart(2, '0')}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
