"use client";

import { motion } from 'framer-motion';
import DownloadSection from '@/components/DownloadSection';

export default function DownloadsPage() {
  const industries = [
    {
      title: "CIVIL ENGINEERING TESTING INSTRUMENTS",
      categories: [
        { name: "SOIL TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/soil-testing-instruments.pdf" },
        { name: "CEMENT TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/cement-testing-instruments.pdf" },
        { name: "BITUMEN TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/bitumen-testing-instruments.pdf" },
        { name: "CONCRETE TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/concrete-testing-instruments.pdf" },
        { name: "AGGREGATE TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/aggregate-testing-instruments.pdf" },
        { name: "ASPHALT MIX TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/asphalt-mix-testing-instruments.pdf" },
        { name: "SELF-CONSOLIDATING CONCRETE TESTING", pdfUrl: "/pdfs/civil/self-consolidating-concrete-testing.pdf" },
        { name: "ROCK TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/rock-testing-instruments.pdf" },
        { name: "GEOTEXTILE TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/geotextile-testing-instruments.pdf" },
        { name: "NDT TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/ndt-testing-instruments.pdf" },
        { name: "STEEL TESTING INSTRUMENTS", pdfUrl: "/pdfs/civil/steel-testing-instruments.pdf" },
      ],
    },
    {
      title: "PHARMACEUTICAL & MICROBIOLOGY TESTING INSTRUMENTS",
      categories: [
        { name: "STABILITY & WALK-IN STABILITY TEST CHAMBERS", pdfUrl: "/pdfs/pharmaceutical-and-microbiology/stability-and-walk-in-stability-test-chambers.pdf" },
        { name: "ANALYTICAL TESTING INSTRUMENTS", pdfUrl: "/pdfs/pharmaceutical-and-microbiology/analytical-testing-instruments.pdf" },
        { name: "MICROBIOLOGY TESTING INSTRUMENTS", pdfUrl: "/pdfs/pharmaceutical-and-microbiology/microbiology-testing-instruments.pdf" },
      ],
    },
    {
      title: "FILAMENT YARN TESTING INSTRUMENTS",
      categories: [
        { name: "POY AND FILAMENT YARN TESTING INSTRUMENTS", pdfUrl: "/pdfs/filament-yarn/poy-and-filament-yarn-testing-instruments.pdf" },
      ],
    },
    {
      title: "TILES & CERAMICS TESTING INSTRUMENTS",
      categories: [
        { name: "TILES AND CERAMICS TESTING INSTRUMENTS", pdfUrl: "/pdfs/tiles-and-ceramics/tiles-and-ceramics-testing-instruments.pdf" },
        { name: "WATER ABSORPTION TEST", pdfUrl: "/pdfs/tiles-and-ceramics/water-absorption-test.pdf" },
        { name: "FROST TEST", pdfUrl: "/pdfs/tiles-and-ceramics/frost-test.pdf" },
        { name: "DRYING TEST", pdfUrl: "/pdfs/tiles-and-ceramics/drying-test.pdf" },
        { name: "IMPACT TEST", pdfUrl: "/pdfs/tiles-and-ceramics/impact-test.pdf" },
        { name: "ABRASION TEST", pdfUrl: "/pdfs/tiles-and-ceramics/abrasion-test.pdf" },
        { name: "AUTOCLAVE TEST", pdfUrl: "/pdfs/tiles-and-ceramics/autoclave-test.pdf" },
        { name: "VISCOSITY TEST", pdfUrl: "/pdfs/tiles-and-ceramics/viscosity-test.pdf" },
        { name: "DIMENSIONS TEST", pdfUrl: "/pdfs/tiles-and-ceramics/dimensions-test.pdf" },
        { name: "DILATOMETER TEST", pdfUrl: "/pdfs/tiles-and-ceramics/dilatometer-test.pdf" },
        { name: "THERMAL SHOCK TEST", pdfUrl: "/pdfs/tiles-and-ceramics/thermal-shock-test.pdf" },
        { name: "BENDING STRENGTH TEST", pdfUrl: "/pdfs/tiles-and-ceramics/bending-strength-test.pdf" },
        { name: "MISCELLANEOUS EQUIPMENT", pdfUrl: "/pdfs/tiles-and-ceramics/miscellaneous-equipment.pdf" },
      ],
    },
    {
      title: "PETROLEUM & GREASE PRODUCTS TESTING INSTRUMENTS",
      categories: [
        { name: "AVIATION TURBINE FUEL TESTING INSTRUMENT (ATF)", pdfUrl: "/pdfs/petroleum-and-grease-products/aviation-turbine-fuel-testing-instrument-atf.pdf" },
        { name: "LUBRICANT TESTING INSTRUMENTS", pdfUrl: "/pdfs/petroleum-and-grease-products/lubricant-testing-instruments.pdf" },
        { name: "GREASE-WAX TESTING INSTRUMENTS", pdfUrl: "/pdfs/petroleum-and-grease-products/grease-wax-testing-instruments.pdf" },
        { name: "ENGINE-COOLANT TESTING INSTRUMENTS", pdfUrl: "/pdfs/petroleum-and-grease-products/engine-coolant-testing-instruments.pdf" },
      ],
    },
    {
      title: "TENSILE & ELONGATION TESTING MACHINE",
      categories: [
        { name: "TENSILE GRIP", pdfUrl: "/pdfs/tensile-and-elongation/tensile-grip.pdf" },
        { name: "TENSILE AND ELONGATION TESTING MACHINE", pdfUrl: "/pdfs/tensile-and-elongation/tensile-and-elongation-testing-machine.pdf" },
      ],
    },
    {
      title: "PAPER & PACKAGING TESTING INSTRUMENTS",
      categories: [
        { name: "PAPER TESTING INSTRUMENTS", pdfUrl: "/pdfs/paper-and-packaging/paper-testing-instruments.pdf" },
        { name: "PACKAGING TESTING INSTRUMENTS", pdfUrl: "/pdfs/paper-and-packaging/packaging-testing-instruments.pdf" },
      ],
    },
    {
      title: "PLASTIC & RUBBER TESTING INSTRUMENTS",
      categories: [
        { name: "RUBBER TESTING INSTRUMENTS", pdfUrl: "/pdfs/plastic-and-rubber/rubber-testing-instruments.pdf" },
        { name: "PLASTIC TESTING INSTRUMENTS", pdfUrl: "/pdfs/plastic-and-rubber/plastic-testing-instruments.pdf" },
      ],
    },
    {
      title: "REFRACTORY & CASTABLE TESTING INSTRUMENTS",
      categories: [
        { name: "REFRACTORY AND CASTABLE TESTING INSTRUMENTS", pdfUrl: "/pdfs/refractory-and-castable/refractory-and-castable-testing-instruments.pdf" },
      ],
    },
    {
      title: "DRILLING FLUID TESTING INSTRUMENTS",
      categories: [
        { name: "DRILLING FLUID TESTING INSTRUMENTS", pdfUrl: "/pdfs/drilling-fluid/drilling-fluid-testing-instruments.pdf" },
      ],
    },
    {
      title: "WOOD PARTICLE BOARD TESTING INSTRUMENTS",
      categories: [
        { name: "WOOD PARTICLE BOARD TESTING INSTRUMENTS", pdfUrl: "/pdfs/wood-particle-board/wood-particle-board-testing-instruments.pdf" },
      ],
    },
    {
      title: "PLYWOOD TESTING INSTRUMENTS",
      categories: [
        { name: "PLYWOOD TESTING INSTRUMENTS", pdfUrl: "/pdfs/plywood/plywood-testing-instruments.pdf" },
      ],
    },
    {
      title: "GENERAL LAB TESTING INSTRUMENTS",
      categories: [
        { name: "GENERAL LAB TESTING INSTRUMENTS", pdfUrl: "/pdfs/general-lab/general-lab-testing-instruments.pdf" },
      ],
    },
    {
      title: "HYDROLOGY LAB INSTRUMENTS",
      categories: [
        { name: "HYDROLOGY LAB INSTRUMENTS", pdfUrl: "/pdfs/hydrology-lab/hydrology-lab-instruments.pdf" },
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