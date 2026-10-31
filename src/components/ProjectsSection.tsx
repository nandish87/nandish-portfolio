import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { PROJECTS, ProjectItem } from '../data/content';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[580px] flex items-center justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale: shouldReduceMotion ? 1 : scale,
          top: `${index * 28}px`,
          position: 'relative',
        }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8 pb-3 sm:pb-4 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-kanit font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 font-kanit uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-kanit uppercase font-medium text-lg sm:text-2xl md:text-3xl tracking-wide">
                {project.name}
              </span>
            </div>
          </div>

          <LiveProjectButton href={project.link} />
        </div>

        {/* Bottom Two-Column Image Grid (40% / 60%) */}
        <div className="flex gap-3 sm:gap-4 w-full">
          {/* Left Column (40%) */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <div
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#161719] border border-white/5"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images[0]}
                alt={`${project.name} preview top`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#161719] border border-white/5"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images[1]}
                alt={`${project.name} preview detail`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60%) */}
          <div
            className="rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#161719] border border-white/5"
            style={{ width: '60%' }}
          >
            <img
              src={project.images[2]}
              alt={`${project.name} preview full`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: Project */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-10 sm:mb-14 md:mb-20">
          <h2
            className="hero-heading font-kanit font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky-stacking project cards */}
        <div className="w-full relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
