'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_STRAPI_URL
          ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
          : 'https://optimistic-friends-ed5888f6c2.strapiapp.com'; // ← updated fallback

        const url = `${base}/api/visitor-count`;

        console.log('VisitorTracker - Trying to fetch:', url);

        const getRes = await fetch(url, { cache: 'no-store' });

        let currentCount = 0;

        if (getRes.ok) {
          const data = await getRes.json();
          console.log('GET success - Raw data:', data);

          if (data.data?.attributes?.count !== undefined) {
            currentCount = data.data.attributes.count;
          } else if (data.data?.count !== undefined) {
            currentCount = data.data.count;
          }
        } else {
          const errorText = await getRes.text();
          console.error('GET failed - Status:', getRes.status, 'Response:', errorText);

          if (getRes.status === 404) {
            console.warn('VisitorCount single-type has no published entry yet. Starting from 0.');
          } else {
            console.error('Other GET error - skipping increment');
            return; 
          }
        }

        console.log('Current count:', currentCount);

        const updateRes = await fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: { count: currentCount + 1 },
          }),
        });

        if (updateRes.ok) {
          console.log('✅ Visitor count incremented to:', currentCount + 1);
        } else {
          const updateError = await updateRes.text();
          console.error('PUT failed - Status:', updateRes.status, 'Response:', updateError);
        }
      } catch (error) {
        console.error('VisitorTracker general error:', error);
      }
    };

    incrementVisitorCount();
  }, []);

  return null;
}