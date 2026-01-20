'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams?.get('email') || null; // safe null handling

  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!email) {
      setStatus('error');
      setMessage('No email address provided in the link.');
      return;
    }

    const unsubscribe = async () => {
      try {
        // Find subscriber
        const findRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/newsletter-subscribers?filters[email][$eq]=${encodeURIComponent(email)}`
        );

        if (!findRes.ok) {
          throw new Error('Failed to check subscription');
        }

        const findData = await findRes.json();

        if (!findData.data || findData.data.length === 0) {
          setStatus('error');
          setMessage('This email is not subscribed to our newsletter.');
          return;
        }

        const id = findData.data[0].id;

        // Delete subscriber
        const deleteRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/newsletter-subscribers/${id}`,
          { method: 'DELETE' }
        );

        if (!deleteRes.ok) {
          throw new Error('Unsubscription failed on server');
        }

        // Send email notification
        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "info@eieinstruments.com",
            subject: "Newsletter Unsubscription Notification",
            message: `
              <p>A user has unsubscribed from the newsletter.</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Unsubscribed on:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            `.trim(),
          }),
        });

        setStatus('success');
        setMessage('You have been successfully unsubscribed from our newsletter. Thank you!');
      } catch (err) {
        console.error('Unsubscribe error:', err);
        setStatus('error');
        setMessage('An error occurred during unsubscription. Please contact info@eieinstruments.com for assistance.');
      }
    };

    unsubscribe();
  }, [email]);

  return (
    <>
      {status === 'processing' && (
        <p className="text-lg">
          Processing unsubscription for <strong>{email || 'your email'}</strong>...
        </p>
      )}

      {status === 'success' && (
        <p className="text-lg text-green-700 font-semibold">{message}</p>
      )}

      {status === 'error' && (
        <p className="text-lg text-red-600 font-semibold">{message}</p>
      )}
    </>
  );
}