"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Civil Engineering Testing Instruments",
    description: "High-precision equipment for soil, cement, concrete, and asphalt testing",
    link: "/products/civil-engineering-testing-instruments",
    bg: "/banners/banner1.png",
    rightImage: "/banners/civil-img.png",
    duration: 5000,
  },
  {
    id: 2,
    title: "Tiles & Ceramics Testing Instruments",
    description: "Advanced testing solutions for tiles, ceramics, and building materials",
    link: "/products/tiles-and-ceramics-testing-instruments",
    bg: "/banners/banner2.png",
    rightImage: "/banners/Tiles-and-Ceramic.png",
    duration: 5000,
  },
  {
    id: 3,
    title: "Pharmaceutical & Microbiology Testing Instruments",
    description: "Reliable equipment for pharma and microbiology laboratories",
    link: "/products/pharmaceutical-and-microbiology-testing-instruments",
    bg: "/banners/banner3.png",
    rightImage: "/banners/Pharma-img.png",
    duration: 5000,
  },
  {
    id: 4,
    title: "Petroleum & Grease Products Testing Instruments",
    description: "Precision instruments for petroleum, oil and grease testing",
    link: "/products/petroleum-and-grease-products-testing-instruments",
    bg: "/banners/banner4.png",
    rightImage: "/banners/Petroleum-img.png",
    duration: 5000,
  },
  {
    id: 5,
    title: "Paper & Packaging Testing Instruments",
    description: "Comprehensive testing solutions for paper and packaging industry",
    link: "/products/paper-and-packaging-testing-instruments",
    bg: "/banners/banner5.png",
    rightImage: "/banners/Paper-Packaging-img.png",
    duration: 5000,
  },
  {
    id: 6,
    title: "Why Choose EIE Instruments?",
    isCompanyHighlights: true,
    bg: "/images/manufacture-1.jpg",
    duration: 8000,
  },
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const currentDuration = slides[index].duration || 5000;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, currentDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index]);

  const current = slides[index];
  const isCompanyHighlights = current.isCompanyHighlights;

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative w-full h-[65vh] xs:h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh] min-h-[580px] overflow-hidden group"
      aria-labelledby="banner-title"
    >
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-xl sm:text-3xl transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110"
      >
        ←
      </button>

      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-xl sm:text-3xl transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110"
      >
        →
      </button>

      {isCompanyHighlights ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={current.bg}
            alt="EIE Instruments manufacturing strength and company highlights"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover brightness-[0.9]"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40" />

          <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-6 sm:py-10">
            <div className="w-full text-white bg-black/30 backdrop-blur-[2px] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <h2 
                id="banner-title"
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                Why Choose EIE Instruments?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 sm:gap-y-6 md:gap-y-7 text-sm md:text-base font-medium leading-relaxed max-h-[360px] sm:max-h-none overflow-y-auto sm:overflow-visible pr-2 sm:pr-0">
                {[
                  "ISO 9001:2015 Certified Company",
                  "Serving Industry as OEM since 1977 (49+ Years)",
                  "4000+ Products manufactured under one roof",
                  "NABL Accredited Laboratory",
                  "11,000 sq. yard manufacturing facility",
                  "350+ skilled professionals",
                  "CE Marking on key equipment",
                  "Exporting to 50+ countries",
                  "Pan-India service network",
                  "ISI licence in key products",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-4 bg-black/20 p-3 rounded-xl sm:bg-transparent sm:p-0"
                  >
                    <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <p className="flex-1 text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6 sm:mt-8 md:mt-10">
                <a
                  href="/about"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg transition-all hover:scale-105 shadow-xl"
                >
                  Know More About Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Image
            src={current.bg}
            alt={`${current.title} - Laboratory Testing Equipment`}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover brightness-[0.75]"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/50 sm:to-transparent z-10" />

          <div className="relative z-20 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-8 lg:px-16 py-6 lg:py-0 max-w-7xl mx-auto gap-6 sm:gap-0">
            <motion.div
              key={current.id}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white max-w-md lg:max-w-xl text-center lg:text-left drop-shadow-xl z-20"
            >
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 lg:mb-6">
                {current.title}
              </h2>
              {current.description && (
                <p className="text-lg sm:text-xl mb-6 opacity-90">
                  {current.description}
                </p>
              )}
              <a
                href={current.link}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition-all hover:scale-105 text-sm sm:text-base lg:text-lg"
              >
                Explore Products →
              </a>
            </motion.div>

            <motion.div
              key={current.rightImage}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="mt-6 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto z-10"
            >
              <Image
                src={current.rightImage}
                alt={`${current.title} testing equipment`}
                width={600}
                height={600}
                quality={85}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                className="object-contain drop-shadow-2xl max-h-[38vh] xs:max-h-[48vh] sm:max-h-[55vh] md:max-h-[65vh] lg:max-h-[75vh] xl:max-h-[85vh]"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
              />
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}