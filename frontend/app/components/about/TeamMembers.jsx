"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  { name: "Deepak Parikh", designation: "Managing Director at EIE Instruments", img: "/team/deepak.jpg" },
  { name: "Sanjay Parikh", designation: "Managing Director at EIE Instruments", img: "/team/sanjay.jpg" },
  { name: "Uday Parikh", designation: "Managing Director at EIE Instruments", img: "/team/uday.jpg" },
  { name: "Kunal Parikh", designation: "Managing Director at EIE Instruments", img: "/team/kunal.jpg" },
  { name: "Chintan Parikh", designation: "Managing Director at EIE Instruments", img: "/team/chintan.jpg" },
  { name: "Tejas Parikh", designation: "Managing Director at EIE Instruments", img: "/team/tejas.png" },
];

export default function TeamMembers() {
  return (
    <section className="px-10 md:px-20 py-16" aria-labelledby="team-heading">
      <motion.h2
        id="team-heading"
        className="text-4xl font-bold text-center text-red-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Key Members
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="w-48 h-48 mx-auto relative mb-5 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:border-red-300 transition-all bg-gray-50">
              <Image 
                src={member.img} 
                alt={member.name} 
                fill 
                className="object-contain p-2"   // ← Changed to object-contain + padding
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{member.designation}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}