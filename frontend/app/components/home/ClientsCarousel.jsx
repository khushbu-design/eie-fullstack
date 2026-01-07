"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/clients/client1.png",
  "/clients/client2.png",
  "/clients/client3.png",
  "/clients/client4.png",
  "/clients/client5.png",
  "/clients/client6.png",
  "/clients/client7.png",
  "/clients/client8.png",
  "/clients/client9.png",
  "/clients/client10.png",
  "/clients/client11.png",
  "/clients/client12.png",
];

export default function ClientsCarousel() {
  const sliderRef = useRef(null);

  return (
    <section className="py-24 bg-white px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-red-600 mb-12"
      >
        Our Valuable Clients
      </motion.h2>

      <div className="relative overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex gap-16 w-max"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {[...logos, ...logos].map((src, idx) => (
            <div
              key={idx}
              className="w-40 h-24 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt="client logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/clientele"
          className="bg-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow hover:bg-red-700 transition"
        >
          View Our Clients
        </a>
      </div>
    </section>
  );
}
