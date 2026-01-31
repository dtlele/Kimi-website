import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

export function AnimatedCard({
  children,
  className = '',
  hoverScale = 1.02,
  hoverY = -8,
}: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className = '', tiltAmount = 10 }: TiltCardProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: -tiltAmount,
        rotateY: tiltAmount,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(154, 205, 50, 0.4)',
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={{
        boxShadow: `0 0 40px ${glowColor}`,
        transition: { duration: 0.3 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
