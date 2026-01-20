'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_STRAPI_URL 
          ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
          : 'https://popular-boot-8befa4f005.strapiapp.com';

        const url = `${base}/api/visitor-count`; // singular UID – no /s, no ID

        console.log('Visitor count - Trying URL:', url);

        const res = await fetch(url, { cache: 'no-store' });

        if (!res.ok) {
          const errorText = await res.text();
          console.error('GET failed - Status:', res.status, 'Response:', errorText);
          if (res.status === 404) {
            console.error('→ Possible reasons: Single-type not published, wrong UID, or entry missing');
          }
          return;
        }

        const data = await res.json();
        console.log('GET success - Raw data:', data);

        // Strapi v4/v5 compatibility: count ક્યાં છે તે ચેક કરીએ
        let currentCount = 0;
        if (data.data?.attributes?.count !== undefined) {
          currentCount = data.data.attributes.count;
        } else if (data.data?.count !== undefined) {
          currentCount = data.data.count;
        }

        console.log('Current count from Strapi:', currentCount);

        // PUT update
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