"use client";
import { useState } from "react";
import InquiryPopup from "./InquiryPopup";

export default function InquiryButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-20 bg-red-600 text-white px-6 py-3 rounded-full shadow-xl hover:bg-red-700 transition-colors"
      >
        Inquiry
      </button>

      {open && <InquiryPopup onClose={() => setOpen(false)} />}
    </>
  );
}
