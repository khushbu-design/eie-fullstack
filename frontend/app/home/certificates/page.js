"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import ImageModal from "@/app/components/ImageModal";

export default function CertificatesPage() {
  const [modalImg, setModalImg] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
    
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      setError(null);
      const res = await fetch(
        "http://localhost:1337/api/certificates?populate=image&sort=order:asc",
        {
          cache: "no-store",
          next: { revalidate: 0 },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      const json = await res.json();

      // Group certificates by category
      const grouped = json.data.reduce((acc, item) => {
        const cat = item.category || "Other";
        if (!acc[cat]) acc[cat] = [];

        acc[cat].push({
          label: item.label,
          img: item.image?.url 
            ? `http://localhost:1337${item.image.url}` 
            : "/placeholder.jpg",
        });
        return acc;
      }, {});

      // Convert to array format
      const formattedCategories = Object.entries(grouped).map(([title, items]) => ({
        title,
        items: items.sort((a, b) => a.label.localeCompare(b.label)), // Alphabetical order
      }));

      setCategories(formattedCategories);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Strapi server sathe connect nathi thayu. Strapi running che ke nahi check karo.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <p className="text-xl text-gray-600">Loading Certificates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-32">
        <p className="text-red-600 text-lg">{error}</p>
        <button 
          onClick={fetchCertificates}
          className="mt-4 px-6 py-3 bg-[#800000] text-white rounded-lg hover:bg-[#600000]"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 space-y-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#800000] tracking-wide mb-10">
        Certificates
      </h1>

      {categories.length === 0 && (
        <p className="text-center text-gray-500 text-xl py-10">
          No certificates found. Strapi ma data add karo.
        </p>
      )}

      {categories.map((cat, i) => (
        <div key={i}>
          <h2
            className="text-2xl font-semibold text-center mb-8 text-[#800000] tracking-wide"
            data-aos="fade-down"
          >
            {cat.title}
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {cat.items.map((item, index) => (
              <li
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 60}
                className="cursor-pointer group"
                onClick={() => setModalImg(item.img)}
              >
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-56 flex items-center justify-center bg-white p-4">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="text-center bg-gray-50 py-3 text-[#800000] font-medium group-hover:underline">
                    {item.label}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <ImageModal imgSrc={modalImg} onClose={() => setModalImg(null)} />
    </div>
  );
}