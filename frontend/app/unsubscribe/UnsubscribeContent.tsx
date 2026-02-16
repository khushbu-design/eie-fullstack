'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams?.get('email') || null;

  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('');
  
  // આ useRef રિક્વેસ્ટને બે વાર રન થતા અટકાવશે (Strict Mode માં જરૂરી છે)
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (!email) {
      setStatus('error');
      setMessage('No email address provided in the link.');
      return;
    }

    // જો પ્રોસેસ થઈ ગઈ હોય તો ફરી ન કરવું
    if (hasProcessed.current) return;

    const unsubscribe = async () => {
      try {
        hasProcessed.current = true;
        
        // 1. સબસ્ક્રાઇબરને શોધો (Email Filter દ્વારા)
        const findRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/newsletter-subscribers?filters[email][$eq]=${encodeURIComponent(email)}`
        );

        if (!findRes.ok) {
          throw new Error('Failed to connect to server');
        }

        const findData = await findRes.json();

        if (!findData.data || findData.data.length === 0) {
          setStatus('error');
          setMessage('This email is not found in our subscription list.');
          return;
        }

        const documentId = findData.data[0].id; // Strapi ID

        // 2. સબસ્ક્રાઇબરને ડિલીટ કરો
        // નોંધ: Strapi Settings > Roles > Public માં 'newsletter-subscriber' ની DELETE પરમિશન હોવી જરૂરી છે.
        const deleteRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/newsletter-subscribers/${documentId}`,
          { 
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            }
          }
        );

        if (!deleteRes.ok) {
          // જો અહીં એરર આવે તો સમજવું કે Strapi માં DELETE પરમિશન બંધ છે
          throw new Error('Unsubscription failed on server');
        }

        // 3. એડમિનને જાણ કરવા માટે ઈમેલ મોકલો
        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "info@eieinstruments.com",
            subject: "Newsletter Unsubscription Notification",
            message: `
              <div style="font-family: sans-serif; line-height: 1.5;">
                <h2 style="color: #d60000;">Unsubscription Alert</h2>
                <p>A user has unsubscribed from the newsletter.</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            `.trim(),
          }),
        });

        setStatus('success');
        setMessage('You have been successfully unsubscribed from our newsletter. We are sorry to see you go!');
      } catch (err) {
        console.error('Unsubscribe error:', err);
        setStatus('error');
        setMessage('Could not complete unsubscription. This usually happens due to server permissions. Please contact us at info@eieinstruments.com.');
      }
    };

    unsubscribe();
  }, [email]);

  return (
    <div className="p-6 text-center">
      {status === 'processing' && (
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-gray-700">
            Processing unsubscription for <strong>{email}</strong>...
          </p>
        </div>
      )}

      {status === 'success' && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-lg text-green-700 font-semibold">{message}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-lg text-red-600 font-semibold">{message}</p>
          <p className="mt-2 text-sm text-gray-500">If the error persists, please email info@eieinstruments.com</p>
        </div>
      )}
    </div>
  );
}