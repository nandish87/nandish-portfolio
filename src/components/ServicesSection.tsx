import React from 'react';
import FadeIn from './FadeIn';
import { SERVICES } from '../data/content';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative w-full bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 text-[#0C0C0C]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading: Services */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-kanit font-black uppercase text-[#0C0C0C] leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items in a vertical list */}
        <div className="w-full flex flex-col">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className={`w-full py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-10 border-t ${
                index === SERVICES.length - 1 ? 'border-b' : ''
              }`}
              style={{
                borderColor: 'rgba(12, 12, 12, 0.15)',
              }}
            >
              {/* Number on left */}
              <div
                className="font-kanit font-black text-[#0C0C0C] leading-none select-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Name + description stacked on the right */}
              <div className="flex-1 flex flex-col justify-center">
                <h3
                  className="font-kanit font-medium uppercase text-[#0C0C0C] tracking-wide mb-2 sm:mb-3"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-kanit font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
