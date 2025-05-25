'use client';

import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export function Loading({ size = 'md', text, fullScreen = false }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-900/80'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600 dark:border-indigo-800 dark:border-t-indigo-400`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        {text && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <Loading
      size="lg"
      text="Loading..."
      fullScreen
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="card animate-pulse border border-indigo-100 bg-white/80 p-8 shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
      <div className="space-y-4">
        <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
} 