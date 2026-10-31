import React from 'react';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
      return;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center rounded-full font-kanit font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25)',
        boxSizing: 'border-box',
      }}
      aria-label="Contact Nandish"
    >
      {/* Inner inset shadow layer */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          boxShadow: 'inset 4px 4px 12px #7721B1',
        }}
        aria-hidden="true"
      />
      {/* White 2px outline with outline-offset -3px */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/90"
        style={{
          inset: '3px',
        }}
        aria-hidden="true"
      />
      <span className="relative z-10 drop-shadow-sm">Contact Me</span>
    </a>
  );
};

export default ContactButton;
