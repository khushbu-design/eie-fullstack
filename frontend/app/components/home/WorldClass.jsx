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
];

const duplicated = [...facilities, ...facilities];

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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition"
        >
          ✕
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl backdrop-blur-sm transition"
        >
          ←
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl backdrop-blur-sm transition"
        >
          →
        </button>

        <Image
          src={src}
          alt="EIE Instruments Manufacturing Facility"
          fill
          quality={85}
          className="object-contain p-4 md:p-8"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
}

export default function WorldClass() {
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
    <section className="relative py-16 md:py-20 bg-white px-5 sm:px-10 lg:px-16 overflow-hidden" aria-labelledby="worldclass-heading">

      <motion.h2
        id="worldclass-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-600 mb-5"
      >
        World-Class Laboratory Testing Equipment
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-gray-700 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto mb-6 px-4"
      >
        Established in 1977, EIE Instruments designs, develops and manufactures a comprehensive range of laboratory testing products catering to various engineering and academic sectors, such as Material (Soil, Cement, Asphalt) Testing Laboratories, POY Industries, Textiles Industries, Tiles-Ceramic Industries, Cement & Concrete Industries, Healthcare Industries, Pharmaceutical & Microbiology laboratories, Hospital and Medical Colleges, Universities & research institutes.
      </motion.p>

      <div className="text-center mb-10">
        <motion.a
          href="/about"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="inline-block bg-red-600 text-white px-7 sm:px-9 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:bg-red-700 transition-all hover:scale-105 text-base sm:text-lg"
        >
          More Details →
        </motion.a>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: true }}
        className="flex justify-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-3 sm:gap-4 bg-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-2xl border-4 border-white">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">Since</span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-white text-red-600 px-5 sm:px-6 py-1.5 sm:py-2 rounded-xl shadow-inner border-2 border-red-600">
            1977
          </span>
        </div>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicated.map((src, idx) => (
            <motion.div
              key={idx}
              className="w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(idx % facilities.length)}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-red-400 transition-all duration-300">
                <Image
                  src={src}
                  alt={`EIE Instruments Manufacturing Facility ${idx + 1}`}
                  width={500}
                  height={320}
                  quality={78}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
                  className="w-full h-auto object-cover aspect-[5/3]"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
                  loading={idx < 6 ? "eager" : "lazy"}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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