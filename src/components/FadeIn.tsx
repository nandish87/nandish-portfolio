import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SupportedTag = 'div' | 'section' | 'header' | 'footer' | 'nav' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'ul' | 'li' | 'a';

interface FadeInProps {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: SupportedTag;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Dynamically resolve motion component using motion.create or motion dictionary
  const MotionComponent = useMemo(() => {
    if (typeof motion.create === 'function') {
      return motion.create(as);
    }
    // Fallback if motion.create is not present
    return (motion as unknown as Record<string, React.ComponentType<unknown>>)[as] || motion.div;
  }, [as]) as React.ElementType;

  if (shouldReduceMotion) {
    const FallbackTag = as;
    return (
      <FallbackTag id={id} className={className} style={style}>
        {children}
      </FallbackTag>
    );
  }

  return (
    <MotionComponent
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
