"use client";

import { motion } from 'framer-motion';
import DownloadSection from '@/components/DownloadSection';

export default function DownloadsPage() {
  const industries = [
    {
      title: "All catelogues",
      categories: [
        { name: "Soil Testing Book", pdfUrl: "/pdfs/Soil Testing Book small.pdf" },
        { name: "Bitumen-Emulsion", pdfUrl: "/pdfs/Bitumen-Emulsion-&-Aggregate-Testing-Introductory-Design-21-05-2020-02.pdf" },
        { name: "MICROBIOLOGY LAB INSTRUMENTS CATALOG", pdfUrl: "/pdfs/MICROBIOLOGY LAB INSTRUMENTS CATALOG - Copy.pdf" },
        { name: "Tile & Ceramic", pdfUrl: "/pdfs/Tile-Ceramic-Test - For Mail latest.pdf" },
        { name: "Cemet Testing Introductory", pdfUrl: "/pdfs/Cemet-Testing-Introductory-Design-17-05-2020-01 (2).pdf" },
        { name: "Concrete Equipment Testing Book.", pdfUrl: "/pdfs/Concrete-Equipment-Book..pdf" },
        { name: "Tile & Ceramic Testing-Introductory", pdfUrl: "/pdfs/EIE Ceramic-Tiles-Testing-Introductory-Design-21-05-2020-Q-TO-Q.pdf" },
        { name: "Concrete Testing Instruments catalogue", pdfUrl: "/pdfs/EIE Concrete Testing Instruments catalogue.pdf" },
        { name: "GENERAL LAB INSTRUMENTS", pdfUrl: "/pdfs/EIE GENERAL LAB INSTRUMENTS 2016-17.pdf" },
        { name: "GEOTEXTILE TESTING INSTRUMENTS", pdfUrl: "/pdfs/EIE GEOTEXTILE TESTING INSTRUMENTS.pdf" },
        { name: "Paper & Packaging Testing Introductory", pdfUrl: "/pdfs/EIE Paper-&-Packaging-Testing-Introductory-Design-22-05-2020-Q-TO-Q.pdf" },
        { name: "Petroleum Testing Introductory", pdfUrl: "/pdfs/EIE Petroleum-Testing-Introductory-Design-20-05-2020-Q-TO-Q.pdf" },
        { name: "Pharmaceutical Testing Introductory", pdfUrl: "/pdfs/EIE Pharmaceutical-Testing-Introductory-Design-19-05-2020-Q-TO-Q.pdf" },
        { name: "Packaging Testing Instrument", pdfUrl: "/pdfs/Updated Packaging Testing Instrument-Lit-19-07-2024.pdf" },
        { name: "Lab Equipments for Tiles Adhesive", pdfUrl: "/pdfs/Lab Equipments for Tiles Adhesive.pdf" },
        { name: "Microbiology ", pdfUrl: "/pdfs/Microbiology.pdf" },
        { name: "Paver Block", pdfUrl: "/pdfs/Paver Block.pdf" },
        { name: "Tile & Ceramic Book", pdfUrl: "/pdfs/Tile-Ceramic-Book-20-02-2019.pdf" },
        { name: "Soil Testing Instruments", pdfUrl: "/pdfs/soil-testing-instruments.pdf" },
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