'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Admin page par count na vadharo
    if (pathname?.startsWith('/admin')) return;

    const trackVisitor = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_STRAPI_URL
          ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
          : 'https://optimistic-friends-ed5888f6c2.strapiapp.com';

        // 1. Simple total count vadharo (old system)
        try {
          const countUrl = `${base}/api/visitor-count`;
          const getRes = await fetch(countUrl, { cache: 'no-store' });
          
          if (getRes.ok) {
            const data = await getRes.json();
            let currentCount = 0;
            if (data.data?.attributes?.count !== undefined) {
              currentCount = data.data.attributes.count;
            } else if (data.data?.count !== undefined) {
              currentCount = data.data.count;
            }

            await fetch(countUrl, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                data: { count: currentCount + 1 },
              }),
            });
          }
        } catch (err) {
          console.log('Count update failed:', err);
        }

        // 2. Detailed VisitorLog entry banavo
        const logUrl = `${base}/api/visitor-logs`;

        // Simple IP + location (free API)
        let ip = '';
        let city = '';
        let country = '';

        try {
          const geoRes = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
          if (geoRes.ok) {
            const geo = await geoRes.json();
            ip = geo.ip || '';
            city = geo.city || '';
            country = geo.country_name || '';
          }
        } catch (e) {
          // Geo fail thay to blank rahse
        }

        await fetch(logUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              page: pathname || '/',
              ip: ip,
              city: city,
              country: country,
              userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
              referrer: typeof document !== 'undefined' ? document.referrer : '',
              timestamp: new Date().toISOString(),
            },
          }),
        });

        console.log('Visitor logged:', pathname);
      } catch (error) {
        console.error('VisitorTracker error:', error);
      }
    };

    // Thodi der pachi track karo (page load pure thay pachi)
    const timer = setTimeout(trackVisitor, 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}