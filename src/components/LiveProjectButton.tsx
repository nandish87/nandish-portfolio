import React from 'react';

interface LiveProjectButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  className = '',
  label = 'Live Project',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-kanit font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] ${className}`}
      aria-label={`${label} (opens in a new tab)`}
    >
      <span>{label}</span>
    </a>
  );
};

export default LiveProjectButton;
