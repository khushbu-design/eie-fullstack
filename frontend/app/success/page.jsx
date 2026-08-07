'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const rawMessage = searchParams.get('message');
  const message = rawMessage
    ? decodeURIComponent(rawMessage)
    : 'Your submission has been received successfully! Thank you for contacting us.';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-10 text-center border border-gray-100">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {message}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold px-8 py-3 rounded-xl transition"
          >
            Browse Products
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          We will get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
}