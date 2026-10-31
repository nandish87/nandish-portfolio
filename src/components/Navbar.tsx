import React from 'react';
import { FadeIn } from './FadeIn';
import { NAV_ITEMS } from '../data/content';

export const Navbar: React.FC = () => {
  return (
    <FadeIn as="header" delay={0} y={-20} className="w-full z-30">
      <nav
        aria-label="Primary Navigation"
        className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#D7E2EA] font-kanit font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </FadeIn>
  );
};

export default Navbar;
