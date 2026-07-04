"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    id: 1,
    title: "Civil Engineering Testing Instruments",
    description: "Soil, Cement, Concrete, Asphalt & Aggregate Testing Equipment",
    img: "/industries/civil.png",
    link: "/products/civil-engineering-testing-instruments",
  },
  {
    id: 2,
    title: "Pharmaceutical & Microbiology Testing Instruments",
    description: "Reliable equipment for Pharma, Microbiology & Healthcare labs",
    img: "/industries/pharma.png",
    link: "/products/pharmaceutical-and-microbiology-testing-instruments",
  },
  {
    id: 3,
    title: "Tiles & Ceramics Testing Instruments",
    description: "Precision testing for tiles, ceramics and building materials",
    img: "/industries/tiles.png",
    link: "/products/tiles-and-ceramics-testing-instruments",
  },
  {
    id: 4,
    title: "Petroleum & Grease Products Testing Instruments",
    description: "High accuracy instruments for petroleum, oil & grease testing",
    img: "/industries/petroleum.png",
    link: "/products/petroleum-and-grease-products-testing-instruments",
  },
  {
    id: 5,
    title: "Paper & Packaging Testing Instruments",
    description: "Comprehensive solutions for paper, board and packaging industry",
    img: "/industries/paper.png",
    link: "/products/paper-and-packaging-testing-instruments",
  },
  {
    id: 6,
    title: "Tensile & Elongation Testing Machine",
    description: "Universal Testing Machines for material strength analysis",
    img: "/industries/tensile.png",
    link: "/products/tensile-and-elongation-testing-machine",
  },
];

export default function IndustryServices() {
  return (
    <section className="px-10 md:px-20 py-20" aria-labelledby="industry-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 id="industry-heading" className="text-4xl font-bold text-red-600 mb-4">
          The Best Industry Services
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide high-performance laboratory testing instruments and services 
          across multiple industries including Civil Engineering, Pharmaceutical, 
          Tiles & Ceramics, Petroleum, Paper & Packaging and more.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border group"
          >
            <div className="flex justify-center mb-6">
              <Image
                src={item.img}
                alt={`${item.title} - EIE Instruments`}
                width={120}
                height={120}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              {item.title}
            </h3>

            {item.description && (
              <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            )}

            <div className="text-center">
              <a
                href={item.link}
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition"
              >
                Visit →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}