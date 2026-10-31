import React from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0C0C0C] font-kanit text-[#D7E2EA] overflow-x-clip selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      <main className="w-full flex flex-col">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Marquee Section */}
        <MarqueeSection />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Tech Stack Section: My daily stack */}
        <TechStackSection />

        {/* 5. Services Section */}
        <ServicesSection />

        {/* 6. Projects Section with Sticky Stacking */}
        <ProjectsSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
