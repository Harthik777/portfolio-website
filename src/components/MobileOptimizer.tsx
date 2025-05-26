'use client';

import { useEffect } from 'react';

/**
 * MobileOptimizer component handles mobile-specific optimizations
 * including viewport meta tag adjustments, touch handling, and performance enhancements
 */
export function MobileOptimizer() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Prevent zoom on double-tap for better UX
    let lastTouchEnd = 0;
    const preventZoom = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Add touch event listeners
    document.addEventListener('touchend', preventZoom, { passive: false });    // Optimize scroll behavior for mobile
    const optimizeScrolling = () => {
      const body = document.body as any;
      body.style.webkitOverflowScrolling = 'touch';
      body.style.overflowScrolling = 'touch';
    };    // Set viewport meta tag for optimal mobile experience
    const setViewportMeta = () => {
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        document.head.appendChild(viewport);
      }
      
      // Use a slightly different viewport setting based on device type
      const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isTablet = /iPad/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0 && typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1200);
      
      if (isMobileDevice) {
        // Mobile phones - optimize for speed
        viewport.setAttribute(
          'content',
          'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover'
        );
      } else if (isTablet) {
        // Tablets - better scaling
        viewport.setAttribute(
          'content',
          'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover'
        );
      } else {
        // Desktop - standard
        viewport.setAttribute(
          'content',
          'width=device-width, initial-scale=1'
        );
      }
    };

    // Add mobile-specific CSS classes to html element
    const addMobileClasses = () => {
      const html = document.documentElement;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
      
      if (isMobile) {
        html.classList.add('is-mobile');
      }
      
      if (isTouch) {
        html.classList.add('is-touch');
      }

      // Add safe-area support class
      if (CSS.supports('padding-top: env(safe-area-inset-top)')) {
        html.classList.add('has-safe-area');
      }
    };

    // Optimize images for mobile
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-mobile-optimize]');
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        imageElement.loading = 'lazy';
        imageElement.decoding = 'async';
      });
    };

    // Initialize optimizations
    setViewportMeta();
    addMobileClasses();
    optimizeScrolling();
    optimizeImages();

    // Handle orientation change
    const handleOrientationChange = () => {
      // Small delay to ensure proper viewport adjustment
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    // Cleanup
    return () => {
      document.removeEventListener('touchend', preventZoom);
      if (typeof window !== 'undefined') {
        window.removeEventListener('orientationchange', handleOrientationChange);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for mobile detection
export function useIsMobile() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const checkIsMobile = () => {
      return window.innerWidth < 768;
    };
    
    const isMobile = checkIsMobile();
    const html = document.documentElement;
    
    if (isMobile) {
      html.classList.add('mobile-view');
    } else {
      html.classList.remove('mobile-view');
    }

    const handleResize = () => {
      const isMobileNow = checkIsMobile();
      if (isMobileNow) {
        html.classList.add('mobile-view');
      } else {
        html.classList.remove('mobile-view');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

// Mobile-optimized Image component
interface MobileOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  mobileSrc?: string;
  desktopSrc?: string;
}

export function MobileOptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  mobileSrc,
  desktopSrc,
}: MobileOptimizedImageProps) {
  // Default to desktop/regular src during SSR
  const imageSrc = typeof window !== 'undefined' && window.innerWidth < 768 && mobileSrc ? mobileSrc : desktopSrc || src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`responsive-image ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      data-mobile-optimize="true"
    />
  );
}
