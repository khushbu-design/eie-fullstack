"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ManufacturingPage() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const galleries = [
    {
      id: "gallery1",
      title: "Manufacturing Facilities",
      images: [
        { src: "/images/manufacture-1.jpg", alt: "Manufacturing Workshop 1" },
        { src: "/images/manufacture-2.jpg", alt: "Manufacturing Workshop 2" },
        { src: "/images/manufacture-3.jpg", alt: "Manufacturing Workshop 3" },
        { src: "/images/manufacture-4.jpg", alt: "Manufacturing Workshop 4" },
      ],
      content: [
        "Technology is prominent to us and we believe that it has always assisted mankind in reducing human errors while exercising & executing precise measurement. Hence, advanced manufacturing facilities have always been given the foremost priority at our organization, which form the basis of fabricating world-class & technologically superior products in the field of measurement and testing. Thus, to support this cause, EIE Instruments has employed several dedicated workshops for manufacturing quality laboratory testing products at different regions in Ahmedabad, India.",
        "Each dedicated workshop is equipped with the latest machineries and tools to preserve the benchmark of producing most efficient and cost-effective products. Each individual workshop produces only specified category of testing products. Combined production from all individual workshops & factory plants broadens our horizon to fabrication of versatile laboratory testing equipment. Calibration labs are also erected with the appropriate preliminary standards and systematic approach. The calibration labs at EIE are NABL certified & one of its kind in entire nation.",
      ],
    },
    {
      id: "gallery2",
      title: "Workshops & Infrastructure",
      images: [
        { src: "/images/manufacture-5.jpg", alt: "Factory at Kathwada 1" },
        { src: "/images/manufacture-6.jpg", alt: "Factory at Kathwada 2" },
        { src: "/images/manufacture-7.jpg", alt: "Factory at Kathwada 3" },
        { src: "/images/manufacture-8.jpg", alt: "Factory at Kathwada 4" },
      ],
      content: [
        "EIE - Factory plant at Kathwada centre stretches up to 27,000 sq. feet with complete epoxy coating to provide a clean environment. A two-storey building spread across broad landscape is the proof of our rapid expansion. We have incorporated a huge infrastructure with all amenities and favorable working conditions for employees. A well-furnished Conference room is integrated to carry out training sessions on technical matters for the concerned employees as well as to conduct important meetings of the company's managing directors and CEOs. A well-organized product showroom is also kept on display, where the visiting customers can examine the finished products in person and get demonstrated about their functioning and features.",
        "Quality Control is integrated into the manufacturing process & we regularly perform Quality Assurance Audits to ensure systems are intact. The property at Khokhara centre is extended in the area of 3000 square feet. Civil engineering laboratory testing instruments are being manufactured at Khokhara centre while General laboratory testing instruments and pharmaceutical testing products are being manufactured at Kathwada centre. All the workshops at EIE Instruments are facilitated with in-house fundamental equipment such as hydraulic cutting machine, hydraulic pressing machine, spot welding machine, argon welding machine, lathe machine, shearing machine etc. to carry out fabrication process.",
      ],
    },
    {
      id: "gallery3",
      title: "Quality Control & Technology",
      images: [
        { src: "/images/manufacture-9.jpg", alt: "Quality Control 1" },
        { src: "/images/manufacture-10.jpg", alt: "Quality Control 2" },
        { src: "/images/manufacture-11.jpg", alt: "Quality Control 3" },
        { src: "/images/manufacture-12.jpg", alt: "Quality Control 4" },
      ],
      content: [
        "EIE has always remained an active manufacturer. It has adopted various international systems like TQM (Total Quality Management) and Six Sigma to fulfill the legal requirements of fabricating testing products for domestic and international markets as well as to verify the quality of individual products. Through its quality checking process, we have employed a dedicated team of Mechanical Engineers, Instrumentation & Control Engineers, Electrical Engineers, and Electronics Engineers for equipment design and production. Maintenance of technical documents is done in digital format for ease of data transfer, revision, and readability.",
      ],
    },
    {
      id: "gallery4",
      title: "Eco-Friendly Initiatives",
      images: [
        { src: "/images/manufacture-13.jpg", alt: "Eco-Friendly Workspace 1" },
        { src: "/images/manufacture-14.jpg", alt: "Eco-Friendly Workspace 2" },
        { src: "/images/manufacture-15.jpg", alt: "Eco-Friendly Workspace 3" },
        { src: "/images/manufacture-16.jpg", alt: "Eco-Friendly Workspace 4" },
      ],
      content: [
        "Constructing and managing all administrative buildings & workshops in a sustainable and environmental-friendly fashion, EIE has covered its entire landscape and infrastructure with gardens & indoor plants to significantly preserve employees' health, lower workplace stress, and enhance productivity. This shows our pioneer step towards being an eco-friendly organization.",
      ],
    },
  ];

  const processSteps = [
    "Acquisition of Raw Materials",
    "Autocad designing & fabrication process",
    "Assembling & painting (powder coating)",
    "Establishing Electrical connection",
    "Testing, packaging and dispatch",
  ];

  return (
    <div className="container mx-auto py-12 px-4 space-y-16">

      {galleries.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-red-700">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {section.images.map((img, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setZoomedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
              </motion.div>
            ))}
          </div>
          {section.content.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
          ))}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-semibold text-red-600">The complete manufacturing process at EIE:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {processSteps.map((step, i) => <li key={i}>{step}</li>)}
        </ul>
        <h6 className="text-gray-500 mt-4">
          EIE Instruments | Overview Of Infrastructure | 02 Production Units | 01 Corporate Office
        </h6>
        <a
          href="https://www.youtube.com/watch?v=S51FTUR26_Y"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline"
        >
          Watch Our Manufacturing Overview Video
        </a>
      </motion.div>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute -top-10 right-0 text-white text-5xl hover:text-gray-300 transition"
              >
                <X className="w-12 h-12" />
              </button>
              <Image
                src={zoomedImage}
                alt="Zoomed Image"
                width={1600}
                height={1200}
                className="rounded-3xl shadow-3xl max-h-[90vh] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
