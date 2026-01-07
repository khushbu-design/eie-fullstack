"use client";
import { motion } from "framer-motion";

const timelineData = [
  { year: "1977", event: "A Partnership Trading firm by the name of Veecon Associates was established." },
  { year: "1979", event: "Erection & Instrumentation Engineers was established." },
  { year: "2004", event: "EIE Instruments Private Limited was incorporated." },
  { year: "2012", event: "Stress Management Seminar held at ELE Kathawada on 14.07.2012 to contribute spiritually & ethically towards employees growth & success." },
  { year: "2014", event: "NABL accredited Calibration Lab was established." },
  { year: "2020", event: "Corporate HQ moved to 6000 sq.ft. office at BVR EK Complex." },
  { year: "2023", event: "New Manufacturing Unit inaugurated at Kubadthal over plot area of 11000 sq.yards." },
];

export default function Timeline() {
  return (
    <section className="px-10 md:px-20 py-16 bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-center text-red-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Company Timeline
      </motion.h2>

      <div className="border-l-4 border-red-600 pl-6 space-y-10">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <p className="font-semibold text-red-700">{item.year}</p>
            <p className="text-gray-700">{item.event}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
