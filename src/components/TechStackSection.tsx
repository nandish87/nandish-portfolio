import React from 'react';
import FadeIn from './FadeIn';
import { TECH_STACK, TechStackItem } from '../data/content';

const TechIcon: React.FC<{ iconName: TechStackItem['iconName'] }> = ({ iconName }) => {
  switch (iconName) {
    case 'Next':
      return (
        <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl select-none shadow-md">
          <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
            <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0_next)">
              <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6" />
              <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white" />
              <rect x="115" y="54" width="12" height="72" fill="white" />
            </g>
          </svg>
        </div>
      );
    case 'Three':
      return (
        <div className="w-12 h-12 rounded-2xl bg-[#111113] border border-white/15 flex items-center justify-center flex-shrink-0 text-white shadow-md">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 22 22 22" fill="none" stroke="white" strokeWidth="2.5" />
            <polygon points="12 7 6 19 18 19" fill="white" opacity="0.3" />
          </svg>
        </div>
      );
    case 'Python':
      return (
        <div className="w-12 h-12 rounded-2xl bg-[#1a2333] border border-[#3776ab]/30 flex items-center justify-center flex-shrink-0 shadow-md">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M11.91 2c-3.1 0-5.07.29-5.07 1.87v2.22h5.16v.74H4.84C2.56 6.83 2 8.43 2 11.08c0 2.27.7 3.99 2.84 4.07v-2.02c0-1.87 1.63-2.05 3.33-2.05h5.18v-.76H8.2c-.37 0-.66-.3-.66-.66V8.92c0-.37.3-.67.66-.67h8.18c.37 0 .66.3.66.67v1.4c0 .36-.29.66-.66.66H15.2v.76h3.96c2.28 0 2.84-1.6 2.84-4.25 0-2.27-.66-3.99-2.84-4.07V5.5c0 1.88-1.63 2.05-3.33 2.05h-5.18v.76h5.15c.37 0 .66.3.66.67V10.4c0 .36-.29.66-.66.66H7.66c-.36 0-.66-.3-.66-.66V9.66c0-.36.3-.66.66-.66h4.25V6.78H6.84V4.54C6.84 2.96 8.81 2 11.91 2z" fill="#387eb8" />
            <path d="M12.09 22c3.1 0 5.07-.29 5.07-1.87v-2.22H12v-.74h7.16c2.28 0 2.84-1.6 2.84-4.25 0-2.27-.7-3.99-2.84-4.07v2.02c0 1.87-1.63 2.05-3.33 2.05H10.65v.76h5.15c.37 0 .66.3.66.66v1.4c0 .37-.29.67-.66.67H7.62c-.37 0-.66-.3-.66-.67v-1.4c0-.36.29-.66.66-.66H8.8v-.76H4.84C2.56 14.54 2 16.14 2 18.79c0 2.27.66 3.99 2.84 4.07v-1.48c0-1.88 1.63-2.05 3.33-2.05h5.18v-.76H8.2c-.37 0-.66-.3-.66-.67V16.5c0-.36.3-.66.66-.66h8.18c.36 0 .66.3.66.66v.74c0 .36-.3.66-.66.66h-4.25v2.22h5.07c0 1.58-1.97 1.88-5.07 1.88z" fill="#ffe052" />
          </svg>
        </div>
      );
    case 'Cursor':
      return (
        <div className="w-12 h-12 rounded-2xl bg-black border border-white/20 flex items-center justify-center flex-shrink-0 shadow-md">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2L20 10L13 13L10 20L4 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'Claude':
      return (
        <div className="w-12 h-12 rounded-2xl bg-[#D97706]/15 border border-[#D97706]/40 flex items-center justify-center flex-shrink-0 shadow-md">
          <div className="w-7 h-7 rounded-full bg-[#D97706] flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-[#0C0C0C]" />
          </div>
        </div>
      );
    case 'Antigravity':
      return (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border border-indigo-400/40 flex items-center justify-center flex-shrink-0 shadow-md">
          <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M12 2a10 10 0 0 0-7.07 17.07l1.41-1.41A8 8 0 1 1 12 4V2z" fill="currentColor" />
            <path d="M12 22a10 10 0 0 0 7.07-17.07l-1.41 1.41A8 8 0 1 1 12 20v2z" fill="currentColor" opacity="0.7" />
          </svg>
        </div>
      );
    case 'Figma':
      return (
        <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-md">
          <svg className="w-5 h-7" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
          </svg>
        </div>
      );
    case 'Node':
      return (
        <div className="w-12 h-12 rounded-2xl bg-[#162319] border border-[#22c55e]/30 flex items-center justify-center flex-shrink-0 shadow-md">
          <svg className="w-7 h-7 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
          </svg>
        </div>
      );
    case 'Tailwind':
      return (
        <div className="w-12 h-12 rounded-2xl bg-[#0c2838] border border-[#38bdf8]/30 flex items-center justify-center flex-shrink-0 shadow-md">
          <svg className="w-7 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export const TechStackSection: React.FC = () => {
  return (
    <section
      id="stack"
      aria-label="My daily stack"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-4">
          <h2
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 120px)' }}
          >
            My Daily Stack
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20} className="text-center mb-14 sm:mb-16">
          <p className="text-[#D7E2EA]/70 font-kanit font-light text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            The core technologies, frameworks, and agentic AI systems powering my engineering workflows.
          </p>
        </FadeIn>

        {/* 9-Card Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TECH_STACK.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.08}
              y={25}
              className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-[#141518]/90 border border-white/10 hover:border-[#D7E2EA]/40 hover:bg-[#1a1c20] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(215,226,234,0.08)]"
            >
              {/* Icon */}
              <TechIcon iconName={item.iconName} />

              {/* Text content */}
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-kanit font-medium text-white text-lg sm:text-xl truncate group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] uppercase font-kanit tracking-wider text-[#D7E2EA]/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                    {item.category}
                  </span>
                </div>
                <p className="font-kanit font-light text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 leading-snug">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

