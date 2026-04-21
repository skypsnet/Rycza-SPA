/**
 * Utility to track Google Tag Manager events and page views.
 */

export const trackGTMEvent = (eventName, eventData = {}) => {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...eventData
        });
    } else {
        console.warn('GTM dataLayer not found');
    }
};

export const trackGTMPageView = (path, title) => {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: 'page_view',
            page_path: path,
            page_title: title
        });
    }
};
