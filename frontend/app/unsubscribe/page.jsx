'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Unsubscribe</h1>
        <p className="text-lg">Processing...</p>
      </div>
    </div>
  );
}

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!email) {
      setStatus('error');
      setMessage('No email address provided.');
      return;
    }

    const unsubscribe = async () => {
      try {
        const findRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/newsletter-subscribers?filters[email][$eq]=${encodeURIComponent(email)}`
        );
        const findData = await findRes.json();

        if (!findData.data || findData.data.length === 0) {
          setStatus('error');
          setMessage('This email is not subscribed to our newsletter.');
          return;
        }

        const id = findData.data[0].id;

        const deleteRes = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/newsletter-subscribers/${id}`,
          { method: 'DELETE' }
        );

        if (deleteRes.ok) {
          // Send email notification
          await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: "info@eieinstruments.com",
              subject: "Newsletter Unsubscription",
              message: `
                <p>A user has unsubscribed from the newsletter.</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Unsubscribed on:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              `.trim(),
            }),
          });

          setStatus('success');
          setMessage('You have been successfully unsubscribed from our newsletter.');
        } else {
          throw new Error('Delete failed');
        }
      } catch (err) {
        console.error(err);
        setStatus('error');
        setMessage('An error occurred. Please contact info@eieinstruments.com');
      }
    };

    unsubscribe();
  }, [email]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Unsubscribe</h1>

        {status === 'processing' && (
          <p className="text-lg">
            Processing unsubscription for <strong>{email || '...'}</strong>...
          </p>
        )}

        {status === 'success' && (
          <p className="text-lg text-green-700 font-semibold">{message}</p>
        )}

        {status === 'error' && (
          <p className="text-lg text-red-600 font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
}

// Export with Suspense boundary (આ જરૂરી છે!)
export default function UnsubscribePage() {
  return (
    <Suspense fallback={<Loading />}>
      <UnsubscribeContent />
    </Suspense>
  );
}
