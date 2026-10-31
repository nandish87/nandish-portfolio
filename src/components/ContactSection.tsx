import React from 'react';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import FadeIn from './FadeIn';
import { PERSONAL_DETAILS, SOCIAL_LINKS, SocialLink } from '../data/content';

const renderSocialIcon = (iconName: SocialLink['iconName']) => {
  switch (iconName) {
    case 'Linkedin':
      return <Linkedin size={20} />;
    case 'Instagram':
      return <Instagram size={20} />;
    case 'Github':
      return <Github size={20} />;
    case 'Mail':
      return <Mail size={20} />;
    default:
      return null;
  }
};

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      aria-label="Contact Nandish"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading: Contact */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Short line */}
        <FadeIn delay={0.15} y={20} className="mt-8 sm:mt-10">
          <p className="text-[#D7E2EA] font-kanit font-light text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
            Have a project or an opportunity in mind? Let&apos;s talk.
          </p>
        </FadeIn>

        {/* Large email link and phone */}
        <FadeIn delay={0.25} y={20} className="mt-8 flex flex-col items-center gap-3">
          <a
            href={`mailto:${PERSONAL_DETAILS.email}`}
            className="text-[#D7E2EA] font-kanit font-medium text-xl sm:text-2xl md:text-4xl tracking-tight transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-sm"
            aria-label={`Send email to ${PERSONAL_DETAILS.email}`}
          >
            {PERSONAL_DETAILS.email}
          </a>
          <a
            href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
            className="text-[#D7E2EA] font-kanit font-light text-lg sm:text-xl md:text-2xl tracking-wider transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-sm"
            aria-label={`Call ${PERSONAL_DETAILS.phone}`}
          >
            {PERSONAL_DETAILS.phone}
          </a>
        </FadeIn>

        {/* Row of circular icon buttons (48px, border-2 border-[#D7E2EA], text #D7E2EA, hover:bg-[#D7E2EA]/10) */}
        <FadeIn delay={0.35} y={20} className="mt-10 sm:mt-12">
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.iconName === 'Mail' ? undefined : '_blank'}
                rel={link.iconName === 'Mail' ? undefined : 'noopener noreferrer'}
                className="w-12 h-12 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] flex items-center justify-center transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]"
                aria-label={`${link.label} (opens in new tab)`}
              >
                {renderSocialIcon(link.iconName)}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default ContactSection;
