"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1977",
    title: "Vindish Associates Established",
    description: "A Partnership Trading firm by the name of Vindish Associates was established.",
    color: "bg-red-600",
  },
  {
    year: "1979",
    title: "Erection & Instrumentation Engineers Established",
    description: "A Partnership Trading firm by the name of Erection & Instrumentation Engineers was established.",
    color: "bg-gray-700",
  },
  {
    year: "2004",
    title: "EIE Instruments Pvt Ltd Incorporated",
    description: "EIE Instruments Private Limited was incorporated.",
    color: "bg-red-600",
  },
  {
    year: "2012",
    title: "Stress Management Seminar",
    description: "Stress Management Seminar Held at EIE Kathawada premises on 14.07.2012 to contribute spiritually & ethically towards employees growth & success.",
    color: "bg-gray-700",
  },
  {
    year: "2014",
    title: "NABL Accredited Lab Established",
    description: "NABL accredited Calibration Lab was established.",
    color: "bg-red-600",
  },
  {
    year: "2020",
    title: "New Corporate HQ",
    description: "Corporate headquarter moved to spacious 6000 sq.ft. office premises at BVR EK Complex, Near Gujarat College.",
    color: "bg-gray-700",
  },
  {
    year: "2023",
    title: "New Manufacturing Unit",
    description: "New Manufacturing Unit inaugurated at Kubadthal over plot area of 11000 sq.yards.",
    color: "bg-red-600",
  },
  {
    year: "2024",
    title: "NABL Calibration Laboratory Relocated",
    description: "NABL Calibration Laboratory moved from Kathwada Premises to more spacious Kubadthal factory premises.",
    color: "bg-gray-700",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-red-700 mb-12 md:mb-16 tracking-wide"
        >
          Company History Timeline
        </motion.h2>

        <div className="relative">

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 md:w-2 bg-gradient-to-b from-red-400 via-gray-400 to-red-400 rounded-full origin-top z-0"
          />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`flex items-start mb-12 md:mb-16 relative z-10 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Year Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-xl border-4 border-white ${item.color} z-20`}
              >
                {item.year}
              </motion.div>

              {/* Connecting Horizontal Line */}
              <div
                className={`absolute top-1/2 h-1 bg-gradient-to-r from-red-400 to-gray-400 ${
                  index % 2 === 0 ? "left-1/2" : "right-1/2"
                } w-1/2 z-5`}
              />

              {/* Event Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.25 }}
                className={`w-full md:w-5/12 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-red-400 transition-all duration-300 ${
                  index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}