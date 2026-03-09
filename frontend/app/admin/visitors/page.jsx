'use client';

import { useState } from 'react';

export default function VisitorsAdminPage() {
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const correctPassword = 'eie2025';

  const fetchCount = async () => {
    setLoading(true);
    setError('');

    try {
      const base = process.env.NEXT_PUBLIC_STRAPI_URL
        ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
        : 'https://optimistic-friends-ed5888f6c2.strapiapp.com'; // ← your current Strapi

      const url = `${base}/api/visitor-count`;

      console.log('Admin fetching visitor count from:', url);

      const res = await fetch(url, { cache: 'no-store' });

      if (!res.ok) {
        const text = await res.text();
        console.error('Admin fetch failed:', res.status, text);

        if (res.status === 404) {
          setError('Visitor count data not found in Strapi. Please create & publish a VisitorCount entry in the admin panel.');
          setCount(0); // fallback so page doesn't stay broken
        } else {
          setError(`Server error ${res.status}: ${text || 'Unknown issue'}`);
        }
        return;
      }

      const data = await res.json();
      console.log('Admin fetch success:', data);

      let fetchedCount = 0;
      if (data.data?.attributes?.count !== undefined) {
        fetchedCount = data.data.attributes.count;
      } else if (data.data?.count !== undefined) {
        fetchedCount = data.data.count;
      }

      setCount(fetchedCount);
    } catch (err) {
      console.error('Admin network error:', err);
      setError('Unable to connect to Strapi. Check your internet or Strapi status.');
      setCount(0);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === correctPassword) {
      fetchCount();
    } else {
      setError('Incorrect password!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-8">
          Website Visitors Count
        </h1>

        {count === null ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">
                Enter Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-lg"
                required
                disabled={loading}
              />
            </div>

            {error && <p className="text-red-600 font-medium">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg transition ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
              }`}
            >
              {loading ? 'Loading...' : 'View Count'}
            </button>
          </form>
        ) : (
          <div>
            <p className="text-6xl font-bold text-red-600 mb-4">
              {count}
            </p>
            <p className="text-xl text-gray-700 mb-8">
              Total Website Visitors
            </p>
            <button
              onClick={() => {
                setCount(null);
                setPassword('');
                setError('');
              }}
              className="text-blue-600 underline text-lg hover:text-blue-800"
            >
              Logout / Check Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}