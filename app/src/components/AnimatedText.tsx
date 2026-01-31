import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  as: Component = 'span',
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({
  text,
  className = '',
  delay = 0,
  speed = 0.05,
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const characters = text.split('');

  return (
    <span ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + index * speed,
            ease: 'linear',
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function WordReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.1,
}: WordRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: delay + index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
  highlightClassName?: string;
}

export function HighlightText({
  children,
  className = '',
  highlightClassName = 'bg-gradient-to-r from-vueffe-green to-vueffe-green-light bg-clip-text text-transparent',
}: HighlightTextProps) {
  return (
    <span className={className}>
      <span className={highlightClassName}>{children}</span>
    </span>
  );
}
