"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, ClipboardCheck, Timer, UserCheck } from "lucide-react";

const statsData = [
  {
    id: 1,
    label: "Employees",
    value: 300,
    icon: <Users size={40} />,
  },
  {
    id: 2,
    label: "Projects",
    value: 1000,
    icon: <ClipboardCheck size={40} />,
  },
  {
    id: 3,
    label: "Years Experience",
    value: 40,
    icon: <Timer size={40} />,
  },
  {
    id: 4,
    label: "Customers",
    value: 10000,
    icon: <UserCheck className="w-10 h-10 text-red-700" />,
  },
];

export default function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const frames = 60;
    const interval = duration / frames;

    statsData.forEach((item, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor((item.value / frames) * frame);
          return updated;
        });
        if (frame === frames) clearInterval(counter);
      }, interval);
    });
  }, []);

  return (
    <section className="py-24 bg-white px-10 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-red-600 mb-16"
      >
        Our Achievements
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {statsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-2xl shadow-sm py-10 px-6 hover:shadow-md transition"
          >
            <div className="text-red-600 mb-4">{item.icon}</div>
            <p className="text-4xl font-bold text-gray-900 mb-2">
              {counts[index]}+
            </p>
            <p className="text-gray-600 text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
