'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    const showAll = () => {
      revealItems.forEach(item => item.setAttribute('data-visible', 'true'));
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('motion-ready');
      root.classList.add('motion-reduced');
      showAll();
      return;
    }

    root.classList.remove('motion-reduced');
    root.classList.add('motion-ready');

    if (!('IntersectionObserver' in window) || revealItems.length === 0) {
      showAll();
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
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.01,
      }
    );

    const frame = window.requestAnimationFrame(() => {
      revealItems.forEach(item => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          item.setAttribute('data-visible', 'true');
        } else {
          observer.observe(item);
        }
      });
    });

    const fallback = window.setTimeout(showAll, 1600);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
