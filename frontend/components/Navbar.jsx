'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Navbar() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value.trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full">

      <div className="bg-red-700 text-white flex flex-col sm:flex-row justify-between items-center px-6 py-3 gap-4">

        <span className="text-sm font-medium">📞 +91-079-66211234</span>

        <form onSubmit={handleSearch} className="relative w-full sm:w-1/3 max-w-md">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search products, variants, accessories, spares..."
            className="
              w-full 
              px-5 py-2.5 
              pr-12 
              text-black 
              placeholder-gray-500 
              bg-white 
              border 
              border-white 
              rounded-full 
              focus:outline-none 
              focus:ring-4 
              focus:ring-red-300
            "
          />

          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            🔍
          </button>
        </form>

        <span className="text-sm font-medium">✉ info@eieinstruments.com</span>
      </div>

      <div className="bg-white shadow-md flex flex-col lg:flex-row items-center justify-between px-6 py-4">

        <div className="mb-4 lg:mb-0">
          <img src="/logo.png" alt="EIE Instruments" className="h-12" />
        </div>

        <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-medium text-gray-700">

          <li className="relative group cursor-pointer hover:text-red-600 transition">
            Home
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg py-4 px-6 rounded-lg z-50 min-w-48 mt-2">
              <ul className="space-y-3">
                <li className="hover:text-red-600 transition" href="/home/quality-policy">Quality Policy</li>
                <li className="hover:text-red-600 transition" href="/home/certificates">Certificates</li>
              </ul>
            </div>
          </li>

          <li className="hover:text-red-600 cursor-pointer transition">About Us</li>
          <li className="hover:text-red-600 cursor-pointer transition">Products</li>

          <li className="relative group cursor-pointer hover:text-red-600 transition">
            Services
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg py-4 px-6 rounded-lg z-50 min-w-64 mt-2">
              <ul className="space-y-3">
                <li className="hover:text-red-600 transition">Calibration & Validation Service</li>
                <li className="hover:text-red-600 transition">Manufacturing Facilities</li>
                <li className="hover:text-red-600 transition">Complaints</li>
                <li className="hover:text-red-600 transition">Remarks</li>
              </ul>
            </div>
          </li>

          <li className="hover:text-red-600 cursor-pointer transition">Clientele</li>
          <li className="hover:text-red-600 cursor-pointer transition">Events</li>
          <li className="hover:text-red-600 cursor-pointer transition">Contact</li>
          <li className="hover:text-red-600 cursor-pointer transition">Job Opening</li>
          <li className="hover:text-red-600 cursor-pointer transition">Videos</li>
          <li className="hover:text-red-600 cursor-pointer transition">Downloads</li>
        </ul>
      </div>
    </div>
  );
}