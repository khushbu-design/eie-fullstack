"use client";
import { useState } from "react";

export default function InquiryPopup({ onClose }) {
  const [form, setForm] = useState({
    name: "", org: "", designation: "", city: "", gst: "", email: "", mobile: "", landline: "", requirements: "", message: "", file: null,
  });
  const [loading, setLoading] = useState(false);

  const change = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    formData.append("to", "info@eieinstruments.com");

    try {
      const res = await fetch("/api/send-email", { method: "POST", body: formData });
      if (res.ok) {
        alert("Inquiry submitted successfully!");
        onClose();
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-5 z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Inquiry Form</h2>
          <button onClick={onClose} className="text-xl">✖</button>
        </div>

        <form onSubmit={submit} className="grid grid-cols-2 gap-4 mt-4">
          <input required name="name" placeholder="Person Name*" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <input required name="org" placeholder="Organization Name*" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <input required name="designation" placeholder="Designation*" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <input required name="city" placeholder="City*" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <input name="gst" placeholder="GST Number" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <input required type="email" name="email" placeholder="Email*" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <input name="mobile" placeholder="Mobile Number" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <input name="landline" placeholder="Landline Number" onChange={change} className="border border-gray-300 p-2 bg-gray-100" />
          <textarea required name="requirements" placeholder="Requirements*" onChange={change} className="col-span-2 border border-gray-300 p-2 bg-gray-100" />
          <textarea name="message" placeholder="Message (optional)" onChange={change} className="col-span-2 border border-gray-300 p-2 bg-gray-100" />
          <input type="file" name="file" onChange={change} className="col-span-2 border border-gray-300 p-2 bg-gray-100" />
          
          <button disabled={loading} className="col-span-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 disabled:bg-red-400 transition-colors">
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}