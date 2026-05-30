'use client';

import { useEffect } from 'react';

export function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('motion-reduced');
      return;
    }

    root.classList.add('motion-ready');

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.setAttribute('data-visible', 'true'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.1,
      }
    );

    revealItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
