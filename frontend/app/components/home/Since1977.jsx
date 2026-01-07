"use client";
import { motion } from "framer-motion";

export default function Since1977() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-red-700 py-10"
    >
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold tracking-wide">
        Since 1977
      </h2>
    </motion.section>
  );
}
