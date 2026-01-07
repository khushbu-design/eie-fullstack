"use client";
import { motion } from "framer-motion";

export default function Facilities() {
  return (
    <section className="px-10 md:px-20 py-16 bg-gray-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-red-800 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Please take account of our following facilities:
      </motion.h2>

      <motion.p
        className="text-gray-700 text-lg leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        At EIE, we always think and view any point, from the customers point of view. Be it, Quality of goods, delivery schedules or after sales service support, we always think of customers delight and satisfaction. To ensure this, we have implemented ISO standards at all levels of organization and are strictly governed by it. We are accredited with ISO 9001 certification for our manufacturing, marketing and Calibration activities. However, this is just beginning. We have lot more to offer.
      </motion.p>

      <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-6">
        <li>Factory, built on large industrial plot of about 11000 sq. Yards</li>
        <li>Well equipped with latest Plant and machineries</li>
        <li>Quality assurance department and in house Calibration Lab equipped with state of the art tools, gadgets and Instruments to ensure accurate and reliable product</li>
        <li>Dedicated team of trained and experienced service Engineers</li>
        <li>Professional Marketing staff</li>
      </ul>

      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          Glimpses of Inauguration Ceremony - EIE Kubadthal Plant:
        </p>
        <a
          href="https://www.youtube.com/watch?v=j95YjkmtxGA"
          target="_blank"
          className="text-red-600 underline"
        >
          Watch Video
        </a>

        <p className="text-gray-700 text-lg mt-4">
          EIE Instruments | Short Presentation | Categories We Serve:
        </p>
        <a
          href="https://www.youtube.com/watch?v=RH4zg9hRmLw"
          target="_blank"
          className="text-red-600 underline"
        >
          Watch Video
        </a>
      </div>
    </section>
  );
}
