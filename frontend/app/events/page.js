"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// ------------------- LATEST EVENTS -------------------
const latestEvents = [
  {
    id: 1,
    title: "PharmaTech Expo Ahmedabad 2024",
    description:
      "PharmaTech Expo is the perfect platform to exhibit your latest equipment & technologies for the pharma industry with 250+ exhibitors.",
    date: "15-17 May, 2024",
    location: "Helipad Ground Exhibition Center, Ahmedabad",
    image: "/events/event1.jpg",
  },
  {
    id: 2,
    title: "Analytica Anacon Analytical Expo Hyderabad, 2024",
    description:
      "India Lab Expo brings manufacturers, professionals, and distributors under one roof for advanced lab technologies.",
    date: "26-28 September 2024",
    location: "HITEX Exhibition Center, Hyderabad",
    image: "/events/event2.jpg",
  },
];

// ------------------- PREVIOUS EVENTS -------------------
const previousEvents = [
  {
    id: 101,
    title: "India Lab Expo 2023 – New Delhi",
    description:
      "India’s largest laboratory technology exhibition featuring 300+ exhibitors from the scientific community.",
    date: "10-12 July 2023",
    location: "Pragati Maidan, New Delhi",
    image: "/events/event3.jpg",
  },
  {
    id: 102,
    title: "ChemTech World Expo 2022 – Mumbai",
    description:
      "An international event covering chemical processing, laboratory engineering & industrial safety.",
    date: "24-27 Feb 2022",
    location: "Bombay Exhibition Centre, Mumbai",
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
