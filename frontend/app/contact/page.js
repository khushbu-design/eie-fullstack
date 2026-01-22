"use client";
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
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 flex flex-col items-center py-10 space-y-20">
      {/* CONTACT DETAILS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-8 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Contact Us</h2>
        <p className="text-black mb-4 leading-relaxed text-center">
          We’re here to help! Reach out to us for any product inquiries, technical questions, or service support.
        </p>
        <div className="space-y-4 text-black text-center">
          <div>
            <strong>Factory Address:</strong>
            <p>Survey No. 1098, Nr. Mahakali Temple, Opp. Primary School, Village Kubadthal, Tal : Daskroi, Ahmedabad Gujarat - 382430</p>
          </div>
          <div>
            <strong>Phone:</strong>
            <a href="tel:+917935208300" className="text-black hover:underline">
              079-35208300
            </a>
          </div>
          <div>
            <strong>Email:</strong>
            <a href="mailto:info@eieinstruments.com" className="text-black hover:underline">
              info@eieinstruments.com
            </a>
          </div>
        </div>
        <motion.div
          className="mt-6 rounded-2xl overflow-hidden shadow-md border h-64"
          whileHover={{ scale: 1.02 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3575163576464!2d72.7545427!3d23.0280062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7d9cf5031f19%3A0x9144811f403672c6!2sEIE%20Instruments%20Private%20Limited%20-%20Kubadthal!5e0!3m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </motion.div>
      </motion.div>

      {/* OFFICE & PLANT ADDRESSES */}
      <div className="w-full max-w-6xl p-6">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Office & Plant Addresses</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {officeAddresses.map((office, idx) => (
            <motion.div
              key={idx}
              className="border p-6 rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg hover:scale-105 transition transform"
            >
              <p className="font-semibold mb-2 text-black">{office.title}</p>
              <p className="text-black mb-2">{office.address}</p>
              <p className="text-black">
                📧{" "}
                <a href={`mailto:${office.email}`} className="text-black hover:underline">
                  {office.email}
                </a>
              </p>
              <p className="text-black">
                📞{" "}
                <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-black hover:underline">
                  {office.phone}
                </a>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* TEAM CONTACTS */}
      <div className="w-full max-w-6xl p-6">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Team Contacts</h2>
        {teamSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-center text-black mb-6">{section.title}</h3>
            <div className={`grid grid-cols-1 md:grid-cols-${section.cols} gap-6`}>
              {section.members.map((p, i) => (
                <motion.div
                  key={i}
                  className="border p-5 rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg hover:scale-105 transition transform"
                >
                  <p className="font-semibold text-black">{p.name}</p>
                  <p className="text-black">
                    📧{" "}
                    <a href={`mailto:${p.email}`} className="text-black hover:underline">
                      {p.email}
                    </a>
                  </p>
                  <p className="text-black">
                    📞{" "}
                    <a href={`tel:${p.phone1.replace(/\D/g, '')}`} className="text-black hover:underline">
                      {p.phone1}
                    </a>
                  </p>
                  {p.phone2 && (
                    <p className="text-black">
                      📞{" "}
                      <a href={`tel:${p.phone2.replace(/\D/g, '')}`} className="text-black hover:underline">
                        {p.phone2}
                      </a>
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* PRODUCT INQUIRY FORM */}
      <motion.div
        className="w-full max-w-6xl bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-8 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Place Your Product Inquiry Here</h2>

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
          className="space-y-5 text-black"
        >
          <div>
            <label className="block font-medium mb-1">Person Name</label>
            <input name="name" type="text" required className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block font-medium mb-1">Organization Name</label>
            <input name="org" type="text" required className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Organization Name" />
          </div>
          <div>
            <label className="block font-medium mb-1">Designation</label>
            <input name="designation" type="text" className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Designation" />
          </div>
          <div>
            <label className="block font-medium mb-1">City</label>
            <input name="city" type="text" className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="City" />
          </div>
          <div>
            <label className="block font-medium mb-1">GST Number</label>
            <input name="gst" type="text" className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="GST number" />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input name="email" type="email" required className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block font-medium mb-1">Mobile Number</label>
            <input name="mobile" type="tel" className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block font-medium mb-1">Landline Number</label>
            <input name="landline" type="tel" className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Enter your landline number" />
          </div>
          <div>
            <label className="block font-medium mb-1">Requirements</label>
            <textarea name="requirements" required className="w-full p-3 rounded-2xl border h-32 resize-none focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Write your requirements here"></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea name="message" className="w-full p-3 rounded-2xl border h-32 resize-none focus:ring-2 focus:ring-red-500 outline-none transition" placeholder="Write your message here"></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Upload Your List</label>
            <input name="file" type="file" className="w-full p-3 rounded-2xl border focus:ring-2 focus:ring-red-500 outline-none transition" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white py-3 rounded-2xl text-lg font-semibold transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitStatus && (
            <div className={`p-3 rounded-xl text-center font-medium ${submitStatus.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {submitStatus}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}