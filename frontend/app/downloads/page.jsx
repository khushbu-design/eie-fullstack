"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DownloadsPage() {
  const catalogues = [
    {
      name: "Soil Testing Lab Instruments",
      pdfUrl: "/pdfs/Soil Testing Book small.pdf",
      image: "/pdfs/Soil Testing Book small.pdf",
    },
    {
      name: "Bitumen-Emulsion",
      pdfUrl: "/pdfs/Bitumen-Emulsion-&-Aggregate-Testing-Introductory-Design-21-05-2020-02.pdf",
      image: "https://www.nouryon.com/globalassets/inriver/resources/brochure-asphalt-bitumen-emulsion-global-en.jpg", // placeholder — change to your cover
    },
    {
      name: "Microbiology Lab Instruments",
      pdfUrl: "/pdfs/Microbiolgy & General Lab Testing Instruments New.pdf",
      image: "https://assets.thermofisher.com/TFS-Assets/MBD/Catalogs/US%20Catalog_EN-cover.jpg", // example from Thermo — replace
    },
    {
      name: "Stability & Walk-In Stability Chamber",
      pdfUrl: "/pdfs/Stability & Walk-In Stability Chamber.pdf",
      image: "https://www.labonce.com/images/stability-chamber-product.jpg", // example — update with actual
    },
    {
      name: "Compression Testing Machine",
      pdfUrl: "/pdfs/CTM-4.5.18_LATEST_FOR_MAILcf9fb4r.pdf",
      image: "https://via.placeholder.com/300x400/ef4444/ffffff?text=CTM+Catalogue",
    },
    {
      name: "Compression Testing Machine Automatic & Fully Automatic",
      pdfUrl: "/pdfs/CTM-FULLY_AUTOMATIC.-4.5.182527e4.pdf",
      image: "https://via.placeholder.com/300x400/ef4444/ffffff?text=Auto+CTM",
    },
    {
      name: "Accelerated Carbonation Chamber",
      pdfUrl: "/pdfs/ACCELERATED CARBONATION CHAMBER.pdf",
      image: "https://via.placeholder.com/300x400/3b82f6/ffffff?text=Carbonation+Chamber",
    },
    {
      name: "Fluid Mechanics Lab Instruments",
      pdfUrl: "/pdfs/FLUID MECHANICS LAB - LATEST.pdf",
      image: "https://via.placeholder.com/300x400/10b981/ffffff?text=Fluid+Mechanics",
    },
    {
      name: "Chambers & Incubators for Pharmaceutical Industries",
      pdfUrl: "/pdfs/Walk-In Stability Chambers & Walk-In BOD Incubators (2)-compressed copy.pdf",
      image: "https://via.placeholder.com/300x400/ec4899/ffffff?text=Pharma+Chambers",
    },
    {
      name: "Geotextile Laboratory testing instruments",
      pdfUrl: "/pdfs/Updated Geotextile Testing Instruments Catalog - Version 2.0_11zon.pdf",
      image: "https://via.placeholder.com/300x400/f59e0b/ffffff?text=Geotextile",
    },
    {
      name: "Corporate Company Profile",
      pdfUrl: "/pdfs/Corporate Company Profile (1).pdf",
      image: "https://via.placeholder.com/300x400/8b5cf6/ffffff?text=Company+Profile",
    },
    {
      name: "Paper & Packaging Testing Instruments",
      pdfUrl: "/pdfs/Corporate Company Profile (1).pdf", // note: same as above — maybe update path?
      image: "https://via.placeholder.com/300x400/f97316/ffffff?text=Paper+Packaging",
    },
    {
      name: "Computerized Direct Shear Apparatus",
      pdfUrl: "/pdfs/Stability & Walk-In Stability Chamber (1).pdf",
      image: "https://via.placeholder.com/300x400/ef4444/ffffff?text=Direct+Shear",
    },
    {
      name: "Refractory / Muffle Furnace",
      pdfUrl: "/pdfs/Muffle Or Refractory Furnaced2d502.pdf",
      image: "https://via.placeholder.com/300x400/64748b/ffffff?text=Muffle+Furnace",
    },
    {
      name: "Hot Air Oven",
      pdfUrl: "/pdfs/hot-air-oven.pdf",
      image: "https://via.placeholder.com/300x400/f87171/ffffff?text=Hot+Air+Oven",
    },
    {
      name: "Bursting Strength Tester",
      pdfUrl: "/pdfs/Bursting Strength Tester.pdf",
      image: "https://via.placeholder.com/300x400/60a5fa/ffffff?text=Bursting+Tester",
    },
    {
      name: "Asphalt Content Oven",
      pdfUrl: "/pdfs/ASPHALT_CONTENT_OVEN.pdf",
      image: "https://via.placeholder.com/300x400/fbbf24/ffffff?text=Asphalt+Oven",
    },
    {
      name: "Bomb Calorimeter",
      pdfUrl: "/pdfs/Digital Bomb Calorimeter.pdf",
      image: "https://via.placeholder.com/300x400/a78bfa/ffffff?text=Bomb+Calorimeter",
    },
    {
      name: "Geotextile universal tensile testing machine",
      pdfUrl: "/pdfs/geotextile universal tensile testing machine.pdf",
      image: "https://via.placeholder.com/300x400/34d399/ffffff?text=Tensile+Machine",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
        >
          Downloads
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {catalogues.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-64 bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x400?text=Catalogue";
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2">
                  {item.name}
                </h3>

                <div className="flex gap-4">
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg text-center transition"
                  >
                    Download PDF
                  </a>

                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition"
                  >
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}