"use client";

import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface Category {
  name: string;
  pdfUrl: string;
}

interface DownloadSectionProps {
  title: string;
  categories: Category[];
  masterPdfUrl?: string; 
}

export default function DownloadSection({ 
  title, 
  categories, 
  masterPdfUrl 
}: DownloadSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-12 overflow-hidden border border-gray-100"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-8 pb-4 inline-block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((category, idx) => (
          <motion.a
            key={idx}
            href={category.pdfUrl}
            download
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -10 }}
            className="group block bg-gradient-to-br from-red-50 to-blue-50 p-6 rounded-xl text-center border-2 border-transparent hover:border-red-500 transition-all duration-300 shadow-md hover:shadow-2xl"
          >
            <FileText className="w-12 h-12 mx-auto mb-4 text-red-600 group-hover:text-blue-600 transition-colors" />
            <p className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
              {category.name}
            </p>
            <span className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <Download size={16} />
              Download PDF
            </span>
          </motion.a>
        ))}
      </div>

      {masterPdfUrl && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href={masterPdfUrl}
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            <Download size={28} />
            Download Full {title.split(' ')[0]} Catalogue
          </a>
        </motion.div>
      )}
    </motion.section>
  );
}