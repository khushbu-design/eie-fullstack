"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Validation Services",
    img: "/services/validation.png",
    shortDesc: "Ensuring compliance and quality through systematic validation as per cGMP guidelines",
    description: `Validation is a systematic approach, where data is collected and analyzed to confirm that a process will operate within the specified parameters, whenever required and that it will produce consistent results within the predetermined specifications. The process verifies, if the compliance and quality standards are being met by a product in real time. In short, Validation is defined as a documented program that provides a high degree of assurance that a specific process, method, instrument or system will consistently produce a result meeting pre-determined acceptance criteria. In a pharmaceutical facility, the validation program establishes that a company is meeting Current Good Manufacturing Process (cGMP) guidelines that are set for the industry by concerned regulatory bodies.`,
  },
  {
    id: 2,
    title: "Calibration Services",
    img: "/services/calibration.png",
    shortDesc: "NABL Accredited In-House & On-Site Calibration Services",
    description: `Calibration facilities are given the highest priorities at our organization. We hold excellent technical know-how to calibrate versatile calibration parameters with National & International Traceability. EIE’s in-house Calibration Lab is accredited by NABL Authorities as per IEC/ISO : 17025 Guidelines. The Laboratory at Precise is very well equipped with the most modern and sophisticated Master Instruments / Equipment & Reference Standards, which are employed for providing precise & accurate calibration services to the prestigious clients.

We provide two types of calibration services:
a) In-house Calibration Service
b) On-Site Calibration Service`,
  },
];

export default function OurServices() {
  return (
    <section className="px-10 md:px-20 py-20 bg-gray-50" aria-labelledby="services-heading">
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-red-600 mb-14"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={service.img}
              alt={`${service.title} - EIE Instruments`}
              width={700}
              height={400}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                {service.title}
              </h3>

              {service.shortDesc && (
                <p className="text-red-700 font-medium mb-4">
                  {service.shortDesc}
                </p>
              )}

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}