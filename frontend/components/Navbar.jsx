"use client";
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  // Dropdown state
  const [openDropdown, setOpenDropdown] = useState(null); // null = closed, "home" or "services" = open

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value.trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-red-700 text-white flex flex-col sm:flex-row justify-between items-center px-6 py-3 gap-4">
        <a href="tel:7966211234" className="text-sm font-medium hover:underline flex items-center gap-1">
          📞 079-66211234
        </a>

        <form onSubmit={handleSearch} className="relative w-full sm:w-1/3 max-w-md">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search products, variants, accessories, spares..."
            className="w-full px-5 py-2.5 pr-12 text-black placeholder-gray-500 bg-white border border-white rounded-full focus:outline-none focus:ring-4 focus:ring-red-300"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            🔍
          </button>
        </form>

        <a href="mailto:info@eieinstruments.com" className="text-sm font-medium hover:underline flex items-center gap-1">
          ✉ info@eieinstruments.com
        </a>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md flex flex-col lg:flex-row items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="mb-4 lg:mb-0">
          <Link href="/">
            <img src="/logo.png" alt="EIE Instruments" className="h-12 cursor-pointer" />
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-medium text-gray-700">
          {/* Home with dropdown */}
          <li className="relative dropdown-container">
            <div className="flex items-center gap-1">
              <Link href="/" className="block py-2 hover:text-red-600 transition">
                Home
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation(); // prevent Link navigation
                  toggleDropdown("home");
                }}
                className="py-2 px-1 hover:text-red-600 transition"
              >
                ▼
              </button>
            </div>

            {openDropdown === "home" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full bg-white shadow-lg py-4 px-6 rounded-lg z-50 min-w-48 mt-2"
              >
                <ul className="space-y-3">
                  <li>
                    <Link href="/home/quality-policy" className="hover:text-red-600 transition block" onClick={() => setOpenDropdown(null)}>
                      Quality Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/home/certificates" className="hover:text-red-600 transition block" onClick={() => setOpenDropdown(null)}>
                      Certificates
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </li>

          {/* About Us */}
          <li className="hover:text-red-600 transition">
            <Link href="/about" className="block py-2">About Us</Link>
          </li>

          {/* Products */}
          <li className="hover:text-red-600 transition">
            <Link href="/products" className="block py-2">Products</Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative dropdown-container">
            <div className="flex items-center gap-1">
              <span className="block py-2 hover:text-red-600 transition">Services</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown("services");
                }}
                className="py-2 px-1 hover:text-red-600 transition"
              >
                ▼
              </button>
            </div>

            {openDropdown === "services" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full bg-white shadow-lg py-4 px-6 rounded-lg z-50 min-w-64 mt-2"
              >
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/calibration-validation" className="hover:text-red-600 transition block" onClick={() => setOpenDropdown(null)}>
                      Calibration & Validation Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/manufacturing" className="hover:text-red-600 transition block" onClick={() => setOpenDropdown(null)}>
                      Manufacturing Facilities
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/complaints" className="hover:text-red-600 transition block" onClick={() => setOpenDropdown(null)}>
                      Complaints
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/remarks" className="hover:text-red-600 transition block" onClick={() => setOpenDropdown(null)}>
                      Remarks
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </li>

          {/* Other links */}
          <li className="hover:text-red-600 transition">
            <Link href="/clientele" className="block py-2">Clientele</Link>
          </li>
          <li className="hover:text-red-600 transition">
            <Link href="/events" className="block py-2">Events</Link>
          </li>
          <li className="hover:text-red-600 transition">
            <Link href="/contact" className="block py-2">Contact</Link>
          </li>
          <li className="hover:text-red-600 transition">
            <Link href="/jobs" className="block py-2">Job Opening</Link>
          </li>
          <li className="hover:text-red-600 transition">
            <Link href="/videos" className="block py-2">Videos</Link>
          </li>
          <li className="hover:text-red-600 transition">
            <Link href="/downloads" className="block py-2">Downloads</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}