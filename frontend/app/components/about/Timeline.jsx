"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1977",
    title: "Vindish Associates Established",
    description: "A Partnership Trading firm by the name of Vindish Associates was established.",
    color: "bg-[#800000]",
  },
  {
    year: "1979",
    title: "Erection & Instrumentation Engineers",
    description: "A Partnership Trading firm by the name of Erection & Instrumentation Engineers was established.",
    color: "bg-gray-700",
  },
  {
    year: "2000",
    title: "New Administrative Office",
    description: "Shifted to a new administrative office of 1500 square feet.",
    color: "bg-[#800000]",
  },
  {
    year: "2002",
    title: "New Production Unit",
    description: "Shifted to a 4500 square feet production unit.",
    color: "bg-gray-700",
  },
  {
    year: "2004",
    title: "EIE Instruments Pvt Ltd Incorporated",
    description: "EIE Instruments Private Limited was incorporated.",
    color: "bg-[#800000]",
  },
  {
    year: "2008",
    title: "New Factory",
    description: "Shifted to a new factory measuring 27000 square feet.",
    color: "bg-gray-700",
  },
  {
    year: "2012",
    title: "Stress Management Seminar",
    description: "Stress Management Seminar Held at EIE Kathawada premises on 14.07.2012 to contribute spiritually & ethically towards employees growth & success.",
    color: "bg-[#800000]",
  },
  {
    year: "2014",
    title: "NABL Accredited Lab",
    description: "NABL accredited Calibration Lab was established.",
    color: "bg-gray-700",
  },
  {
    year: "2020",
    title: "New Corporate HQ",
    description: "Corporate headquarter moved to spacious 6000 sq.ft. office premises at BVR EK Complex, Near Gujarat College.",
    color: "bg-[#800000]",
  },
  {
    year: "2023",
    title: "New Manufacturing Unit",
    description: "New Manufacturing Unit inaugurated at Kubadthal over plot area of 11000 sq.yards.",
    color: "bg-gray-700",
  },
  {
    year: "2024",
    title: "NABL Calibration Laboratory Relocated",
    description: "NABL Calibration Laboratory moved from Kathwada Premises to more spacious Kubadthal factory premises.",
    color: "bg-[#800000]",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans" aria-labelledby="timeline-heading">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.h2 
            id="timeline-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            <span className="text-[#800000]">Our Company Timeline</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#800000] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto mb-32">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-gray-200 rounded-full z-0" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start justify-between w-full mb-16 relative z-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-[45%] pl-12 md:pl-0"
                >
                  <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border-t-4 border-[#800000] hover:shadow-xl hover:bg-white transition-all duration-300">
                    <span className="inline-block md:hidden bg-[#800000] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20 top-4 md:top-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className={`w-10 h-10 md:w-16 md:h-16 rounded-full ${item.color} border-4 border-white shadow-lg flex items-center justify-center text-white font-black text-xs md:text-base`}
                  >
                    <span className="hidden md:block">{item.year}</span>
                  </motion.div>
                </div>

                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gray-100 text-center"
        >
          <div className="mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-[#800000] tracking-tight">
              Our Global Footprint
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
              Connecting high-quality engineering solutions to clients all over the world.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto bg-gray-50 p-6 md:p-12 rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png" 
              alt="EIE Instruments Global Footprint"
              className="w-full h-auto rounded-2xl"
              style={{
                filter: "invert(11%) sepia(87%) saturate(5412%) hue-rotate(349deg) brightness(81%) contrast(111%)"
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}