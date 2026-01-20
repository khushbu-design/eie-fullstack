'use client';

import { useState } from 'react';

export default function VisitorsAdminPage() {
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(null);
  const [error, setError] = useState('');
  const correctPassword = 'eie2025';

  const fetchCount = async () => {
    try {
      const base = process.env.NEXT_PUBLIC_STRAPI_URL 
        ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
        : 'https://popular-boot-8befa4f005.strapiapp.com';

      const url = `${base}/api/visitor-count`;

      console.log('Admin fetching visitor count from:', url);

      const res = await fetch(url, { cache: 'no-store' });

      if (!res.ok) {
        const text = await res.text();
        console.error('Admin fetch failed:', res.status, text);
        setError(`Error ${res.status}: ${text || 'Something went wrong!'}`);
        return;
      }

      const data = await res.json();
      console.log('Admin fetch data:', data);

      let fetchedCount = 0;
      if (data.data?.attributes?.count !== undefined) {
        fetchedCount = data.data.attributes.count;
      } else if (data.data?.count !== undefined) {
        fetchedCount = data.data.count;
      }

      setCount(fetchedCount);
    } catch (err) {
      console.error('Admin network error:', err);
      setError('Network or Strapi connection error!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      fetchCount();
    } else {
      setError('Password is wrong!');
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
              />
            </div>

            {error && <p className="text-red-600 font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition"
            >
              View Count
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
              className="text-blue-600 underline text-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}