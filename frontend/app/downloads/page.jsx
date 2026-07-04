'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DownloadsPage() {
  const catalogues = [
    { name: "Soil Testing Lab Instruments", pdfUrl: "/pdfs/Soil Testing Book small.pdf", image: "/images/1.png" },
    { name: "Bitumen Testing Instruments", pdfUrl: "/pdfs/Bitumen-Emulsion.pdf", image: "/images/2.png" },
    { name: "Microbiology Lab Instruments", pdfUrl: "/pdfs/Microbiolgy.pdf", image: "/images/3.png" },
    { name: "Stability & Walk-In Stability Chamber", pdfUrl: "/pdfs/Stability.pdf", image: "/images/4.png" },
    { name: "Compression Testing Machine", pdfUrl: "/pdfs/CTM.pdf", image: "/images/5.png" },
    { name: "Compression Testing Machine Automatic & Fully Automatic", pdfUrl: "/pdfs/CTM-FULLY_AUTOMATIC.-4.5.182527e4.pdf", image: "/images/6.png" },
    { name: "Accelerated Carbonation Chamber", pdfUrl: "/pdfs/ACCELERATED CARBONATION CHAMBER.pdf", image: "/images/7.png" },
    { name: "Fluid Mechanics Lab Instruments", pdfUrl: "/pdfs/FLUID MECHANICS LAB - LATEST.pdf", image: "/images/8.png" },
    { name: "Chambers & Incubators for Pharmaceutical Industries", pdfUrl: "/pdfs/Walk-In Stability Chambers & Walk-In BOD Incubators (2)-compressed copy.pdf", image: "/images/9.png" },
    { name: "Geotextile Laboratory testing instruments", pdfUrl: "/pdfs/Updated Geotextile Testing Instruments Catalog - Version 2.0_11zon.pdf", image: "/images/10.png" },
    { name: "Corporate Company Profile", pdfUrl: "/pdfs/Corporate Company Profile (1).pdf", image: "/images/11.png" },
    { name: "Paper & Packaging Testing Instruments", pdfUrl: "/pdfs/packaging.pdf", image: "/images/12.png" },
    { name: "Computerized Direct Shear Apparatus", pdfUrl: "/pdfs/computerized.pdf", image: "/images/13.png" },
    { name: "Refractory / Muffle Furnace", pdfUrl: "/pdfs/furnace.pdf", image: "/images/14.png" },
    { name: "Hot Air Oven", pdfUrl: "/pdfs/hot-air-oven.pdf", image: "/images/15.png" },
    { name: "Bursting Strength Tester", pdfUrl: "/pdfs/Bursting Strength Tester.pdf", image: "/images/16.png" },
    { name: "Asphalt Content Oven", pdfUrl: "/pdfs/ASPHALT_CONTENT_OVEN.pdf", image: "/images/17.png" },
    { name: "Bomb Calorimeter", pdfUrl: "/pdfs/bomb.pdf", image: "/images/18.png" },
    { name: "Geotextile universal tensile testing machine", pdfUrl: "/pdfs/geotextile universal tensile testing machine.pdf", image: "/images/19.png" },
    { name: "Tile Ceramics Testing Instruments", pdfUrl: "/pdfs/tiles-ceramic.pdf", image: "/images/20.png" },
    { name: "Concrete Testing Instruments", pdfUrl: "/pdfs/concrete.pdf", image: "/images/21.png" },
    { name: "Universal Testing Machine", pdfUrl: "/pdfs/universal.pdf", image: "/images/22.png" },
    { name: "Universal Fully Automatic Penetrometer", pdfUrl: "/pdfs/penetrometer.pdf", image: "/images/23.png" },
  ];

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-red-700">Downloads</h1>
          <p className="text-gray-600 mt-4 text-xl">Our Latest Catalogues & Brochures</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {catalogues.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-red-300 transition-all duration-300"
            >
              <div className="h-56 bg-gray-100 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-6 line-clamp-2">
                  {item.name}
                </h3>

                <div className="flex gap-3">
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-xl font-medium transition text-sm"
                  >
                    Download PDF
                  </a>
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-3 rounded-xl font-medium transition text-sm"
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