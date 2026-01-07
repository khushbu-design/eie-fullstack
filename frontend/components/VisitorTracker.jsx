'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337/api';
        const url = `${baseUrl.replace(/\/$/, '')}/visitor-count`; // single type માટે no "s", no ID

        console.log('Fetching/Updating single type at:', url);

        const res = await fetch(url, { cache: 'no-store' });

        if (!res.ok) {
          console.log('Fetch failed:', res.status);
          return;
        }

        const data = await res.json();

        const currentCount = data.data.count || 0;

        const updateRes = await fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: { count: currentCount + 1 },
          }),
        });

        if (updateRes.ok) {
          console.log('✅ SUCCESS! Visitor count updated to:', currentCount + 1);
        } else {
          console.log('Update failed:', updateRes.status);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    incrementVisitorCount();
  }, []);

  return null;
}