'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What are the best laboratory testing instruments for civil engineering projects?",
    answer: "EIE Instruments offers a complete range of civil engineering testing equipment including Compression Testing Machines, Triaxial Test Apparatus, CBR Test Machines, and more. All instruments are manufactured as per IS, BS, and ASTM standards."
  },
  {
    question: "Do you provide pan-India service and calibration support?",
    answer: "Yes. We have expanded our Pan-India Field Service Network with skilled engineers in major cities including Mumbai, Pune, Bangalore, Lucknow, Indore, and more. We also offer NABL accredited calibration services both in-house and on-site."
  },
  {
    question: "Since when has EIE Instruments been manufacturing testing equipment?",
    answer: "EIE Instruments Pvt. Ltd. was established in 1977. With over 49 years of experience, we are one of the most trusted manufacturers of laboratory testing instruments in India."
  },
  {
    question: "Do you manufacture instruments for pharmaceutical and microbiology labs?",
    answer: "Yes. We provide high-quality Pharmaceutical & Microbiology Testing Instruments including Autoclaves, BOD Incubators, Stability Chambers, and more."
  },
  {
    question: "What is the warranty period on EIE Instruments products?",
    answer: "Most of our instruments come with a standard 12 to 24 months warranty. Extended warranty and Annual Maintenance Contracts (AMC) are also available."
  },
  {
    question: "How can I get a quote for testing equipment?",
    answer: "You can contact us via phone at +91-9227230010, email at info@eieinstruments.com, or fill the inquiry form on our Contact page. Our team will respond within 24 hours."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find quick answers about our laboratory testing instruments and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-400">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">
            Still have questions? 
            <a href="/contact" className="text-blue-600 hover:underline font-medium ml-1">
              Contact Us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}