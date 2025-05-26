'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis>();
  
  useEffect(() => {    // Enhanced device detection with more accurate performance checks
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Completely disable animations for very low-end devices
    const shouldDisableAllAnimations = (isLowEndDevice && isMobile) || hasReducedMotion;
    
    // Disable smooth scroll on mobile/low-end devices for better performance
    if (isMobile || isLowEndDevice || hasReducedMotion) {
      // Enable lightweight scroll animations without Lenis
      const initBasicAnimations = () => {
        // Skip animations completely for very low-end devices
        if (shouldDisableAllAnimations) {
          gsap.utils.toArray('[data-reveal]').forEach((element: any) => {
            gsap.set(element, { opacity: 1, y: 0 });
          });
          return;
        }
        
        // Use simplified animations for low-end devices
        const animationsConfig = isLowEndDevice || isMobile ? {
          opacity: { from: 0, to: 1 },
          y: { from: 10, to: 0 }, // Minimal movement for better performance
          duration: 0.3, // Very fast animation
          ease: "power1.out", // Simpler easing
          stagger: 0, // No staggering for better performance
          batchSize: 10 // Process elements in batches
        } : {
          opacity: { from: 0, to: 1 },
          y: { from: 30, to: 0 },
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
          batchSize: 5
        };
        
        gsap.utils.toArray('[data-reveal]').forEach((element: any) => {
          gsap.fromTo(element, 
            { opacity: animationsConfig.opacity.from, y: animationsConfig.y.from },
            {
              opacity: animationsConfig.opacity.to,
              y: animationsConfig.y.to,
              duration: animationsConfig.duration,
              ease: animationsConfig.ease,
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        // Lightweight text reveals for mobile
        gsap.utils.toArray('[data-text-reveal]').forEach((element: any) => {
          gsap.fromTo(element, 
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
              }
            }
          );
        });
      };

      initBasicAnimations();
      return;
    }    // Initialize Lenis with device-optimized settings
    const lenis = new Lenis({
      duration: isTablet ? 1.0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: isTablet ? 1.5 : 2,
      wheelMultiplier: isTablet ? 0.8 : 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    // GSAP ScrollTrigger integration
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    // Advanced scroll-triggered animations
    const initScrollAnimations = () => {
      // Parallax backgrounds
      gsap.utils.toArray('[data-parallax]').forEach((element: any) => {
        const speed = element.dataset.parallax || 0.5;
        gsap.to(element, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Reveal animations
      gsap.utils.toArray('[data-reveal]').forEach((element: any) => {
        gsap.fromTo(element, 
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            rotationX: 15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Text reveal animations
      gsap.utils.toArray('[data-text-reveal]').forEach((element: any) => {
        const chars = element.textContent.split('');
        element.innerHTML = chars.map((char: string) => 
          `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        gsap.fromTo(element.children, 
          {
            opacity: 0,
            y: 50,
            rotationX: 90,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.02,
            scrollTrigger: {
              trigger: element,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Scale animations for cards
      gsap.utils.toArray('[data-scale]').forEach((element: any) => {
        gsap.fromTo(element,
          {
            scale: 0.8,
            opacity: 0,
            rotationY: 15,
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Morphing shapes
      gsap.utils.toArray('[data-morph]').forEach((element: any) => {
        gsap.to(element, {
          morphSVG: element.dataset.morph,
          duration: 2,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Magnetic effect for interactive elements
      gsap.utils.toArray('[data-magnetic]').forEach((element: any) => {
        const magnetic = element;
        const magneticText = magnetic.querySelector('[data-magnetic-text]');

        const activateMagnetic = (event: MouseEvent) => {
          const boundBox = magnetic.getBoundingClientRect();
          const magneticStrength = 40;
          const magneticTextStrength = 80;
          
          const newX = ((event.clientX - boundBox.left) / magnetic.offsetWidth - 0.5) * magneticStrength;
          const newY = ((event.clientY - boundBox.top) / magnetic.offsetHeight - 0.5) * magneticStrength;
          
          gsap.to(magnetic, {
            duration: 1,
            x: newX,
            y: newY,
            ease: "power4.out"
          });

          if (magneticText) {
            const textX = ((event.clientX - boundBox.left) / magnetic.offsetWidth - 0.5) * magneticTextStrength;
            const textY = ((event.clientY - boundBox.top) / magnetic.offsetHeight - 0.5) * magneticTextStrength;
            
            gsap.to(magneticText, {
              duration: 1,
              x: textX,
              y: textY,
              ease: "power4.out"
            });
          }
        };

        const resetMagnetic = () => {
          gsap.to(magnetic, {
            duration: 1,
            x: 0,
            y: 0,
            ease: "elastic.out(1, 0.3)"
          });

          if (magneticText) {
            gsap.to(magneticText, {
              duration: 1,
              x: 0,
              y: 0,
              ease: "elastic.out(1, 0.3)"
            });
          }
        };

        magnetic.addEventListener('mousemove', activateMagnetic);
        magnetic.addEventListener('mouseleave', resetMagnetic);
      });
    };

    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(initScrollAnimations, 100);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
