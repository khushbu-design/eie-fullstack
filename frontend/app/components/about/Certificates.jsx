"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    src: "/certificates/Certificate of Incorporation.png",
    name: "Certificate of Incorporation",
  },
  {
    src: "/certificates/ISO.png",
    name: "ISO 9001:2015 Certification",
  },
  {
    src: "/certificates/CE Certificate of CTM.png",
    name: "CE Certificate of CTM",
  },
  {
    src: "/certificates/hot-air-oven.jpg",
    name: "CE Certificate of Hot Air Oven",
  },
  {
    src: "/certificates/humidity-chamber.jpg",
    name: "CE Certificate of Humidity Chamber",
  },
  {
    src: "/certificates/CE Certificate.png",
    name: "CE Certificate",
  },
  {
    src: "/certificates/gst.jpg",
    name: "GST Registration Certificate",
  },
];

export default function Certificates() {
  return (
    <section className="px-8 sm:px-12 md:px-20 py-16 md:py-20 bg-gray-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10 md:mb-14 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Certificates
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <motion.a
              href={cert.src}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={cert.src}
                  alt={cert.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.a>

            {/* Certificate Name Below */}
            <div className="p-4 text-center border-t border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-red-700 group-hover:text-red-800 transition-colors">
                {cert.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}