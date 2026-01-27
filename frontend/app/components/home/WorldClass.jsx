"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorldClass() {
  const images = [
    "/images/world-class-1.png",
    "/images/world-class-2.png",
    "/images/world-class-3.png",
    "/images/world-class-4.png",
    "/images/world-class.png",
    "/images/lab-equipment-5.png",
    "/images/world-class-1.png",
    "/images/world-class-1.png",
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-6 leading-tight">
            World-Class Laboratory Testing Equipment
          </h2>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8 px-4">
            "Established in 1977, EIE Instruments designs, develops and manufactures a comprehensive range of laboratory testing products catering to various engineering and academic sectors, such as Material (Soil, Cement, Asphalt) Testing Laboratories, POY Industries, Textiles Industries, Tiles-Ceramic Industries, Cement & Concrete Industries, Healthcare Industries, Pharmaceutical & Microbiology laboratories, Hospital and Medical Colleges, Universities & research institutes."
          </p>

          <a
            href="/about"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-red-700 transition-all hover:scale-105 text-lg"
          >
            More Details →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-gradient-to-r from-red-700 via-red-800 to-red-700 text-white px-8 sm:px-12 py-6 sm:py-8 rounded-3xl shadow-2xl border-4 border-white/40 transform hover:scale-[1.02] transition-all duration-300">
            <span className="text-3xl sm:text-4xl font-bold tracking-wide">Since</span>
            <span className="text-6xl sm:text-7xl font-extrabold bg-white text-red-700 px-6 py-3 rounded-2xl shadow-inner border-2 border-red-600">
              1977
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
            </span>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 10, 
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px] flex-shrink-0"
                whileHover={{ scale: 1.08, transition: { duration: 0.4 } }}
              >
                <Image
                  src={src}
                  alt={`Laboratory Equipment ${idx + 1}`}
                  width={480}
                  height={360}
                  className="rounded-2xl shadow-lg object-cover w-full h-auto aspect-[4/3] border-2 border-white/60 hover:border-red-300 transition-colors"
                  loading={idx < 6 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}