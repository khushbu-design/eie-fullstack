"use client";
import { useState } from "react";

export default function ComplaintsForm({ close }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    complaintDetails: "",
    complaintDate: "",
  });

  const [loading, setLoading] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "service@eieinstruments.com",
          subject: "New Complaint Submission",
          message: `
            <h2>New Complaint</h2>
            <b>Full Name:</b> ${form.fullName}<br>
            <b>Email:</b> ${form.email}<br>
            <b>Phone:</b> ${form.phone}<br>
            <b>Complaint Details:</b> ${form.complaintDetails}<br>
            <b>Date of Complaint:</b> ${form.complaintDate}<br>
          `,
        }),
      });

      if (res.ok) {
        alert("Complaint Submitted Successfully!");
        close();
      } else {
        const data = await res.json();
        alert("Error: " + (data.error || "Failed to submit"));
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl max-h-[90vh] overflow-y-auto w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Complaint Form</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input className="border p-2" placeholder="Full Name" name="fullName" onChange={update} required />
          <input className="border p-2" placeholder="Email" name="email" onChange={update} required />
          <input className="border p-2" placeholder="Phone" name="phone" onChange={update} required />
          <textarea className="border p-2" placeholder="Complaint Details" name="complaintDetails" onChange={update} required />
          <input className="border p-2" type="date" name="complaintDate" onChange={update} required />
          <button className="bg-red-600 text-white p-2 rounded" disabled={loading}>
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>

        <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}