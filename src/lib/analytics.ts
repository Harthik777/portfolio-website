// Simple analytics and performance monitoring
export class Analytics {
  private static instance: Analytics;
  private events: Array<{ name: string; timestamp: number; data?: any }> = [];

  private constructor() {}

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  // Track page views
  trackPageView(page: string) {
    this.trackEvent('page_view', { page });
  }

  // Track user interactions
  trackEvent(name: string, data?: any) {
    this.events.push({
      name,
      timestamp: Date.now(),
      data,
    });

    // In a real app, you'd send this to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', { name, data });
    }
  }

  // Track performance metrics
  trackPerformance() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const metrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: this.getFirstPaint(),
        firstContentfulPaint: this.getFirstContentfulPaint(),
      };

      this.trackEvent('performance_metrics', metrics);
    }
  }

  private getFirstPaint(): number | null {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : null;
  }

  private getFirstContentfulPaint(): number | null {
    const paintEntries = performance.getEntriesByType('paint');
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return firstContentfulPaint ? firstContentfulPaint.startTime : null;
  }

  // Get all tracked events (for debugging)
  getEvents() {
    return this.events;
  }

  // Clear events
  clearEvents() {
    this.events = [];
  }
}

// Convenience functions
export const analytics = Analytics.getInstance();

export function trackPageView(page: string) {
  analytics.trackPageView(page);
}

export function trackEvent(name: string, data?: any) {
  analytics.trackEvent(name, data);
}

export function trackPerformance() {
  analytics.trackPerformance();
} 