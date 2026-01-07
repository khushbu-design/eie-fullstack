"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    logo: "/testimonials/hindustan-colas.png",
    name: "Hindustan Colas Ltd.",
    location: "Vadodara",
    feedback:
      "EIE Instruments has successfully executed all the orders and we found their services prompt, efficient and satisfactory. Their instruments are of good quality and better standards.",
  },
  {
    id: 2,
    logo: "/testimonials/shapoorji.png",
    name: "Shapoorji Pallonji & Co. Ltd.",
    location: "Ahmedabad",
    feedback:
      "We have evaluated your performance and as per the evaluation report, the rating observed is excellent. We wish to convey our thanks and request you to keep the same performance standard in future as well.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 px-8 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center text-red-600 mb-16"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-10 border border-gray-200 shadow-sm rounded-2xl hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.location}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{item.feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
