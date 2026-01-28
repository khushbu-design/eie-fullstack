"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const facilities = [
  "/images/manufacture-1.jpg",
  "/images/manufacture-2.jpg",
  "/images/manufacture-3.jpg",
  "/images/manufacture-4.jpg",
  "/images/manufacture-5.jpg",
  "/images/manufacture-6.jpg",
  "/images/manufacture-7.jpg",
  "/images/manufacture-8.jpg",
  "/images/manufacture-9.jpg",
  "/images/manufacture-10.jpg",
  "/images/manufacture-11.jpg",
  "/images/manufacture-12.jpg",
  "/images/manufacture-13.jpg",
  "/images/manufacture-14.jpg",
  "/images/manufacture-15.jpg",
  "/images/manufacture-16.jpg",
];

const duplicated = [...facilities, ...facilities, ...facilities];

function ImageModal({ src, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] h-[90vh] md:w-[85vw] md:h-[85vh] lg:w-[80vw] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition"
        >
          ✕
        </button>

        {/* Previous Arrow */}
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl backdrop-blur-sm transition"
        >
          ←
        </button>

        {/* Next Arrow */}
        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl backdrop-blur-sm transition"
        >
          →
        </button>

        {/* Image */}
        <Image
          src={src}
          alt="Full View"
          fill
          className="object-contain p-4 md:p-8"
          priority
        />
      </div>
    </div>
  );
}

export default function ManufacturingFacilities() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? facilities.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev === facilities.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative py-16 md:py-24 bg-white px-6 md:px-20 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center text-red-600 mb-4"
      >
        World-Class Laboratory Testing Equipment
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto mb-6 px-4"
      >
        "Established in 1977, EIE Instruments designs, develops and manufactures a comprehensive range of laboratory testing products catering to various engineering and academic sectors, such as Material (Soil, Cement, Asphalt) Testing Laboratories, POY Industries, Textiles Industries, Tiles-Ceramic Industries, Cement & Concrete Industries, Healthcare Industries, Pharmaceutical & Microbiology laboratories, Hospital and Medical Colleges, Universities & research institutes."
      </motion.p>

      {/* More Details Button */}
      <div className="text-center mb-8">
        <a
          href="/about" // તારા page પ્રમાણે link બદલી શકે છે
          className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-red-700 transition-all hover:scale-105 text-lg"
        >
          More Details →
        </a>
      </div>

      {/* Since 1977 */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-12 md:mb-16"
      >
        <div className="inline-flex items-center gap-4 bg-red-600 text-white px-10 py-4 rounded-2xl shadow-2xl border-4 border-white">
          <span className="text-2xl md:text-3xl font-bold">Since</span>
          <span className="text-5xl md:text-6xl font-extrabold bg-white text-red-600 px-6 py-2 rounded-xl shadow-inner border-2 border-red-600">
            1977
          </span>
        </div>
      </motion.div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 md:gap-10 lg:gap-12"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 16, // fast scroll (14-18 ની વચ્ચે adjust કરી શકે છે)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicated.map((src, idx) => (
            <motion.div
              key={idx}
              className="w-[280px] md:w-[380px] lg:w-[420px] flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(idx % facilities.length)}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:border-red-400 transition-all duration-300">
                <Image
                  src={src}
                  alt={`Facility ${idx + 1}`}
                  width={500}
                  height={320}
                  className="w-full h-auto object-cover aspect-[5/3]"
                  loading={idx < 8 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 280px, 420px"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full Screen Modal */}
      {selectedIndex !== null && (
        <ImageModal
          src={facilities[selectedIndex]}
          onClose={closeModal}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  );
}