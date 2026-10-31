import React, { useRef, useState, useEffect, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)');
  const [transition, setTransition] = useState(inactiveTransition);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;

      // Disable on touch devices or reduced motion
      if (
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const expandedLeft = rect.left - padding;
      const expandedRight = rect.right + padding;
      const expandedTop = rect.top - padding;
      const expandedBottom = rect.bottom + padding;

      const isInside =
        e.clientX >= expandedLeft &&
        e.clientX <= expandedRight &&
        e.clientY >= expandedTop &&
        e.clientY <= expandedBottom;

      if (isInside) {
        const dx = (e.clientX - centerX) / strength;
        const dy = (e.clientY - centerY) / strength;
        setTransition(activeTransition);
        setTransform(`translate3d(${dx}px, ${dy}px, 0)`);
      } else {
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0)');
      }
    },
    [padding, strength, activeTransition, inactiveTransition]
  );

  const handleMouseLeaveWindow = useCallback(() => {
    setTransition(inactiveTransition);
    setTransform('translate3d(0px, 0px, 0)');
  }, [inactiveTransition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [handleMouseMove, handleMouseLeaveWindow]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
