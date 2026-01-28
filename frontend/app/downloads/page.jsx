"use client";

import { motion } from 'framer-motion';
import DownloadSection from '@/components/DownloadSection';

export default function DownloadsPage() {
  const industries = [
    {
      title: "All catelogues",
      categories: [
        { name: "Soil Testing Lab Instruments", pdfUrl: "/pdfs/Soil Testing Book small.pdf" },
        { name: "Bitumen-Emulsion", pdfUrl: "/pdfs/Bitumen-Emulsion-&-Aggregate-Testing-Introductory-Design-21-05-2020-02.pdf" },
        { name: "Microbiology Lab Instruments", pdfUrl: "/pdfs/Microbiolgy & General Lab Testing Instruments New.pdf" },
        { name: "Stability & Walk-In Stability Chamber", pdfUrl: "/pdfs/Stability & Walk-In Stability Chamber.pdf" },
        { name: "Compression Testing Machine", pdfUrl: "/pdfs/CTM-4.5.18_LATEST_FOR_MAILcf9fb4r.pdf" },
        { name: "Compression Testing Machine Automatic & Fully Automatic", pdfUrl: "/pdfs/CTM-FULLY_AUTOMATIC.-4.5.182527e4.pdf" },
        { name: "Accelerated Carbonation Chamber", pdfUrl: "/pdfs/ACCELERATED CARBONATION CHAMBER.pdf" },
        { name: "Fluid Mechanics Lab Instruments", pdfUrl: "/pdfs/FLUID MECHANICS LAB - LATEST.pdf" },
        { name: "Chambers & Incubators for Pharmaceutical Industries", pdfUrl: "/pdfs/Walk-In Stability Chambers & Walk-In BOD Incubators (2)-compressed copy.pdf" },
        { name: "Geotextile Laboratory testing instruments", pdfUrl: "/pdfs/Updated Geotextile Testing Instruments Catalog - Version 2.0_11zon.pdf" },
        { name: "Corporate Company Profile", pdfUrl: "/pdfs/Corporate Company Profile (1).pdf" },
        { name: "Paper & Packaging Testing Instruments", pdfUrl: "/pdfs/Corporate Company Profile (1).pdf" },
        { name: "Computerized Direct Shear Apparatus", pdfUrl: "/pdfs/Stability & Walk-In Stability Chamber (1).pdf" },
        { name: "Refractory / Muffle Furnace", pdfUrl: "/pdfs/Muffle Or Refractory Furnaced2d502.pdf" },
        { name: "Hot Air Oven", pdfUrl: "/pdfs/hot-air-oven.pdf" },
        { name: "Bursting Strength Tester", pdfUrl: "/pdfs/Bursting Strength Tester.pdf" },
        { name: "Asphalt Content Oven", pdfUrl: "/pdfs/ASPHALT_CONTENT_OVEN.pdf" },
        { name: "Bomb Calorimeter", pdfUrl: "/pdfs/Digital Bomb Calorimeter.pdf" },
        { name: "Geotextile universal tensile testing machine", pdfUrl: "/pdfs/geotextile universal tensile testing machine.pdf" },
      ],
    },

  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
        >
          Downloads
        </motion.h1>

        {industries.map((industry, index) => (
          <DownloadSection key={index} {...industry} />
        ))}
      </div>
    </main>
  );
}