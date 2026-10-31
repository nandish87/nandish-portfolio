import React from 'react';
import { GraduationCap, Zap, Sparkles, Users, Briefcase, Globe } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { PERSONAL_DETAILS, IMAGES, BulletPoint } from '../data/content';

const renderBulletIcon = (iconName: BulletPoint['iconName']) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase size={16} className="text-[#D7E2EA] flex-shrink-0" />;
    case 'Globe':
      return <Globe size={16} className="text-[#D7E2EA] flex-shrink-0" />;
    case 'GraduationCap':
      return <GraduationCap size={16} className="text-[#D7E2EA] flex-shrink-0" />;
    case 'Zap':
      return <Zap size={16} className="text-[#D7E2EA] flex-shrink-0" />;
    case 'Sparkles':
      return <Sparkles size={16} className="text-[#D7E2EA] flex-shrink-0" />;
    case 'Users':
      return <Users size={16} className="text-[#D7E2EA] flex-shrink-0" />;
    default:
      return null;
  }
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 4 Decorative 3D images in corners (pointer-events-none, behind text) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top-left: moon */}
        <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
          <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
            <img
              src={IMAGES.aboutDecorations.moon}
              alt=""
              aria-hidden="true"
              className="w-full h-auto object-contain opacity-75 drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
              loading="lazy"
            />
          </FadeIn>
        </div>

        {/* Bottom-left: object */}
        <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
          <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
            <img
              src={IMAGES.aboutDecorations.object}
              alt=""
              aria-hidden="true"
              className="w-full h-auto object-contain opacity-75 drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
              loading="lazy"
            />
          </FadeIn>
        </div>

        {/* Top-right: lego */}
        <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
          <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
            <img
              src={IMAGES.aboutDecorations.lego}
              alt=""
              aria-hidden="true"
              className="w-full h-auto object-contain opacity-75 drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
              loading="lazy"
            />
          </FadeIn>
        </div>

        {/* Bottom-right: group */}
        <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
          <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
            <img
              src={IMAGES.aboutDecorations.group}
              alt=""
              aria-hidden="true"
              className="w-full h-auto object-contain opacity-75 drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </div>

      {/* Main Content (Centered) */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Heading: About me */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text block: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center">
          {/* Animated paragraph */}
          <div className="max-w-[560px]">
            <AnimatedText
              text={PERSONAL_DETAILS.aboutParagraph}
              className="text-[#D7E2EA] font-kanit font-medium text-center leading-relaxed"
            />
          </div>

          {/* 4 Bullet point chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-2xl">
            {PERSONAL_DETAILS.aboutBullets.map((bullet, i) => (
              <FadeIn
                key={bullet.id}
                delay={i * 0.1}
                y={20}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#D7E2EA] font-kanit bg-[#141517]/60 backdrop-blur-sm"
                style={{
                  border: '1px solid rgba(215, 226, 234, 0.3)',
                }}
              >
                {renderBulletIcon(bullet.iconName)}
                <span>{bullet.text}</span>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.4} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
