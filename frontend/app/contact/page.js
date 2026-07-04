// app/contact/page.js
'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const teamSections = [
    {
      title: "Founders & Co-Founders",
      cols: 3,
      members: [
        { name: "Mr. Sanjay Vimalbhai Parikh", email: "sanjay@eieinstruments.com", phone1: "7935208301", phone2: "+919825071625" },
        { name: "Mr. Deepak Vimalbhai Parikh", email: "deepak@eieinstruments.com", phone1: "7966211205", phone2: "+919824041391" },
        { name: "Mr. Uday Vimalbhai Parikh", email: "uday@eieinstruments.com", phone1: "7935208213", phone2: "+918530301083" },
      ],
    },
    {
      title: "CEO",
      cols: 3,
      members: [
        { name: "Mr. Chintan Deepakbhai Parikh", email: "chintan@eieinstruments.com", phone1: "7935208335", phone2: "+919904020401" },
        { name: "Mr. Kunal Sanjaybhai Parikh", email: "kunal@eieinstruments.com", phone1: "7935208304", phone2: "+917874716251" },
        { name: "Mr. Tejas Udaybhai Parikh", email: "tejas@eieinstruments.com", phone1: "7935208302", phone2: "+919726411991" },
      ],
    },
    {
      title: "Corporate Office",
      cols: 1,
      members: [
        { name: "Mrs Aarti Krunal Patel", email: "aarti@eieinstruments.com", phone1: "7966211204", phone2: "+919227230010" },
      ],
    },
    {
      title: "Customer Support For Service",
      cols: 2,
      members: [
        { name: "Mr. Jigneshkumar Hashmukhbhai Patel", email: "service@eieinstruments.com", phone1: "7935208330", phone2: "+919909903582" },
        { name: "Mr. Nikhil Hadiyel", email: "tmelectrical@eieinstruments.com", phone1: "7935208377", phone2: "+919664861317" },
      ],
    },
    {
      title: "NABL Calibration Laboratory",
      cols: 2,
      members: [
        { name: "Mr. Bhadreshkumar Ramanbhai Patel", email: "dp@eieinstruments.com", phone1: "7935208324", phone2: "+919898919671" },
        { name: "Mr. Parimal D. Solanki", email: "parimal@eieinstruments.com", phone1: "7935208316", phone2: "+919227230010" },
      ],
    },
  ];

  const officeAddresses = [
    {
      title: "Calibration Laboratory",
      address: "Survey No. 1098, Nr. Mahakali Temple, Opp. Primary School, Village Kubadthal, Tal: Daskroi, Ahmedabad Gujarat - 382430",
      email: "sales@eieinstruments.com",
      phone: "7935208300",
    },
    {
      title: "Manufacturing Plant",
      address: "Survey No. 1098, Nr. Mahakali Temple, Opp. Primary School, Village Kubadthal, Tal: Daskroi, Ahmedabad Gujarat - 382430",
      email: "info@eieinstruments.com",
      phone: "7935208300",
    },
    {
      title: "Registered Office",
      address: "A-1301 BVR Ek, Opp. Hotel Inder Residency, Nr. Gujarat College Ellisbridge, Ahmedabad Gujarat - 380006",
      email: "info@eieinstruments.com",
      phone: "7966211234",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-12">
      {/* Contact Hero */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 text-center"
        >
          <h1 className="text-5xl font-bold text-red-600 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to help! Reach out to us for any product inquiries, technical questions, or service support.
          </p>
        </motion.div>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3575163576464!2d72.7545427!3d23.0280062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7d9cf5031f19%3A0x9144811f403672c6!2sEIE%20Instruments%20Private%20Limited%20-%20Kubadthal!5e0!3m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>

      {/* Office Addresses */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Office & Plant Addresses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officeAddresses.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="font-semibold text-xl text-red-700 mb-4">{office.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{office.address}</p>
              <div className="space-y-3">
                <a href={`mailto:${office.email}`} className="block text-red-600 hover:underline">📧 {office.email}</a>
                <a href={`tel:${office.phone}`} className="block text-red-600 hover:underline">📞 {office.phone}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Contacts */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Team Contacts</h2>
        {teamSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">{section.title}</h3>
            <div className={`grid grid-cols-1 md:grid-cols-${section.cols} gap-6`}>
              {section.members.map((p, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all"
                >
                  <p className="font-semibold text-lg mb-4">{p.name}</p>
                  <div className="space-y-3 text-gray-700">
                    <a href={`mailto:${p.email}`} className="block hover:text-red-600">📧 {p.email}</a>
                    <a href={`tel:${p.phone1}`} className="block hover:text-red-600">📞 {p.phone1}</a>
                    {p.phone2 && <a href={`tel:${p.phone2}`} className="block hover:text-red-600">📞 {p.phone2}</a>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Inquiry Form */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100"
        >
          <h2 className="text-4xl font-bold text-red-600 text-center mb-6">Place Your Product Inquiry Here</h2>
          <p className="text-center text-gray-600 mb-8">We will get back to you shortly</p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setSubmitStatus("");

              const formData = new FormData(e.target);
              formData.append("to", "info@eieinstruments.com");

              try {
                const res = await fetch("/api/send-email", {
                  method: "POST",
                  body: formData,
                });

                const result = await res.json();

                if (result.success) {
                  setSubmitStatus("Your inquiry has been sent successfully!");
                  e.target.reset();
                } else {
                  setSubmitStatus("Failed to send inquiry. Please try again later.");
                }
              } catch (error) {
                setSubmitStatus("Network error. Please check your connection.");
              }

              setLoading(false);
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">Person Name</label>
                <input name="name" type="text" required className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block font-medium mb-2">Organization Name</label>
                <input name="org" type="text" required className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="Organization Name" />
              </div>
              <div>
                <label className="block font-medium mb-2">Designation</label>
                <input name="designation" type="text" className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="Designation" />
              </div>
              <div>
                <label className="block font-medium mb-2">City</label>
                <input name="city" type="text" className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="City" />
              </div>
              <div>
                <label className="block font-medium mb-2">GST Number</label>
                <input name="gst" type="text" className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="GST number" />
              </div>
              <div>
                <label className="block font-medium mb-2">Email</label>
                <input name="email" type="email" required className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block font-medium mb-2">Mobile Number</label>
                <input name="mobile" type="tel" className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block font-medium mb-2">Landline Number</label>
                <input name="landline" type="tel" className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter your landline number" />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">Requirements</label>
              <textarea name="requirements" required className="w-full p-4 border border-gray-300 rounded-3xl h-32 focus:ring-2 focus:ring-red-500 outline-none" placeholder="Write your requirements here"></textarea>
            </div>

            <div>
              <label className="block font-medium mb-2">Message</label>
              <textarea name="message" className="w-full p-4 border border-gray-300 rounded-3xl h-32 focus:ring-2 focus:ring-red-500 outline-none" placeholder="Write your message here"></textarea>
            </div>

            <div>
              <label className="block font-medium mb-2">Upload Your List</label>
              <input name="file" type="file" className="w-full p-4 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-red-500 outline-none" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-4 rounded-3xl text-lg font-semibold transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitStatus && (
              <div className={`p-4 rounded-2xl text-center font-medium ${submitStatus.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {submitStatus}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}