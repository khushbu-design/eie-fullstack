"use client";
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        e.target.closest('.dropdown-container') ||
        e.target.closest('.mobile-menu-btn') ||
        e.target.closest('.mobile-menu')
      ) {
        return;
      }
      setOpenDropdown(null);
      setIsMobileMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInputRef.current?.value?.trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      searchInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* ==================== TOP BAR ==================== */}
      <div className="bg-red-700 text-white flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:px-6 gap-4 text-sm">
        
        {/* Phone Numbers */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <a href="tel:07966211234" className="flex items-center gap-2 hover:underline">
            📞 <strong>Domestic:</strong> 079-66211234
          </a>
          <a href="tel:+917966211234" className="flex items-center gap-2 hover:underline">
            🌍 <strong>International:</strong> +91 7966211234
          </a>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="relative w-full sm:w-80 max-w-md">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search products, variants, accessories..."
            className="w-full px-4 py-2 pr-10 text-black placeholder-gray-300 bg-white border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 text-sm"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-600">
            🔍
          </button>
        </form>

        {/* Email */}
        <a href="mailto:info@eieinstruments.com" className="flex items-center gap-1.5 hover:underline">
          ✉ info@eieinstruments.com
        </a>
      </div>

      {/* ==================== MAIN NAVBAR ==================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <img src="/logo.png" alt="EIE Instruments" className="h-10 sm:h-12 cursor-pointer" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-gray-800">
            <li className="relative dropdown-container">
              <div className="flex items-center gap-1">
                <Link href="/" className="py-2 hover:text-red-600 transition">Home</Link>
                <button onClick={(e) => toggleDropdown("home", e)} className="p-2 hover:text-red-600 transition">▼</button>
              </div>
              {openDropdown === "home" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full bg-white shadow-xl py-3 px-5 rounded-lg z-50 min-w-48 mt-1 border border-gray-200">
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/home/quality-policy" className="hover:text-red-600 block py-1.5 px-2 hover:bg-gray-50 rounded">Quality Policy</Link></li>
                    <li><Link href="/home/certificates" className="hover:text-red-600 block py-1.5 px-2 hover:bg-gray-50 rounded">Certificates</Link></li>
                  </ul>
                </motion.div>
              )}
            </li>

            <li><Link href="/about" className="py-2 hover:text-red-600 transition">About Us</Link></li>
            <li><Link href="/products" className="py-2 hover:text-red-600 transition">Products</Link></li>

            <li className="relative dropdown-container">
              <div className="flex items-center gap-1">
                <span className="py-2 hover:text-red-600 transition cursor-pointer">Services</span>
                <button onClick={(e) => toggleDropdown("services", e)} className="p-2 hover:text-red-600 transition">▼</button>
              </div>
              {openDropdown === "services" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full bg-white shadow-xl py-3 px-5 rounded-lg z-50 min-w-64 mt-1 border border-gray-200">
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/calibration-validation" className="hover:text-red-600 block py-1.5 px-2 hover:bg-gray-50 rounded">Calibration & Validation</Link></li>
                    <li><Link href="/services/manufacturing" className="hover:text-red-600 block py-1.5 px-2 hover:bg-gray-50 rounded">Manufacturing Facilities</Link></li>
                    <li><Link href="/services/complaints" className="hover:text-red-600 block py-1.5 px-2 hover:bg-gray-50 rounded">Complaints</Link></li>
                    <li><Link href="/services/remarks" className="hover:text-red-600 block py-1.5 px-2 hover:bg-gray-50 rounded">Remarks</Link></li>
                  </ul>
                </motion.div>
              )}
            </li>

            <li><Link href="/clientele" className="py-2 hover:text-red-600 transition">Clientele</Link></li>
            <li><Link href="/events" className="py-2 hover:text-red-600 transition">Events</Link></li>
            <li><Link href="/contact" className="py-2 hover:text-red-600 transition">Contact</Link></li>
            <li><Link href="/jobs" className="py-2 hover:text-red-600 transition">Jobs</Link></li>
            <li><Link href="/videos" className="py-2 hover:text-red-600 transition">Videos</Link></li>
            <li><Link href="/downloads" className="py-2 hover:text-red-600 transition">Downloads</Link></li>
          </ul>

          <button className="lg:hidden text-3xl text-gray-700 focus:outline-none mobile-menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setOpenDropdown(null);
            }}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ==================== MOBILE MENU ==================== */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-lg border-t mobile-menu overflow-hidden"
        >
          <ul className="flex flex-col px-4 py-3 font-medium text-gray-800">
            <li>
              <button onClick={(e) => toggleDropdown("home", e)} className="flex justify-between items-center w-full py-3.5 hover:text-red-600 transition">
                Home
                <span className="text-lg">{openDropdown === "home" ? "▲" : "▼"}</span>
              </button>
              {openDropdown === "home" && (
                <div className="pl-6 pb-3 space-y-3 text-sm">
                  <Link href="/home/quality-policy" className="block hover:text-red-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Quality Policy</Link>
                  <Link href="/home/certificates" className="block hover:text-red-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Certificates</Link>
                </div>
              )}
            </li>

            <li><Link href="/about" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/products" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>

            <li>
              <button onClick={(e) => toggleDropdown("services", e)} className="flex justify-between items-center w-full py-3.5 hover:text-red-600 transition">
                Services
                <span className="text-lg">{openDropdown === "services" ? "▲" : "▼"}</span>
              </button>
              {openDropdown === "services" && (
                <div className="pl-6 pb-3 space-y-3 text-sm">
                  <Link href="/services/calibration-validation" className="block hover:text-red-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Calibration & Validation</Link>
                  <Link href="/services/manufacturing" className="block hover:text-red-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Manufacturing Facilities</Link>
                  <Link href="/services/complaints" className="block hover:text-red-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Complaints</Link>
                  <Link href="/services/remarks" className="block hover:text-red-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Remarks</Link>
                </div>
              )}
            </li>

            <li><Link href="/clientele" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Clientele</Link></li>
            <li><Link href="/events" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Events</Link></li>
            <li><Link href="/contact" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/jobs" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Jobs</Link></li>
            <li><Link href="/videos" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Videos</Link></li>
            <li><Link href="/downloads" className="block py-3.5 hover:text-red-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Downloads</Link></li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}