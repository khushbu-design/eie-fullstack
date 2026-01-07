"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VideosPage() {
  const videos = [
    {
      title: "Set Up Of Geotextile Laboratory at IIT Delhi",
      link: "https://youtu.be/B9u6vEObbxk?si=JdpwSsjd9aBzIZ66",
    },
    {
      title: "Electromagnetic Sieve Shaker - S.S. Sieves",
      link: "https://youtube.com/shorts/OAbQEWi3R3Y?si=D08f--90OC6MpPQp",
    },
    {
      title:
        "Manual Hydraulic Punch Press - 5 KN Capacity - With Cutting Die - ASTM D412, D638, D624, ISO 527",
      link: "https://youtube.com/shorts/isJpDDWUgyQ?si=JEXiWr0yBVHEERmc",
    },
    {
      title:
        "Penetrability Tester For Elastromeric Rubber Stopper - ISO 8362-7, ISO 37, ASTM E4, F88, F904",
      link: "https://youtube.com/shorts/avTEvziIZOw?si=a2uUPTYhCqCpj4yq",
    },
    {
      title:
        "Viscometer Holder",
      link: "https://youtube.com/shorts/s3vL6dsbpYo?si=LL3pt72ujuBcafBL",
    },
    {
      title:
        "Calibration of Penetrometer Using Slip Gauge - ASTM D1321, D217, D5, D937",
      link: "https://youtube.com/shorts/13_PjUSr5RU?si=G_KEmbsYy638OcyD",
    },
    {
      title:
        "Mullen Burst Tester For Fabric - HMI Touch Screen - ASTM D3786 - ISO 13938-2",
      link: "https://youtu.be/BeN5vPm_4yo?si=xiut6vYiQliQ10ai",
    },
    {
      title:
        "UTM 100O KN Servo controlled six pillar-IS 1608- EIE INSTRUMENTS PVT LTD - UNIVERSAL TESTING MACHIE",
      link: "https://www.youtube.com/watch?v=9lU6PwuxiDAhttps://www.youtube.com/watch?v=9lU6PwuxiDAhttps://www.youtube.com/watch?v=9lU6PwuxiDA",
    },
    {
      title:
        "How To Assemble Orsat Gas Apparatus With Three Pipettes",
      link: "https://www.youtube.com/watch?v=AAVjm8FR_4E",
    },
    {
      title:
        "Automatic soil compactor as per BIS 2770 - Part VII & VIII",
      link: "https://www.youtube.com/watch?v=ccbGoflH-kw",
    },
    {
      title:
        "Gum Content By Jet Evaporation Method With Steam Super Heater - ASTM D381",
      link: "https://www.youtube.com/watch?v=d1ZDVUvrvp8",
    },
    {
      title:
        "FLOW BOX TEST AS PER ASTM C 1339",
      link: "https://www.youtube.com/watch?v=yWcX-0YcW8o&t=1s",
    },
    {
      title:
        "APPARATUS GUM CONTENT BY JET EVAPORATION BATH WITH AIR COMPRESSOR ASTM D 381",
      link: "https://www.youtube.com/watch?v=I1H6DjQIG0E",
    },
    {
      title:
        "ASTM C230 - Motorized Cement Flow Table",
      link: "https://www.youtube.com/watch?v=dxetlb6h6Ww",
    },
    {
      title:
        "THERMAL CONDUCTIVITY APPARTUS",
      link: "https://www.youtube.com/watch?v=KQ7akOjym_A",
    },
    {
      title:
        "ASTM D4751 - AOS Test Procedure - Sieve & Collection Pan arrangement (Option 1)",
      link: "https://www.youtube.com/watch?v=uAcIN-NV-pM",
    },
    {
      title:
        "COMPRESSION TESTING MACHINE WITH BUILTIN VERNIER, ELECTRONIC BALANCE AND PRINTER",
      link: "https://www.youtube.com/watch?v=CF4SFvV8ssM",
    },
    {
      title:
        "Shear Adhesion Bond Strength Test - BIS 15477:2019 - EN 12003, EN 12004",
      link: "https://www.youtube.com/watch?v=uo20OUNuAZA",
    },
    {
      title:
        "TUMBLER DRUM TEST APARATUS FOR THE COAL TESTING",
      link: "https://www.youtube.com/watch?v=tl2oKBZTxsA",
    },
    {
      title:
        "Glimpses of Inauguration Ceremony | EIE Kubadthal Plant",
      link: "https://www.youtube.com/watch?v=j95YjkmtxGA",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 lg:px-28 py-20"
    >

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-center text-3xl font-bold text-red-600"
      >
        Demonstration Videos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-gray-600 max-w-3xl mx-auto mt-4"
      >
        Get an inside look at our high-quality instruments trusted by industries worldwide.
        View instructional videos for step-by-step demonstrations and usage guidance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12 border rounded-lg overflow-hidden shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 bg-red-700 text-white font-semibold p-3 text-sm">
          <div>INSTRUMENT NAME</div>
          <div className="text-right md:text-center">VIDEO DEMO / QUOTE</div>
        </div>

        {videos.map((v, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2 border-b p-5 hover:bg-gray-50 transition"
          >
            <div className="font-semibold text-gray-800">{v.title}</div>

            <div className="flex md:flex-row flex-col gap-3 justify-end md:justify-center mt-4 md:mt-0">

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={v.link}
                target="_blank"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm w-fit"
              >
                ▶ Watch Demo
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="border border-red-600 text-red-600 hover:bg-red-700 hover:text-white px-5 py-2 rounded-md text-sm w-fit"
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
