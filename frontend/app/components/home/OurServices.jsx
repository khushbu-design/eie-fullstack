"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Validation Services",
    img: "/services/validation.png",
    description: `Validation is a systematic approach, where data is collected and analyzed to confirm that a process will operate within the specified parameters, whenever required and that it will produce consistent results within the predetermined specifications. The process verifies, if the compliance and quality standards are being met by a product in real time. In short, Validation is defined as a documented program that provides a high degree of assurance that a specific process, method, instrument or system will consistently produce a result meeting pre-determined acceptance criteria.
    In a pharmaceutical facility, the validation program establishes that a company is meeting Current Good Manufacturing Process (cGMP) guidelines that are set for the industry by concerned regulatory bodies.`,
  },
  {
    id: 2,
    title: "Calibration Services",
    img: "/services/calibration.png",
    description: `Calibration facilities are given the highest priorities at our organization. We hold excellent technical know-how to calibrate versatile calibration parameters with National & International Traceability. EIE’s in-house Calibration Lab is accredited by NABL Authorities as per IEC/ISO : 17025 Guidelines. The Laboratory at Precise is very well equipped with the most modern and sophisticated Master Instruments / Equipment & Reference Standards, which are employed for providing precise & accurate calibration services to the prestigious clients. We provide following 2 kinds of calibration services to our esteemed clients. a) In house calibration service b) On-Site calibration Service.`,
  },
];

export default function OurServices() {
  return (
    <section className="px-10 md:px-20 py-20 bg-gray-50">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-red-600 mb-14"
      >
        Our Services
      </motion.h2>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Clickable Image */}
            <a href={service.link}>
              <Image
                src={service.img}
                alt={service.title}
                width={700}
                height={400}
                className="w-full h-64 object-cover"
              />
            </a>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
