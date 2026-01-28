"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1977",
    title: "Veecon Associates Established",
    description: "A Partnership Trading firm by the name of Veecon Associates was established.",
    color: "bg-red-600",
  },
  {
    year: "1979",
    title: "Erection & Instrumentation Engineers",
    description: "Erection & Instrumentation Engineers was established.",
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
    description: "Stress Management Seminar held at ELE Kathawada on 14.07.2012 to contribute spiritually & ethically towards employees growth & success.",
    color: "bg-gray-700",
  },
  {
    year: "2014",
    title: "NABL Accredited Lab",
    description: "NABL accredited Calibration Lab was established.",
    color: "bg-red-600",
  },
  {
    year: "2020",
    title: "New Corporate HQ",
    description: "Corporate HQ moved to 6000 sq.ft. office at BVR EK Complex.",
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
    <section className="py-16 md:py-24 bg-white relative pb-32 md:pb-40">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10 md:mb-14 tracking-wide"
        >
          Company History Timeline
        </motion.h2>

        {/* Vertical Timeline - Center aligned */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line - Center */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 via-gray-400 to-red-400 rounded-full origin-top z-0"
          />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full max-w-lg mb-12 md:mb-16 relative z-10"
            >
              {/* Year Circle - On the line */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-xl border-4 border-white ${item.color} z-20`}
              >
                {item.year}
              </motion.div>

              {/* Arrow Pointer - From circle to card */}
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-red-600 mt-2 mb-4" />

              {/* Event Card - Below circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.25 }}
                className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-red-400 transition-all duration-300 w-full text-center md:text-left"
              >
                <h3 className="text-lg md:text-xl font-bold text-red-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
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