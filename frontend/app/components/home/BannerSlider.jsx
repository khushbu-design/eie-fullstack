"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Civil Engineering Testing Instruments",
    link: "/products/civil-engineering-testing-instruments",
    bg: "/banners/banner1.png",
    rightImage: "/banners/civil-img.png",
  },
  {
    id: 2,
    title: "Tiles & Ceramics Testing Instruments",
    link: "/products/tiles-and-ceramics-testing-instruments",
    bg: "/banners/banner2.png",
    rightImage: "/banners/Tiles-and-Ceramic.png",
  },
  {
    id: 3,
    title: "Pharmaceutical & Microbiology Testing Instruments",
    link: "/products/pharmaceutical-and-microbiology-testing-instruments",
    bg: "/banners/banner3.png",
    rightImage: "/banners/Pharma-img.png",
  },
  {
    id: 4,
    title: "Petroleum & Grease Products Testing Instruments",
    link: "/products/petroleum-and-grease-products-testing-instruments",
    bg: "/banners/banner4.png",
    rightImage: "/banners/Petroleum-img.png",
  },
  {
    id: 5,
    title: "Paper & Packaging Testing Instruments",
    link: "/products/paper-and-packaging-testing-instruments",
    bg: "/banners/banner5.png",
    rightImage: "/banners/Paper-Packaging-img.png",
  },
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className="relative w-full h-[500px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl shadow-xl">
      {/* Background Image */}
      <Image
        src={current.bg}
        alt="Banner"
        fill
        className="object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
        {/* LEFT TEXT */}
        <motion.div
          key={current.id}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-white max-w-full md:max-w-lg mb-6 md:mb-0 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{current.title}</h2>

          <a
            href={current.link}
            className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow"
          >
            Learn More
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={current.rightImage}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[350px] flex justify-center"
        >
          <Image
            src={current.rightImage}
            alt="Slide"
            width={350}
            height={350}
            className="drop-shadow-2xl object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
