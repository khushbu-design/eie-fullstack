"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const latestEvents = [
  {
    id: 1,
    title: "Our Nationwide Service Network",
    description:
      "🚀 𝗦𝘁𝗿𝗲𝗻𝗴𝘁𝗵𝗲𝗻𝗶𝗻𝗴 𝗢𝘂𝗿 𝗡𝗮𝘁𝗶𝗼𝗻𝘄𝗶𝗱𝗲 𝗦𝗲𝗿𝘃𝗶𝗰𝗲 𝗡𝗲𝘁𝘄𝗼𝗿𝗸!\n\n" +
      "At EIE Instruments Pvt. Ltd., we believe that great products deserve even greater service support.\n\n" +
      "We are proud to announce the expansion of our Pan-India Field Service Network, with skilled and experienced engineers strategically positioned across major industrial cities to serve you faster and better.\n\n" +
      "⚙️ 𝗪𝗵𝗮𝘁 𝗧𝗵𝗶𝘀 𝗠𝗲𝗮𝗻𝘀 𝗳𝗼𝗿 𝗬𝗼𝘂:\n\n" +
      "✔️ Faster Response Time\n" +
      "✔️ On-Site Installation & Commissioning\n" +
      "✔️ AMC & Calibration Support\n" +
      "✔️ Industry-Compliant Technical Expertise\n" +
      "✔️ Reliable & Prompt After-Sales Service\n\n" +
      "📍 Now Serving Across Key Cities:\n\n" +
      "𝗠𝘂𝗺𝗯𝗮𝗶 | 𝗣𝘂𝗻𝗲 | 𝗕𝗮𝗻𝗴𝗮𝗹𝗼𝗿𝗲 | 𝗕𝗵𝘂𝗯𝗵𝗮𝗻𝗲𝘀𝘄𝗮𝗿 | 𝗟𝘂𝗰𝗸𝗻𝗼𝘄 | 𝗞𝗮𝗻𝗽𝘂𝗿 | 𝗜𝗻𝗱𝗼𝗿𝗲 | 𝗙𝗮𝗿𝗶𝗱𝗮𝗯𝗮𝗱 | 𝗣𝗮𝘁𝗻𝗮\n" +
      "(Expanding continuously across India)\n\n" +
      "🤝 𝗢𝘂𝗿 𝗖𝗼𝗺𝗺𝗶𝘁𝗺𝗲𝗻𝘁\n" +
      "Delivering precision, reliability, and unmatched service excellence across industries including Manufacturing, Pharma, Infrastructure, Automotive, and R&D.\n\n" +
      "🔧 EIE Instruments – Where Precision Meets Service Excellence\n\n" +
      "📞 +𝟗𝟏-𝟗𝟐𝟐𝟕𝟐𝟑𝟎𝟎𝟏𝟎\n" +
      "🌐 𝐰𝐰𝐰.𝐞𝐢𝐞𝐢𝐧𝐬𝐭𝐫𝐮𝐦𝐞𝐧𝐭𝐬.𝐜𝐨𝐦\n" +
      "✉️ 𝐢𝐧𝐟𝐨@𝐞𝐢𝐞𝐢𝐧𝐬𝐭𝐫𝐮𝐦𝐞𝐧𝐭𝐬.𝐜𝐨𝐦\n\n" +
      "💡👉 Looking for reliable service support for your testing equipment? Connect with us today!",
    images: ["/events/event12.jpeg"],
  },
  {
    id:2,
    title: "World of Concrete - 2026",
    description: "EIE Instruments Pvt. Ltd. cordially invites you to visit us at India’s only Concrete B2B trade show – World of Concrete India 2026. Join us at Hall 4, Booth F78, Bombay Exhibition Centre, Mumbai on 3‑5 June 2026. Explore our world-class laboratory instruments and innovations firsthand!",
    date: "3-5 June, 2026",
    location: "Hall 4, Booth F78, Bombay Exhibition Centre, Mumbai",
    images: ["/events/event13.png"],
  },
];

const previousEvents = [
  {
    id: 110,
    title: "Analytica Lab India - 2026",
    description: "cordially invites you to visit us at India’s only B2B trade fair for the ceramics and brick industry.",
    date: "22-24 April, 2026",
    location: "Jio World Convention Center, Mumbai",
    images: ["/events/event10.jfif", "/events/event11.jfif"],
  },
  {
    id: 109,
    title: "Indian Ceramics Asia - 2026",
    description: "We were delighted to welcome you at Indian Ceramics Asia - 2026",
    date: "28-30 January, 2026",
    location: "Helipad Ground Exhibition Center, Ahmedabad",
    images: ["/events/event9.jpg"],
  },
  {
    id: 108,
    title: "Paperex World's Largest Paper Show - 2025",
    description: "We were delighted to welcome you at Paperex – World’s Largest Paper Show 2025, the premier international exhibition and conference on paper, pulp, and allied industries.",
    date: "3-6 December, 2025",
    location: "Yashobhumi, Dwarka, New Delhi, India",
    images: ["/events/event8.jpg"],
  },
  {
    id: 107,
    title: "Asia Lab Expo - 2025 at Gandhinagar",
    description: "We were delighted to welcome you at Asia Lab Expo 2025, the premier event showcasing the latest innovations and advancements in laboratory technology.",
    date: "13-15 November, 2025",
    location: "Hall 12 & 12A, Helipad Exhibition Centre, Gandhinagar, Gujarat",
    images: ["/events/event7.jpg"],
  },
  {
    id: 106,
    title: "Pharma Lab Chem Expo 2025",
    description: "We were delighted to welcome you at Pharma Lab Chem Expo 2025, the premier international exhibition and conference for the Pharmaceutical, Laboratory, and Chemical industries.",
    date: "6-8 November, 2025",
    location: "Shri K.H. Desai Purush Adhyapan Mandir College, Near G.E.B., Balith, N.H. No-08, Vapi, Gujarat",
    images: ["/events/event6.jpg"],
  },
  {
    id: 105,
    title: "PharmaTech Expo 2025",
    description: "It was a pleasure meeting you at PharmaTech Expo (5–7 August 2025) at the Helipad Exhibition Centre, Gandhinagar, Gujarat. Thank you for stopping by EIE Instruments Pvt. Ltd., Hall 1, Stall A52. We truly appreciate your time and interest.",
    date: "5-7 August, 2025",
    location: "Helipad Exhibition Centre, Gandhinagar, Gujarat",
    images: ["/events/event5.jpg"],
  },
  {
    id: 104,
    title: "Global Conclave on Plastic Recycling and Sustainability International Exhibition - 2025",
    description: "Thank you for visiting us at the Global Conclave on Plastic Recycling and Sustainability International Exhibition 2025, held from 17th to 20th June 2025, at Hall No. 6, Booth No. C-47. It was a pleasure connecting with you.",
    date: "17-20 June, 2025",
    location: "Bharat Mandapam, IECC, (Pragati Maidan), Delhi",
    images: ["/events/event1.jpg"],
  },
  {
    id: 103,
    title: "Asia Lab Expo - 2025",
    description: "It was a pleasure meeting you at Asia Lab Expo 2025 (11–13 June 2025) at Stall No. A-02. We truly appreciate your time and interest.",
    date: "11-13 June, 2025",
    location: "Bangalore, Karnataka, India",
    images: ["/events/event2.jpg"],
  },
  {
    id: 102,
    title: "Analytical Lab India - 2025",
    description: "Thank you for visiting us at Analytical Lab India 2025, held from 23rd to 25th April 2025, at Booth No. O041, Pavilion 1. It was a pleasure connecting with you.",
    date: "23-25 April, 2025",
    location: "Jio World Convention Center, Mumbai",
    images: ["/events/event3.jpg"],
  },
  {
    id: 101,
    title: "Indian Ceramic Asia - 2025",
    description: "It was a pleasure meeting you at Indian Ceramics Asia 2025 (5–7 March 2025) at Booth No. D321, Hall No. 2. We appreciate your time and interest.",
    date: "5-7 March, 2025",
    location: "Helipad Exhibition Centre, Gandhinagar, Gujarat",
    images: ["/events/event4.jpg"],
  },
];

export default function EventsPage() {
  const [preview, setPreview] = useState(null);

  const renderEventCard = (event, idx) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >

      <div className={`grid ${event.images.length > 1 ? "grid-cols-2 gap-3" : "grid-cols-1"} p-4`}>
        {event.images.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[16/10] cursor-pointer group overflow-hidden rounded-xl bg-gray-50"
            onClick={() => setPreview(img)}
          >
            <Image
              src={img}
              alt={event.title}
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="p-6 pt-2">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
          {event.title}
        </h3>

        <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line text-[15px]">
          {event.description}
        </p>

        {event.id !== 1 && event.date && event.location && (
          <div className="mt-6 space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-800">📅 Event Date</p>
              <p className="text-gray-600">{event.date}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">📍 Venue</p>
              <p className="text-gray-600">{event.location}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-red-600 text-white py-20 px-6 md:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
        >
          Events
        </motion.h1>
      </section>

      <div className="px-6 md:px-20 -mt-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
          >
            Latest Events
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {latestEvents.map((event, idx) => renderEventCard(event, idx))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
          >
            Previous Events
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {previousEvents.map((event, idx) => renderEventCard(event, idx))}
          </div>
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setPreview(null)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={preview}
              alt="Event Preview"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}