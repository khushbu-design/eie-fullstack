'use client';

import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ip = ipData.ip;

        const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const geoData = await geoResponse.json();

        const page = window.location.pathname || 'Home';
        const userAgent = navigator.userAgent || 'Unknown';
        const referrer = document.referrer || 'Direct';

        const payload = {
          page,
          ip,
          city: geoData.city || 'Ahmedabad',
          country: geoData.country_name || 'India',
          userAgent,
          referrer,
        };

        // Direct fetch (better than /api/)
        await fetch('https://optimistic-friends-ed5888f6c2.strapiapp.com/api/visitor-logs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        // Count (still via /api/ for simplicity)
        await fetch('/api/visitor-count', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ count: 1 }),
        });

      } catch (error) {
        console.error('Visitor tracking failed:', error);
        // Fallback count
        try {
          await fetch('/api/visitor-count', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: 1 }),
          });
        } catch {}
      }
    };

    trackVisitor();

    // Route change listener
    if (typeof window !== 'undefined' && window.history) {
      const handleRouteChange = () => {
        setTimeout(trackVisitor, 300);
      };
      window.history.pushState = (...args) => {
        window.history.pushState.apply(window.history, args);
        handleRouteChange();
      };
      window.history.replaceState = (...args) => {
        window.history.replaceState.apply(window.history, args);
        handleRouteChange();
      };
    }
  }, []);

  return null;
};

export default VisitorTracker;