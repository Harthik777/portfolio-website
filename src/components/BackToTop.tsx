'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 sm:bottom-6 sm:right-6 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
