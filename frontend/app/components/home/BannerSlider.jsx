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
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] min-h-[500px] overflow-hidden">
      <Image
        src={current.bg}
        alt="Banner background"
        fill
        priority
        quality={90}
        className="object-cover brightness-[0.8] transition-all duration-1000 ease-in-out"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent" />

      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-10 lg:py-0 max-w-7xl mx-auto">
        <motion.div
          key={current.id}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white max-w-xl text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            {current.title}
          </h2>
          <a
            href={current.link}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 text-lg"
          >
            Learn More →
          </a>
        </motion.div>

        <motion.div
          key={current.rightImage}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-8 lg:mt-0 flex justify-center lg:justify-end"
        >
          <Image
            src={current.rightImage}
            alt="Product"
            width={700}
            height={700}
            quality={95}
            priority
            className="object-contain drop-shadow-2xl max-h-[60vh] lg:max-h-[80vh]"
          />
        </motion.div>
      </div>
    </div>
  );
}