"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorldClass() {
  return (
    <section className="px-10 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/world-class.png"
            alt="World Class Equipment"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-red-600 mb-6 leading-tight">
            World-Class Laboratory Testing Equipment
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We are a leading manufacturer of high-precision laboratory testing 
            instruments, delivering top-quality equipment trusted by industries 
            worldwide. Our innovative engineering and decades of experience ensure 
            accuracy, durability, and excellence in every product we build.
          </p>

          <a
            href="/about"
            className="inline-block bg-red-600 text-white px-7 py-3 rounded-xl font-semibold shadow hover:bg-red-700 transition"
          >
            More Details
          </a>
        </motion.div>

      </div>
    </section>
  );
}
