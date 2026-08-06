"use client";
import { useState } from "react";

export default function InquiryPopup({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    org: "",
    designation: "",
    city: "",
    gst: "",
    email: "",
    mobile: "",
    landline: "",
    requirements: "",
    message: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);

  const change = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (form[key] !== null && form[key] !== "") {
        formData.append(key, form[key]);
      }
    });

    formData.append("to", "info@eieinstruments.com");

    try {
      // 1. Email મોકલો
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      // 2. Strapi માં પણ સેવ કરો
      try {
        const base = process.env.NEXT_PUBLIC_STRAPI_URL
          ? process.env.NEXT_PUBLIC_STRAPI_URL.replace(/\/api\/?$/, "")
          : "https://optimistic-friends-ed5888f6c2.strapiapp.com";

        await fetch(`${base}/api/submissions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              type: "inquiry",
              email: form.email,
              phone: form.mobile || "",
              product: form.requirements || "",
              status: "new",
              data: {
                name: form.name,
                org: form.org,
                designation: form.designation,
                city: form.city,
                gst: form.gst,
                email: form.email,
                mobile: form.mobile,
                landline: form.landline,
                requirements: form.requirements,
                message: form.message,
              },
            },
          }),
        });
      } catch (strapiErr) {
        console.error("Failed to save inquiry to Strapi:", strapiErr);
      }

      if (result.success) {
        const successMsg = encodeURIComponent(
          "Your inquiry has been submitted successfully! Thank you for contacting us."
        );
        window.location.href = `/success?message=${successMsg}`;
      } else {
        alert("Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-5 z-50">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-red-600">
            Product Inquiry Form
          </h2>
          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-gray-700 transition"
          >
            ✕
          </button>
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">
              Person Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="name"
              placeholder="Enter your full name"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="org"
              placeholder="Company / Institute"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Designation</label>
            <input
              name="designation"
              placeholder="Your position"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">City</label>
            <input
              name="city"
              placeholder="Your city"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">GST Number</label>
            <input
              name="gst"
              placeholder="GSTIN (if applicable)"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="your@email.com"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Mobile Number</label>
            <input
              name="mobile"
              type="tel"
              placeholder="Your mobile number"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Landline Number</label>
            <input
              name="landline"
              type="tel"
              placeholder="Landline (optional)"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">
              Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="requirements"
              rows="4"
              placeholder="Please describe your requirements in detail..."
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Additional Message</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Any other message or details..."
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium mb-1">
              Upload File / List (optional)
            </label>
            <input
              type="file"
              name="file"
              onChange={change}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-4 rounded-2xl text-lg transition-all mt-4"
          >
            {loading ? "Submitting Inquiry..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}