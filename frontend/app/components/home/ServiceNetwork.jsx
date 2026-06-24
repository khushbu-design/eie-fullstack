"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceNetwork() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-12"
        >
          <Image
            src="/events/event12.jpeg" 
            alt="EIE Instruments Nationwide Service Network"
            width={1400}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-red-600 mb-6"
          >
            Our Nationwide Service Network
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg text-gray-700 leading-relaxed space-y-6 text-left"
          >
            <p className="text-xl font-medium text-gray-800">
              🚀 <strong>Strengthening Our Nationwide Service Network!</strong>
            </p>
            
            <p>
              At <strong>EIE Instruments Pvt. Ltd.</strong>, we believe that great products deserve even greater service support. 
              We are proud to announce the expansion of our <strong>Pan-India Field Service Network</strong>, with skilled and experienced engineers strategically positioned across major industrial cities to serve you faster and better.
            </p>

            <h3 className="text-2xl font-semibold text-red-600 mt-10 mb-4">⚙️ What This Means for You:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
              <li>✔️ Faster Response Time</li>
              <li>✔️ On-Site Installation & Commissioning</li>
              <li>✔️ AMC & Calibration Support</li>
              <li>✔️ Industry-Compliant Technical Expertise</li>
              <li>✔️ Reliable & Prompt After-Sales Service</li>
            </ul>

            <h3 className="text-2xl font-semibold text-red-600 mt-10 mb-4">📍 Now Serving Across Key Cities:</h3>
            <p className="text-lg font-medium">
              Mumbai | Pune | Bangalore | Bhubaneswar | Lucknow | Kanpur | Indore | Faridabad | Patna 
              <span className="text-red-600 font-semibold"> (Expanding continuously across India)</span>
            </p>

            <p className="mt-10 text-lg">
              🤝 <strong>Our Commitment:</strong> Delivering precision, reliability, and unmatched service excellence across industries including Manufacturing, Pharma, Infrastructure, Automotive, and R&D.
            </p>

            <div className="mt-12 p-8 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-2xl font-bold text-red-700 mb-2">
                🔧 EIE Instruments – Where Precision Meets Service Excellence
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-lg mt-6">
                <p>📞 <strong>+91-9227230010</strong></p>
                <p>🌐 <strong>www.eieinstruments.com</strong></p>
                <p>✉️ <strong>info@eieinstruments.com</strong></p>
              </div>
            </div>

            <p className="text-center text-xl font-medium mt-10 text-gray-800">
              💡 Looking for reliable service support for your testing equipment? <br />
              <strong>Connect with us today!</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}