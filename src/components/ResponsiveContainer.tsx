'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  as?: 'div' | 'section' | 'article' | 'main';
  animate?: boolean;
  id?: string;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

const paddingClasses = {
  none: '',
  sm: 'px-3 xs:px-4 sm:px-6',
  md: 'px-4 xs:px-6 sm:px-8 md:px-12',
  lg: 'px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16',
  xl: 'px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24',
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export function ResponsiveContainer({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'lg',
  as: Component = 'div',
  animate = false,
  id,
}: ResponsiveContainerProps) {
  const containerClasses = `
    mx-auto w-full
    ${maxWidthClasses[maxWidth]}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  if (animate) {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        id={id}
      >
        <Component className={containerClasses}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return (
    <Component className={containerClasses} id={id}>
      {children}
    </Component>
  );
}

// Responsive Grid Component
interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const gapClasses = {
  sm: 'gap-3 xs:gap-4',
  md: 'gap-4 xs:gap-6 sm:gap-8',
  lg: 'gap-6 xs:gap-8 sm:gap-10 md:gap-12',
  xl: 'gap-8 xs:gap-10 sm:gap-12 md:gap-16',
};

export function ResponsiveGrid({
  children,
  cols = { xs: 1, sm: 2, lg: 3 },
  gap = 'md',
  className = '',
}: ResponsiveGridProps) {
  const getGridCols = () => {
    const colClasses = [];
    
    if (cols.xs) colClasses.push(`grid-cols-${cols.xs}`);
    if (cols.sm) colClasses.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) colClasses.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) colClasses.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) colClasses.push(`xl:grid-cols-${cols.xl}`);
    if (cols['2xl']) colClasses.push(`2xl:grid-cols-${cols['2xl']}`);
    
    return colClasses.join(' ');
  };

  return (
    <div className={`grid ${getGridCols()} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

// Responsive Text Component
interface ResponsiveTextProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const textSizeClasses = {
  xs: 'text-xs xs:text-sm',
  sm: 'text-sm xs:text-base',
  base: 'text-base xs:text-lg',
  lg: 'text-lg xs:text-xl sm:text-2xl',
  xl: 'text-xl xs:text-2xl sm:text-3xl',
  '2xl': 'text-2xl xs:text-3xl sm:text-4xl',
  '3xl': 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl',
  '4xl': 'text-3xl xs:text-4xl sm:text-5xl md:text-6xl',
  '5xl': 'text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
};

export function ResponsiveText({
  children,
  size = 'base',
  className = '',
  as: Component = 'p',
}: ResponsiveTextProps) {
  return (
    <Component className={`${textSizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}

// Responsive Button Component
interface ResponsiveButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-purple-600 hover:to-pink-600',
  secondary: 'bg-white/80 text-gray-900 border border-gray-300 hover:bg-white dark:bg-gray-800/80 dark:text-white dark:border-gray-600',
  outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400',
};

const buttonSizes = {
  sm: 'min-h-[40px] px-4 xs:px-6 py-2 xs:py-3 text-sm xs:text-base',
  md: 'min-h-[44px] xs:min-h-[48px] px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base',
  lg: 'min-h-[48px] xs:min-h-[52px] px-8 xs:px-10 py-4 xs:py-5 text-base xs:text-lg',
};

export function ResponsiveButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  type = 'button',
}: ResponsiveButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 xs:gap-3
    rounded-full font-semibold transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:scale-105 hover:shadow-lg
    ${buttonVariants[variant]}
    ${buttonSizes[size]}
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>  );
}
