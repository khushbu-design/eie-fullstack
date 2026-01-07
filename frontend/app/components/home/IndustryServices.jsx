"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    id: 1,
    title: "Civil Engineering Testing Instruments",
    img: "/industries/civil.png",
    link: "/products/civil-engineering-testing-instruments",
  },
  {
    id: 2,
    title: "Pharmaceutical & Microbiology Testing Instruments",
    img: "/industries/pharma.png",
    link: "/products/pharmaceutical-and-microbiology-testing-instruments",
  },
  {
    id: 3,
    title: "Tiles & Ceramics Testing Instruments",
    img: "/industries/tiles.png",
    link: "/products/tiles-and-ceramics-testing-instruments",
  },
  {
    id: 4,
    title: "Petroleum & Grease Products Testing Instruments",
    img: "/industries/petroleum.png",
    link: "/products/petroleum-and-grease-products-testing-instruments",
  },
  {
    id: 5,
    title: "Paper & Packaging Testing Instruments",
    img: "/industries/paper.png",
    link: "/products/paper-and-packaging-testing-instruments",
  },
  {
    id: 6,
    title: "Tensile & Elongation Testing Machine",
    img: "/industries/tensile.png",
    link: "/products/tensile-and-elongation-testing-machine",
  },
];

export default function IndustryServices() {
  return (
    <section className="px-10 md:px-20 py-20">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          The Best Industry Services
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          High Performance Services For Multiple Industries We Cater To!!  
          Progressively maintain extensive infomediaries via extensible niches.  
          Capitalize on low hanging fruit to identify a ballpark value-added activity  
          to beta test. Override the digital divide with additional click-throughs  
          from fruit to identify a ballpark value added.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border"
          >
            <div className="flex justify-center">
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={120}
                className="mb-4"
              />
            </div>

            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              {item.title}
            </h3>

            <div className="text-center mt-4">
              <a
                href={item.link}
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition"
              >
                Visit
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
