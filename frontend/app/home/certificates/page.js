"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import ImageModal from "@/app/components/ImageModal";

export default function CertificatesPage() {
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const categories = [
    {
      title: "Legal Documents",
      items: [
        { label: "Factory Licence", img: "/certificates/factory-licence.jpg" },
        { label: "GST Certificate", img: "/certificates/gst.jpg" },
        { label: "Membership Certificate", img: "/certificates/membership.jpg" },
        { label: "Certificate of Incorporation", img: "/certificates/Certificate of Incorporation.png" },
        { label: "Import Export Certificate", img: "/certificates/Import Export Certificate.png" },
      ],
    },

    {
      title: "Quality Certification",
      items: [
        { label: "Quality Policy", img: "/certificates/quality.jpg" },
        { label: "Aggregates", img: "/certificates/aggregates.jpg" },
        { label: "GMP", img: "/certificates/GMP.jpg" },
        { label: "CE - CTM", img: "/certificates/CE - CTM.jpg" },
        { label: "ISO - 13485", img: "/certificates/ISO - 13485.jpg" },
        { label: "ISO 9001:2015", img: "/certificates/ISO.png" },
        { label: "ISI - Slump Test", img: "/certificates/slump-test.jpg" },
        { label: "CE - Hot Air Oven", img: "/certificates/hot-air-oven.jpg" },
        { label: "CE - Humidity Chamber", img: "/certificates/humidity-chamber.jpg" },
        { label: "CE - Paper Tube Tester", img: "/certificates/papaer-tube.jpg" },
        { label: "ISI - Cylindrical Measures", img: "/certificates/cylindrical.jpg" },
        { label: "ISI - Pycnometer", img: "/certificates/pycnometer.jpg" },
        { label: "ISI - Vicat Needle", img: "/certificates/vicat-needle.jpg" },
        { label: "ISI - Air Permeability", img: "/certificates/air-permeability.jpg" },
        { label: "Brookfield Authorization", img: "/certificates/brookfield.jpg" },
        { label: "ZED Gold Certificate", img: "/certificates/zed-gold.jpg" },
        { label: "ZED Bronze Certificate", img: "/certificates/zed-bronze.jpg" },
        { label: "ISI - Flakiness Gauge", img: "/certificates/flakiness-gauge.jpg" },
        { label: "ISI - Bulk Density", img: "/certificates/bulk-density.jpg" },
      ],
    },

    {
      title: "Performance Certification",
      items: [
        { label: "GST Certificate of Appreciation", img: "/certificates/gst-appreciation.jpg" },
        { label: "Customer Feedback", img: "/certificates/customer.jpg" },
        { label: "Member Certificate", img: "/certificates/member-certificate.jpg" },
      ],
    },

    {
      title: "Others",
      items: [
        { label: "NABL Certificate", img: "/certificates/accreditation.jpg" },
        { label: "NPL Calibration Certificate", img: "/certificates/calibration.jpg" },
      ],
    },
  ];

  return (
    <div className="p-10 space-y-16 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-center text-[#800000] tracking-wide mb-10">
        Certificates
      </h1>

      {categories.map((cat, i) => (
        <div key={i}>

          <h2
            className="text-2xl font-semibold text-center mb-8 text-[#800000] tracking-wide"
            data-aos="fade-down"
          >
            {cat.title}
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {cat.items.map((item, index) => (
              <li
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 60}
                className="cursor-pointer group"
                onClick={() => setModalImg(item.img)}
              >

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">

                  <div className="w-full h-56 flex items-center justify-center bg-white">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="text-center bg-gray-50 py-3 text-[#800000] font-medium group-hover:underline">
                    {item.label}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <ImageModal imgSrc={modalImg} onClose={() => setModalImg(null)} />
    </div>
  );
}
