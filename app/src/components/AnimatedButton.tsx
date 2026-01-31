import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
  icon?: ReactNode;
}

const variants = {
  primary: 'bg-vueffe-green text-white hover:bg-vueffe-green-light',
  secondary: 'bg-vueffe-dark text-white hover:bg-slate-800',
  outline: 'border-2 border-vueffe-green text-vueffe-green hover:bg-vueffe-green hover:text-white',
  ghost: 'text-vueffe-green hover:bg-vueffe-green/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  showArrow = false,
  icon,
}: AnimatedButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-full
    transition-colors duration-300
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          className="flex-shrink-0"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
