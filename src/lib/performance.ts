// This script contains optimizations and performance enhancements
// to improve loading times and runtime performance.

// Configuration to reduce bundle size
export const performanceConfig = {
  // Reduce particle count on all devices for better performance
  particleCount: {
    mobile: 300,
    tablet: 800,
    desktop: 1500
  },
  
  // Frame rate control
  frameRateLimit: {
    mobile: 30,
    tablet: 45,
    desktop: 60
  },
  
  // Loading optimizations
  loading: {
    mobileTimeReduce: 0.4, // 40% faster loading on mobile
    mobileStepsReduce: 0.25 // 25% fewer loading steps on mobile
  }
};

// Default export for compatibility
export default performanceConfig;
