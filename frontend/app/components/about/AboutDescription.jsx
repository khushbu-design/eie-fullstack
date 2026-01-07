"use client";
import { motion } from "framer-motion";

export default function AboutDescription() {
  return (
    <section className="px-10 md:px-20 py-16">
      <motion.h2
        className="text-4xl font-bold text-center text-red-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About EIE Instruments
      </motion.h2>

      <motion.p
        className="text-gray-700 text-lg leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Its late founder Mr. Vimal C. Parikh sowed the seed of presently known EIE Instruments way back in 1977. The seed has now grown to a large tree, which gives shelter and meaning of life to Hundreds of people associated with it. The present directors, staff members and all concerned will remain permanently indebted to him for this courage, support and guiding principles.
      </motion.p>

      <motion.p
        className="text-gray-700 text-lg leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We started modestly as a marketing organization and later entered the ever-challenging field of manufacturing. The rich, hard-earned experience as a marketing organization and close interaction with the end users, paved the way for a customer driven, customer focused and customer oriented company.
      </motion.p>

      <motion.p
        className="text-gray-700 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        The Group has interest in manufacturing, marketing and Calibration of Scientific Instruments and Testing Equipment's for various applications. Professional marketing set up, strong commitment to after sales support, With experience of over 40+ years and Strong team of over 250+ professionals, in understanding and meeting our customer's requirements and sustained emphasis on customer satisfaction, has built a loyal base of customers in different segments of industry, Research and Education field throughout the country.
      </motion.p>
    </section>
  );
}
