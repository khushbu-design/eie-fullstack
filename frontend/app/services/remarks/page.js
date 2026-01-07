"use client";
import { useState } from "react";

export default function RemarksPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    rating: "",
    remarks: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "service@eieinstruments.com",
          subject: "New Remarks Submission from Website",
          message: `
<h2>New Remarks Received</h2>
<b>Name:</b> ${formData.name}<br>
<b>Organization:</b> ${formData.organization || "Not provided"}<br>
<b>Rating:</b> ${formData.rating}<br>
<b>Remarks:</b> ${formData.remarks}<br>
<b>Submitted on:</b> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          `.trim(),
        }),
      });

      if (res.ok) {
        setStatus("Remarks submitted successfully!");
        setFormData({ name: "", organization: "", rating: "", remarks: "" });
      } else {
        const data = await res.json();
        setStatus("Error: " + (data.error || "Failed to submit. Please try again."));
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-red-600 text-center mb-8">
            Leave Your Remarks
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-4 pr-3 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="organization"
                placeholder="Organization / Institute"
                value={formData.organization}
                onChange={handleChange}
                className="w-full pl-4 pr-3 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              />
            </div>

            <div className="relative">
              <select
                name="rating"
                required
                value={formData.rating}
                onChange={handleChange}
                className="w-full pl-4 pr-3 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              >
                <option value="" disabled>
                  Rate Your Experience (1-5)
                </option>
                <option value="5 - Excellent">5 - Excellent</option>
                <option value="4 - Very Good">4 - Very Good</option>
                <option value="3 - Good">3 - Good</option>
                <option value="2 - Fair">2 - Fair</option>
                <option value="1 - Poor">1 - Poor</option>
              </select>
            </div>

            <div className="relative">
              <textarea
                name="remarks"
                placeholder="Your Remarks / Feedback"
                required
                value={formData.remarks}
                onChange={handleChange}
                rows="5"
                className="w-full pl-4 pr-3 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "Submitting..."}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold transition-all disabled:opacity-70"
            >
              {status === "Submitting..." ? "Submitting..." : "Submit Remarks"}
            </button>

            {status && status !== "Submitting..." && (
              <p className={`text-center mt-3 font-medium ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}