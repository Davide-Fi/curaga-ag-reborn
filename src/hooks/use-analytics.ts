import { useCallback } from 'react';
import { config } from '@/config';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!config.features.enableAnalytics) {
      return;
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Custom analytics endpoint
    if (config.api.analyticsEndpoint) {
      fetch(config.api.analyticsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(console.error);
    }

    // Development logging
    if (config.features.enableDebugMode) {
      console.log('Analytics Event:', event);
    }
  }, []);

  const trackPageView = useCallback((path: string) => {
    trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: path,
    });
  }, [trackEvent]);

  const trackFormSubmission = useCallback((formName: string) => {
    trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formName,
    });
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string) => {
    trackEvent({
      action: 'button_click',
      category: 'engagement',
      label: buttonName,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackButtonClick,
  };
}; 