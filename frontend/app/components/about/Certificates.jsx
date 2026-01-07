"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  "/certificates/ISO.png",
];

export default function Certificates() {
  return (
    <section className="px-10 md:px-20 py-16">
      <motion.h2
        className="text-4xl font-bold text-center text-red-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certificates
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((src, idx) => (
          <motion.a
            key={idx}
            href={src}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Image
              src={src}
              alt={`Certificate ${idx + 1}`}
              width={400}
              height={300}
              className="rounded-xl shadow-md hover:shadow-lg transition"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
