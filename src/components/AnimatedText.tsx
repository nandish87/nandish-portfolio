import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useReducedMotion } from 'framer-motion';

interface AnimatedCharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
        aria-hidden="true"
      >
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const totalChars = characters.length;

  if (shouldReduceMotion) {
    return (
      <p ref={containerRef} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p
      ref={containerRef}
      className={`relative inline-block flex-wrap justify-center ${className}`}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {characters.map((char, index) => {
          const start = index / totalChars;
          const end = Math.min(1, (index + 1) / totalChars);
          return (
            <AnimatedCharacter
              key={`${index}-${char}`}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </span>
    </p>
  );
};

export default AnimatedText;
