'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [visits, setVisits] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [stats, setStats] = useState({
    totalVisits: 0,
    totalSubmissions: 0,
    todayVisits: 0,
  });

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'EIE@Admin2026Strong';

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('eie_admin_auth') === 'true') {
      setAuthenticated(true);
      fetchAllData();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.trim() === ADMIN_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem('eie_admin_auth', 'true');
      setError('');
      fetchAllData();
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('eie_admin_auth');
    setAuthenticated(false);
    setPassword('');
  };

  const fetchAllData = async () => {
    setLoading(true);
    setError('');

    try {
      const base = process.env.NEXT_PUBLIC_STRAPI_URL
        ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
        : 'https://optimistic-friends-ed5888f6c2.strapiapp.com';

      // Fetch Visitor Logs
      const visitRes = await fetch(
        `${base}/api/visitor-logs?sort=visitedAt:desc&pagination[pageSize]=150`,
        { cache: 'no-store' }
      );
      const visitData = await visitRes.json();
      const visitList = visitData.data || [];

      // Fetch Submissions
      const subRes = await fetch(
        `${base}/api/submissions?sort=createdAt:desc&pagination[pageSize]=100`,
        { cache: 'no-store' }
      );
      const subData = await subRes.json();
      const subList = subData.data || [];

      // Calculate today's visits
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const todayCount = visitList.filter((v) => {
        const attr = v.attributes || v;
        const date = new Date(v.attributes?.createdAt || v.createdAt);
        return date >= today;
      }).length;

      setVisits(visitList);
      setSubmissions(subList);
      setStats({
        totalVisits: visitData.meta?.pagination?.total || visitList.length,
        totalSubmissions: subData.meta?.pagination?.total || subList.length,
        todayVisits: todayCount,
      });
    } catch (err) {
      console.error(err);
      setError('Failed to load data. Please check if Strapi is running.');
    } finally {
      setLoading(false);
    }
  };

  // ========== LOGIN SCREEN ==========
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-red-700 text-center mb-2">
            EIE Admin Dashboard
          </h1>
          <p className="text-center text-gray-500 mb-8">Authorized personnel only</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 focus:border-red-600 outline-none"
                placeholder="Enter Admin Password"
                required
              />
            </div>

            {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ========== DASHBOARD ==========
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-700 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">EIE Instruments – Admin</h1>
          <p className="text-sm text-red-100">Visitor & Inquiry Dashboard</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={fetchAllData}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="bg-white text-red-700 px-5 py-2 rounded-lg font-semibold hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'visits', label: 'Visitors' },
            { id: 'inquiries', label: 'Inquiries / Forms' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-20 text-xl text-gray-500">
            Loading data...
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {/* Overview Tab */}
        {!loading && activeTab === 'overview' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-8 text-center border-t-4 border-red-600">
              <p className="text-5xl font-bold text-red-600">{stats.totalVisits}</p>
              <p className="text-gray-600 mt-2 font-medium">Total Visitors</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 text-center border-t-4 border-blue-600">
              <p className="text-5xl font-bold text-blue-600">{stats.todayVisits}</p>
              <p className="text-gray-600 mt-2 font-medium">Today's Visitors</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 text-center border-t-4 border-green-600">
              <p className="text-5xl font-bold text-green-600">{stats.totalSubmissions}</p>
              <p className="text-gray-600 mt-2 font-medium">Total Form Submissions</p>
            </div>
          </div>
        )}

        {/* Visits Tab */}
        {!loading && activeTab === 'visits' && (
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-red-50 text-gray-700">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Time</th>
                    <th className="px-5 py-4 font-semibold">City / Country</th>
                    <th className="px-5 py-4 font-semibold">Page</th>
                    <th className="px-5 py-4 font-semibold">Referrer</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-5 py-10 text-center text-gray-500">
                        No visits yet
                      </td>
                    </tr>
                  ) : (
                    visits.map((v, i) => {
                      const a = v.attributes || v;
                      return (
                        <tr key={i} className="border-t hover:bg-gray-50">
                          <td className="px-5 py-3 whitespace-nowrap">
                            {new Date(a.visitedAt || a.createdAt).toLocaleString('en-IN', {
                              timeZone: 'Asia/Kolkata',
                            })}
                          </td>
                          <td className="px-5 py-3">
                            {a.city || '—'}, {a.country || '—'}
                          </td>
                          <td className="px-5 py-3 font-mono text-xs max-w-xs truncate">
                            {a.page || '—'}
                          </td>
                          <td className="px-5 py-3 text-xs max-w-xs truncate">
                            {a.referrer || 'Direct'}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Inquiries Tab */}
        {!loading && activeTab === 'inquiries' && (
          <div className="space-y-5">
            {submissions.length === 0 ? (
              <div className="bg-white rounded-2xl shadow p-12 text-center text-gray-500">
                No form submissions yet
              </div>
            ) : (
              submissions.map((s, i) => {
                const a = s.attributes || s;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow border-l-4 border-red-600 p-6"
                  >
                    <div className="flex flex-wrap justify-between gap-3 mb-3">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold uppercase">
                        {a.type || 'unknown'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(a.createdAt).toLocaleString('en-IN', {
                          timeZone: 'Asia/Kolkata',
                        })}
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-sm overflow-x-auto">
                      <pre className="whitespace-pre-wrap">
                        {JSON.stringify(a.data || a, null, 2)}
                      </pre>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}