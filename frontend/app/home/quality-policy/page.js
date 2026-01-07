"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QualityPolicy() {
  const policyPoints = [
    "Operating and adhering to Quality Management System based on and compliant with the requirements of ISO 9001 to continually improve the effectiveness of the Quality Management System.",
    "Enhancing awareness, skill and competence of our employees and workers through effective communication & training to enable them to demonstrate their involvement and responsibility for QMS compliance & improvement.",
    "Meeting needs and expectations of customers and other interested parties.",
    "Continually improving the QMS performance by setting objectives and action plans to achieve them.",
    "Providing products of consistent quality, services and technical support meeting specific requirements of customers where demanded.",
    "To comply with the applicable legal and statutory requirements to which the organization subscribes.",
    "Providing adequate resources and infrastructure needed to continually improve the effectiveness of the Quality Management System.",
    "Recognizing the importance of external providers and working with them to improve the quality of their services to us."
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-24">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-red-600"
        >
          Quality Policy
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center">
            <Image
              src="/images/vision.png" 
              width={400}
              height={300}
              alt="Vision"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-4 text-gray-800">
            <h2 className="text-3xl font-semibold text-red-600">Our Vision</h2>
            <p>Vision rules our organization. A framework, a supreme code of conduct cherishes us every day to serve the world better.</p>
            <p>EIE Instruments envisages itself as an emerging organisation standing ahead of the competition through its marketing and manufacturing of the advanced laboratory equipments.</p>
            <p>EIE Instruments evolves itself as a workplace of efficient individuals dedicated to serve the nation & Indian industry with constant improvement driven by innovation, integrity & inspiration.</p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center">
            <Image
              src="/images/mission.png" 
              width={400}
              height={300}
              alt="Mission"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-4 text-gray-800">
            <h2 className="text-3xl font-semibold text-red-600">Our Mission</h2>
            <p>EIE Instruments is the leading manufacturer of laboratory and testing equipment. The mission of EIE Instruments is:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide user friendly, simplified, technologically advanced, reliable & robust instrumentation/automation to global customers backed by efficient services</li>
              <li>Applying creative innovations and modern techniques to uplift the standard of quality as to satisfy customers' need of achieving high precision & accuracy in measurement and testing</li>
              <li>Further, to create an environment to nurture and promote innovations and core values amongst the employees so as to leave no stone unturned in fulfilling the expectations of customers.</li>
              <li>To deliver reliability & credibility</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-red-600">Quality Policy</h2>
          <p>We at EIE Instruments Pvt Ltd are committed to consistently provide products and services that meet or exceed the requirements and expectations of our customer. We continually improve the effectiveness of our Quality performance in our activities, products and services through implementation of a Quality management framework.</p>
          <p className="font-semibold mt-4">We shall achieve this by:</p>
          <ul className="list-decimal list-inside space-y-2 text-gray-800 mt-2">
            {policyPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
