"use client";

import { useEffect } from "react";

export default function ImageModal({ imgSrc, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!imgSrc) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] animate-fadeIn">
      <div className="relative bg-white p-2 rounded-xl shadow-xl animate-zoomIn">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg hover:bg-red-700 transition"
        >
          ✕
        </button>

        <img
          src={imgSrc}
          alt="Certificate Full View"
          className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}
