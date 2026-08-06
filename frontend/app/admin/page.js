'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  // Data states
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [visitorLogs, setVisitorLogs] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');

  const correctPassword = 'eie2025admin'; // Change this password

  const getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_STRAPI_URL
      ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, '')
      : 'https://optimistic-friends-ed5888f6c2.strapiapp.com';
  };

  // Fetch all data
  const fetchAllData = async () => {
    setLoading(true);
    setError('');

    try {
      const base = getBaseUrl();

      // 1. Total visitor count (old single type)
      try {
        const countRes = await fetch(`${base}/api/visitor-count`, { cache: 'no-store' });
        if (countRes.ok) {
          const countData = await countRes.json();
          let count = 0;
          if (countData.data?.attributes?.count !== undefined) {
            count = countData.data.attributes.count;
          } else if (countData.data?.count !== undefined) {
            count = countData.data.count;
          }
          setTotalVisitors(count);
        }
      } catch (e) {
        console.log('Count fetch failed');
      }

      // 2. Visitor Logs (latest 50)
      try {
        const logsRes = await fetch(
          `${base}/api/visitor-logs?sort=createdAt:desc&pagination[limit]=50`,
          { cache: 'no-store' }
        );
        if (logsRes.ok) {
          const logsData = await logsRes.json();
          setVisitorLogs(logsData.data || []);
        }
      } catch (e) {
        console.log('Visitor logs fetch failed');
      }

      // 3. Inquiries (latest 50)
      try {
        const inqRes = await fetch(
          `${base}/api/inquiries?sort=createdAt:desc&pagination[limit]=50`,
          { cache: 'no-store' }
        );
        if (inqRes.ok) {
          const inqData = await inqRes.json();
          setInquiries(inqData.data || []);
        }
      } catch (e) {
        console.log('Inquiries fetch failed');
      }

      setLastUpdated(new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
    } catch (err) {
      console.error(err);
      setError('Failed to load data from Strapi');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.trim() === correctPassword) {
      setAuthenticated(true);
      fetchAllData();
    } else {
      setError('Incorrect password!');
    }
  };

  // ==================== LOGIN SCREEN ====================
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-gray-100">
          <h1 className="text-3xl font-bold text-red-700 mb-1">EIE Admin</h1>
          <p className="text-gray-500 mb-8">Dashboard Access</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-left font-medium mb-2 text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:outline-none text-lg"
                required
                autoFocus
                placeholder="Enter admin password"
              />
            </div>

            {error && (
              <p className="text-red-600 font-medium bg-red-50 py-2 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg"
            >
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==================== DASHBOARD ====================
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-red-700">EIE Admin Dashboard</h1>
            <p className="text-sm text-gray-500">Website Analytics & Management</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchAllData}
              disabled={loading}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
            <button
              onClick={() => {
                setAuthenticated(false);
                setPassword('');
              }}
              className="bg-gray-800 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-gray-900 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['overview', 'visitors', 'inquiries', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl font-medium capitalize transition whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ==================== OVERVIEW ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <p className="text-sm font-medium text-gray-500">Total Visitors</p>
                <p className="text-4xl font-bold text-red-600 mt-2">
                  {totalVisitors.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-3">Updated: {lastUpdated || '—'}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <p className="text-sm font-medium text-gray-500">Visitor Logs</p>
                <p className="text-4xl font-bold text-blue-600 mt-2">{visitorLogs.length}</p>
                <p className="text-xs text-gray-400 mt-3">Latest 50 records</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <p className="text-sm font-medium text-gray-500">Total Inquiries</p>
                <p className="text-4xl font-bold text-green-600 mt-2">{inquiries.length}</p>
                <p className="text-xs text-gray-400 mt-3">All types</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <p className="text-sm font-medium text-gray-500">New Inquiries</p>
                <p className="text-4xl font-bold text-orange-600 mt-2">
                  {inquiries.filter((i) => {
                    const status = i.attributes?.update || i.update || i.attributes?.status || i.status;
                    return status === 'New' || !status;
                  }).length}
                </p>
                <p className="text-xs text-gray-400 mt-3">Need attention</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Quick Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://optimistic-friends-ed5888f6c2.strapiapp.com/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white text-center py-3.5 rounded-xl font-medium hover:bg-red-700 transition"
                >
                  Open Strapi Admin
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="bg-gray-800 text-white text-center py-3.5 rounded-xl font-medium hover:bg-gray-900 transition"
                >
                  View Website
                </a>
                <a
                  href="/contact"
                  target="_blank"
                  className="bg-blue-600 text-white text-center py-3.5 rounded-xl font-medium hover:bg-blue-700 transition"
                >
                  Contact Page
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VISITORS TAB ==================== */}
        {activeTab === 'visitors' && (
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Visitor Logs</h2>
                <p className="text-gray-500 text-sm">Latest {visitorLogs.length} visits</p>
              </div>
              <button
                onClick={fetchAllData}
                disabled={loading}
                className="bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-red-700 transition disabled:opacity-50"
              >
                Refresh
              </button>
            </div>

            {visitorLogs.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg">No visitor logs found yet.</p>
                <p className="text-sm mt-2">Visit any page on the website to generate logs.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 font-semibold text-gray-700">Page</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">City</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Country</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">IP</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {visitorLogs.map((log, index) => {
                      const attr = log.attributes || log;
                      return (
                        <tr key={log.id || index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-800">{attr.page || '—'}</td>
                          <td className="px-4 py-3 text-gray-600">{attr.city || '—'}</td>
                          <td className="px-4 py-3 text-gray-600">{attr.country || '—'}</td>
                          <td className="px-4 py-3 text-gray-600">{attr.ip || '—'}</td>
                          <td className="px-4 py-3 text-gray-500">
                            {attr.timestamp
                              ? new Date(attr.timestamp).toLocaleString('en-IN')
                              : attr.createdAt
                              ? new Date(attr.createdAt).toLocaleString('en-IN')
                              : '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ==================== INQUIRIES TAB ==================== */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Inquiries & Requests</h2>
                <p className="text-gray-500 text-sm">Latest {inquiries.length} entries</p>
              </div>
              <button
                onClick={fetchAllData}
                disabled={loading}
                className="bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-red-700 transition disabled:opacity-50"
              >
                Refresh
              </button>
            </div>

            {inquiries.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg">No inquiries found yet.</p>
                <p className="text-sm mt-2">
                  Submit a form on the website (Contact / Inquiry / Job) to see data here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((item, index) => {
                  const attr = item.attributes || item;
                  return (
                    <div
                      key={item.id || index}
                      className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{attr.name || '—'}</h3>
                          <p className="text-sm text-gray-600">{attr.email || '—'}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full">
                            {attr.type || 'Inquiry'}
                          </span>
                          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                            {attr.update || attr.status || 'New'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                        <p><strong>Phone:</strong> {attr.phone || '—'}</p>
                        <p><strong>Organization:</strong> {attr.organization || '—'}</p>
                        <p><strong>Product:</strong> {attr.product || '—'}</p>
                        <p><strong>Source:</strong> {attr.source || '—'}</p>
                      </div>

                      {attr.message && (
                        <p className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          {attr.message}
                        </p>
                      )}

                      <p className="text-xs text-gray-400 mt-3">
                        {attr.createdAt
                          ? new Date(attr.createdAt).toLocaleString('en-IN')
                          : '—'}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ==================== SETTINGS ==================== */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

            <div className="space-y-5">
              <div className="p-5 bg-gray-50 rounded-xl">
                <p className="font-medium text-gray-800 mb-1">Admin Password</p>
                <p className="text-sm text-gray-600">
                  Current: <code className="bg-gray-200 px-2 py-0.5 rounded">eie2025admin</code>
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl">
                <p className="font-medium text-gray-800 mb-1">Strapi Base URL</p>
                <p className="text-sm text-gray-600 break-all">{getBaseUrl()}</p>
              </div>

              <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="font-medium text-blue-800 mb-1">How Tracking Works</p>
                <ul className="text-sm text-blue-900 list-disc list-inside space-y-1 mt-2">
                  <li>Every page visit creates a record in VisitorLog</li>
                  <li>Contact / Inquiry / Job forms save data in Inquiry collection</li>
                  <li>This dashboard reads both collections in real-time</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}