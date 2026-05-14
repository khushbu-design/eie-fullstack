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
  {
    id: 6,
    title: "Our Nationwide Service Network",
    bg: "/events/event12.jpeg",      
    isFullImage: true,
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
  const isFullImageSlide = current.isFullImage || current.id === 6;

  return (
    <div className="relative w-full h-[55vh] xs:h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] min-h-[360px] overflow-hidden">
      
      {isFullImageSlide ? (
        <Image
          src={current.bg}
          alt={current.title}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
        />
      ) : (

        <>
          <Image
            src={current.bg}
            alt={`${current.title} background`}
            fill
            priority
            quality={82}
            sizes="100vw"
            className="object-cover brightness-[0.75] transition-all duration-1000 ease-in-out"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

          <div className="relative z-20 h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-6 lg:py-0 max-w-7xl mx-auto">
            
            <motion.div
              key={current.id}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white max-w-md lg:max-w-xl text-center lg:text-left drop-shadow-xl mt-4 lg:mt-0"
            >
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 lg:mb-6">
                {current.title}
              </h2>
              <a
                href={current.link}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition-all hover:scale-105 text-sm sm:text-base lg:text-lg"
              >
                Learn More →
              </a>
            </motion.div>

            <motion.div
              key={current.rightImage}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="mt-6 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto"
            >
              <Image
                src={current.rightImage}
                alt={`${current.title} product`}
                width={600}
                height={600}
                quality={85}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                className="object-contain drop-shadow-2xl max-h-[40vh] xs:max-h-[45vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[75vh] xl:max-h-[85vh]"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
                loading="lazy"
              />
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}