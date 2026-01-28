"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// ------------------- LATEST EVENTS -------------------
const latestEvents = [
  {
    id: 1,
    title: "Indian Ceramics Asia - 2026",
    description:
      "cordially invites you to visit us at India’s only B2B trade fair for the ceramics and brick industry.",
    date: "28-30 January, 2026",
    location: "Helipad Ground Exhibition Center, Ahmedabad",
    image: "/events/event9.jpg",
  },
];

// ------------------- PREVIOUS EVENTS -------------------
const previousEvents = [
  {
    id: 108,
    title: "Paperex World's Largest Paper Show - 2025",
    description:
      "We were delighted to welcome you at Paperex – World’s Largest Paper Show 2025, the premier international exhibition and conference on paper, pulp, and allied industries.",
    date: "3-6 December, 2025",
    location: "Yashobhumi, Dwarka, New Delhi, India",
    image: "/events/event8.jpg",
  },
  {
    id: 107,
    title: "Asia Lab Expo - 2025 at Gandhinagar",
    description:
      "We were delighted to welcome you at Asia Lab Expo 2025, the premier event showcasing the latest innovations and advancements in laboratory technology.",
    date: "13-15 November, 2025",
    location: "Hall 12 & 12A, Helipad Exhibition Centre, Gandhinagar, Gujarat",
    image: "/events/event7.jpg",
  },
  {
    id: 106,
    title: "Pharma Lab Chem Expo 2025",
    description:
      "We were delighted to welcome you at Pharma Lab Chem Expo 2025, the premier international exhibition and conference for the Pharmaceutical, Laboratory, and Chemical industries.",
    date: "6-8 November, 2025",
    location: "Shri K.H. Desai Purush Adhyapan Mandir College, Near G.E.B., Balith, N.H. No-08, Vapi, Gujarat",
    image: "/events/event6.jpg",
  },
  {
    id: 105,
    title: "PharmaTech Expo 2025",
    description:
      "It was a pleasure meeting you at PharmaTech Expo (5–7 August 2025) at the Helipad Exhibition Centre, Gandhinagar, Gujarat. Thank you for stopping by EIE Instruments Pvt. Ltd., Hall 1, Stall A52. We truly appreciate your time and interest.",
    date: "5-7 August, 2025",
    location: "Helipad Exhibition Centre, Gandhinagar, Gujarat",
    image: "/events/event5.jpg",
  },
  {
    id: 104,
    title: "Global Conclave on Plastic Recycling and Sustainability International Exhibition - 2025",
    description:
      "Thank you for visiting us at the Global Conclave on Plastic Recycling and Sustainability International Exhibition 2025, held from 17th to 20th June 2025, at Hall No. 6, Booth No. C-47. It was a pleasure connecting with you.",
    date: "17-20 June, 2025",
    location: "Bharat Mandapam, IECC, (Pragati Maidan), Delhi",
    image: "/events/event1.jpg",
  },
  {
    id: 103,
    title: "Asia Lab Expo - 2025",
    description:
      "It was a pleasure meeting you at Asia Lab Expo 2025 (11–13 June 2025) at Stall No. A-02. We truly appreciate your time and interest.",
    date: "11-13 June, 2025",
    location: "Bangalore, Karnataka, India",
    image: "/events/event2.jpg",
  },
  {
    id: 102,
    title: "Analytical Lab India - 2025",
    description:
      "Thank you for visiting us at Analytical Lab India 2025, held from 23rd to 25th April 2025, at Booth No. O041, Pavilion 1. It was a pleasure connecting with you.",
    date: "23-25 April, 2025",
    location: "Jio World Convention Center, Mumbai",
    image: "/events/event3.jpg",
  },
  {
    id: 101,
    title: "Indian Ceramic Asia - 2025",
    description:
      "It was a pleasure meeting you at Indian Ceramics Asia 2025 (5–7 March 2025) at Booth No. D321, Hall No. 2. We appreciate your time and interest.",
    date: "5-7 March, 2025",
    location: "Helipad Exhibition Centre, Gandhinagar, Gujarat",
    image: "/events/event4.jpg",
  },
];

export default function EventsPage() {
  const [preview, setPreview] = useState(null);

  const renderEventCard = (event, idx) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
      className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition p-6"
    >
      {/* IMAGE */}
      <div
        className="relative w-full h-64 cursor-pointer group overflow-hidden rounded-xl"
        onClick={() => setPreview(event.image)}
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-contain bg-white p-2 transition group-hover:scale-105"
        />
      </div>

      {/* TEXT */}
      <h3 className="text-2xl font-bold mt-6 text-gray-900">
        {event.title}
      </h3>

      <p className="text-gray-600 mt-3 leading-relaxed">
        {event.description}
      </p>

      <div className="mt-6">
        <p className="text-gray-800 font-semibold">📅 Event Date:</p>
        <p className="text-gray-600">{event.date}</p>

        <p className="text-gray-800 font-semibold mt-3">📍 Venue:</p>
        <p className="text-gray-600">{event.location}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* ---------- HEADER ---------- */}
      <section className="bg-red-600 text-white py-20   px-15 md:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
        >
          Events
        </motion.h1>
      </section>

      {/* ---------- LATEST EVENTS ---------- */}
      <div className="px-6 md:px-20 -mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-14"
          >
            Latest Events
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {latestEvents.map((event, idx) => renderEventCard(event, idx))}
          </div>
        </div>
      </div>

      {/* ---------- PREVIOUS EVENTS ---------- */}
      <div className="px-6 md:px-20">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-14"
          >
            Previous Events
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {previousEvents.map((event, idx) =>
              renderEventCard(event, idx)
            )}
          </div>
        </div>
      </div>

      {/* ---------- PREVIEW MODAL ---------- */}
      {preview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setPreview(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-[90%] md:w-[60%] lg:w-[40%] h-[70%] rounded-2xl overflow-hidden"
          >
            <Image src={preview} alt="Preview" fill className="object-contain" />
          </motion.div>
        </div>
      )}
    </div>
  );
}
