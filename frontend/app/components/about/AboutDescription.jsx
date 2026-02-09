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
        className="relative w-[90vw] h-[90vh] md:w-[85vw] md:h-[85vh] lg:w-[80vw] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg transition"
          aria-label="Close"
        >
          ✕
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl backdrop-blur-sm transition"
          aria-label="Previous"
        >
          ←
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl backdrop-blur-sm transition"
          aria-label="Next"
        >
          →
        </button>

        <Image
          src={src}
          alt="Full facility view"
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

export default function AboutDescription() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

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
    <section className="px-10 md:px-20 py-16">
      <motion.h2
        className="text-4xl font-bold text-center text-red-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About EIE Instruments
      </motion.h2>

      <motion.p
        className="text-gray-700 text-lg leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Its late founder Mr. Vimal C. Parikh sowed the seed of presently known EIE Instruments way back in 1977. The seed has now grown to a large tree, which gives shelter and meaning of life to Hundreds of people associated with it. The present directors, staff members and all concerned will remain permanently indebted to him for this courage, support and guiding principles.
      </motion.p>

      <motion.p
        className="text-gray-700 text-lg leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We started modestly as a marketing organization and later entered the ever-challenging field of manufacturing. The rich, hard-earned experience as a marketing organization and close interaction with the end users, paved the way for a customer driven, customer focused and customer oriented company.
      </motion.p>

      <motion.p
        className="text-gray-700 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        The Group has interest in manufacturing, marketing and Calibration of Scientific Instruments and Testing Equipment's for various applications. Professional marketing set up, strong commitment to after sales support, With experience of over 40+ years and Strong team of over 250+ professionals, in understanding and meeting our customer's requirements and sustained emphasis on customer satisfaction, has built a loyal base of customers in different segments of industry, Research and Education field throughout the country.
      </motion.p>

      {/* Glimpses Carousel - Added below original text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-8">
          Glimpses of Our Manufacturing Facilities
        </h3>

        <div
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicated.map((src, idx) => (
              <motion.div
                key={idx}
                className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] flex-shrink-0 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(idx % facilities.length)}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-red-500 transition-all duration-300">
                  <Image
                    src={src}
                    alt={`Manufacturing facility ${idx + 1}`}
                    width={500}
                    height={320}
                    quality={80}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
                    loading={idx < 8 ? "eager" : "lazy"}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          Hover or tap to pause scrolling
        </div>
      </motion.div>

      {/* Modal */}
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