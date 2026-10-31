import React from 'react';
import Navbar from './Navbar';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import { PERSONAL_DETAILS, IMAGES } from '../data/content';

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-label="Hero"
      className="relative h-screen min-h-[640px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]"
    >
      {/* 1. Top Navbar */}
      <Navbar />

      {/* 2. Hero Heading (Centered/Upper Area) */}
      <div className="w-full overflow-hidden text-center mt-6 sm:mt-4 md:-mt-5 select-none z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-kanit font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
            Hi, i&apos;m nandish
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet effect */}
      <div
        className="pointer-events-none sm:pointer-events-auto absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex items-end justify-center"
          >
            <img
              src={IMAGES.portrait}
              alt="Portrait of Y Nandish"
              className="w-full h-auto max-h-[75vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-kanit font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {PERSONAL_DETAILS.heroTagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
