'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, MapPin, Calendar, Search } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [visitorCount, setVisitorCount] = useState(0);
  const [visitorLogs, setVisitorLogs] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (type) => {
    setLoading(true);
    try {
      const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/api\/?$/, '') || 'https://optimistic-friends-ed5888f6c2.strapiapp.com';

      if (type === 'count') {
        const res = await fetch(`${base}/api/visitor-count`);
        const data = await res.json();
        setVisitorCount(data.data?.attributes?.count ?? 0);
      } else if (type === 'logs') {
        const res = await fetch(`${base}/api/visitor-logs?sort=timestamp:desc&pagination[limit]=150`);
        const data = await res.json();
        setVisitorLogs(data.data || []);
      } else if (type === 'inquiries') {
        const res = await fetch(`${base}/api/inquiry?sort=timestamp:desc&pagination[limit]=150`);
        const data = await res.json();
        setInquiries(data.data || []);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('count');
    fetchData('logs');
    fetchData('inquiries');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-red-700">EIE Instruments Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Real-time visitors & inquiries • Fully optimized</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => fetchData('count')} className="px-5 py-2 bg-red-600 text-white rounded-2xl font-medium">Refresh Count</button>
            <button onClick={() => fetchData('logs')} className="px-5 py-2 border border-red-600 text-red-600 rounded-2xl font-medium">Logs</button>
            <button onClick={() => fetchData('inquiries')} className="px-5 py-2 border border-red-600 text-red-600 rounded-2xl font-medium">Inquiries</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-3xl shadow-xl">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Visitors</p>
                <p className="text-5xl font-bold text-red-700 mt-2">{visitorCount}</p>
              </div>
              <Users className="w-12 h-12 text-red-200" />
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-8">
          {['overview', 'visitors', 'inquiries', 'settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 font-semibold transition-all ${activeTab === tab ? 'border-b-4 border-red-600 text-red-600' : 'text-gray-500'}`}
            >
              {tab === 'overview' ? 'Overview' : tab === 'visitors' ? 'Visitors' : tab === 'inquiries' ? 'Inquiries' : 'Settings'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'visitors' && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-6">Page</th>
                  <th className="text-left p-6">IP</th>
                  <th className="text-left p-6">City</th>
                  <th className="text-left p-6">Country</th>
                  <th className="text-left p-6">User Agent</th>
                  <th className="text-left p-6">Time</th>
                </tr>
              </thead>
              <tbody>
                {visitorLogs.map((log, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-6 font-medium">{log.page}</td>
                    <td className="p-6">{log.ip}</td>
                    <td className="p-6">{log.city}</td>
                    <td className="p-6">{log.country}</td>
                    <td className="p-6 text-sm text-gray-600">{log.userAgent}</td>
                    <td className="p-6">{new Date(log.timestamp).toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-6">Name</th>
                  <th className="text-left p-6">Email</th>
                  <th className="text-left p-6">Phone</th>
                  <th className="text-left p-6">Organization</th>
                  <th className="text-left p-6">Product</th>
                  <th className="text-left p-6">Message</th>
                  <th className="text-left p-6">Type</th>
                  <th className="text-left p-6">Source</th>
                  <th className="text-left p-6">Date</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-6">{inq.name}</td>
                    <td className="p-6">{inq.email}</td>
                    <td className="p-6">{inq.phone}</td>
                    <td className="p-6">{inq.organization}</td>
                    <td className="p-6">{inq.product}</td>
                    <td className="p-6 text-sm text-gray-600">{inq.message}</td>
                    <td className="p-6">{inq.type}</td>
                    <td className="p-6">{inq.source}</td>
                    <td className="p-6">{new Date(inq.timestamp).toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'overview' && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">Now everything is fresh & 100% working!</p>
          </div>
        )}
      </div>
    </div>
  );
}