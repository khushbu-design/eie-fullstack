'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        if (sessionStorage.getItem('eie_visit_tracked')) {
          return;
        }

        const base = process.env.NEXT_PUBLIC_STRAPI_URL
          ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
          : 'https://optimistic-friends-ed5888f6c2.strapiapp.com';

        let city = 'Unknown';
        let country = 'Unknown';

        try {
          const geoRes = await fetch('https://ipapi.co/json/');
          if (geoRes.ok) {
            const geo = await geoRes.json();
            city = geo.city || 'Unknown';
            country = geo.country_name || 'Unknown';
          }
        } catch (err) {
          console.log('Location fetch failed');
        }

        const payload = {
          data: {
            ip: 'hidden',
            city: city,
            country: country,
            page: window.location.pathname + window.location.search,
            referrer: document.referrer || 'Direct',
            userAgent: navigator.userAgent.substring(0, 250),
          },
        };

        const res = await fetch(`${base}/api/visitor-logs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          console.log('Visit tracked successfully');
          sessionStorage.setItem('eie_visit_tracked', 'true');
        } else {
          const errorText = await res.text();
          console.error('Visitor tracking failed:', res.status, errorText);
        }
      } catch (error) {
        console.error('VisitorTracker error:', error);
      }
    };

    const timer = setTimeout(trackVisit, 1500);
    return () => clearTimeout(timer);
  }, []);

  return null;
}