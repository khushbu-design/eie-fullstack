"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import ImageModal from "@/app/components/ImageModal";

export default function CertificatesPage() {
  const [modalImg, setModalImg] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStrapiBaseUrl = () => {
    let url = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
    url = url.replace(/\/+$/, '');
    if (url.endsWith('/api')) url = url.slice(0, -4);
    return url;
  };

  const STRAPI_BASE_URL = getStrapiBaseUrl();

  console.log("Strapi Base URL:", STRAPI_BASE_URL);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      setError(null);
      setLoading(true);

      const url = `${STRAPI_BASE_URL}/api/certificates?populate=image&sort=createdAt:asc`;
      console.log("Fetching from:", url);

      const res = await fetch(url, { cache: "no-store" });

      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

      const json = await res.json();
      console.log("✅ Strapi Response:", json);

      if (!json.data?.length) {
        setCategories([]);
        return;
      }

      const grouped = json.data.reduce((acc, item) => {
        const cat = item.category || "Other";
        if (!acc[cat]) acc[cat] = [];

        let imageUrl = "/placeholder.jpg";

        if (item.image?.url) {
          imageUrl = item.image.url.startsWith('http') 
            ? item.image.url 
            : `${STRAPI_BASE_URL}${item.image.url.startsWith('/') ? '' : '/'}${item.image.url}`;
        }

        acc[cat].push({
          label: item.label,
          img: imageUrl,
          createdAt: item.createdAt,
        });
        return acc;
      }, {});

      const formattedCategories = Object.entries(grouped)
        .map(([title, items]) => ({
          title,
          items: items

            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        }))

        .sort((a, b) => {
          const firstA = a.items[0]?.createdAt || '';
          const firstB = b.items[0]?.createdAt || '';
          return new Date(firstA) - new Date(firstB);
        });

      setCategories(formattedCategories);
    } catch (err) {
      console.error("Full Error:", err);
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="flex justify-center items-center py-32"><p>Loading Certificates...</p></div>;

  if (error) {
    return (
      <div className="text-center py-32">
        <p className="text-red-600 text-lg mb-4">{error}</p>
        <button onClick={fetchCertificates} className="px-6 py-3 bg-[#800000] text-white rounded-lg">
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
        <p className="text-center text-gray-500 text-xl py-10">No certificates found.</p>
      )}

      {categories.map((cat, i) => (
        <div key={i}>
          <h2 className="text-2xl font-semibold text-center mb-8 text-[#800000] tracking-wide" data-aos="fade-down">
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