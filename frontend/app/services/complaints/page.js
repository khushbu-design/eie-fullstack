"use client";
import { useState } from "react";

export default function ComplaintsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    productname: "",
    serial: "",
    purchasedate: "",
    withinwarranty: "",
  });

  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const data = new FormData();
    data.append("to", "service@eieinstruments.com");

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("Complaint submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          productname: "",
          serial: "",
          purchasedate: "",
          withinwarranty: "",
        });
        setFiles([]);
      } else {
        const result = await res.json();
        setStatus("Error: " + (result.error || "Failed to submit"));
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-200 my-10">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">
        Request for Service Support
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Product Name / Model</label>
          <input
            type="text"
            name="productname"
            value={formData.productname}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Serial Number</label>
          <input
            type="text"
            name="serial"
            value={formData.serial}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Purchase Date</label>
          <input
            type="date"
            name="purchasedate"
            value={formData.purchasedate}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Within Warranty (Yes / No)</label>
          <select
            name="withinwarranty"
            value={formData.withinwarranty}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Attach Proof (jpg, png, pdf, mp4)</label>
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.pdf,.mp4"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "Submitting..."}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 disabled:opacity-70"
        >
          {status === "Submitting..." ? "Submitting..." : "Submit Complaint"}
        </button>

        {status && status !== "Submitting..." && (
          <p className={`text-center mt-3 font-medium ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}