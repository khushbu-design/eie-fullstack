"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Bharat Petroleum Corporation Limited", logo: "/clients/client1.png" },
  { name: "Gulf Oil Corporation Limited", logo: "/clients/client2.png" },
  { name: "Indian Oil Corporation Ltd. (Baroda)", logo: "/clients/client3.png" },
  { name: "Reliance Industries Ltd. - Jamnagar", logo: "/clients/client4.png" },
  { name: "Oil India Limited- Emd A/c", logo: "/clients/client5.png" },
  { name: "Ongc Limited - Ahmedabad", logo: "/clients/client6.png" },
  { name: "Agarwal Industrial Corporation Limited", logo: "/clients/client7.png" },
  { name: "Gail (India) Limited - Noida", logo: "/clients/client8.png" },
  { name: "Basf S.a - Brazil", logo: "/clients/client9.png" },
  { name: "Haldia Petrochemicals Ltd.", logo: "/clients/client10.png" },
  { name: "Numaligarh Refinery Limited", logo: "/clients/client11.png" },
  { name: "Lafarge India Ltd. - Ahmedabad", logo: "/clients/client12.png" },
  { name: "Ultratech Cement Limited", logo: "/clients/client13.png" },
  { name: "Sanghi Industries Limited - Morbi", logo: "/clients/client14.png" },
  { name: "Dalmia Cement (Bharat) Ltd. - Bangalore", logo: "/clients/client15.png" },
  { name: "Ambuja Cements Ltd - Ahmedabad", logo: "/clients/client16.png" },
  { name: "The Ramco Cements Limited - Jajpur", logo: "/clients/client17.png" },
  { name: "Shree Cement Ltd.", logo: "/clients/client18.png" },
  { name: "Birla Corporation Limited - Ahmedabad", logo: "/clients/client19.png" },
  { name: "Larsen & Toubro Ltd. - Ahmedabad Metro Rail Project (EG001)", logo: "/clients/client20.png" },
  { name: "Jmc Projects (India) Ltd. - Lakhani Town Flyover", logo: "/clients/client21.png" },
  { name: "Afcons Infrastructure Ltd - Ahmedabad", logo: "/clients/client22.png" },
  { name: "Gammon India Limited - Baroda", logo: "/clients/client23.png" },
  { name: "Hindustan Construction Company Limited", logo: "/clients/client24.png" },
  { name: "Simplex Infrastructures Ltd. - Jamnagar", logo: "/clients/client25.png" },
  { name: "Irb Infrastructure Developers Ltd.", logo: "/clients/client26.png" },
  { name: "Ivrcl Limited - Orissa", logo: "/clients/client27.png" },
  { name: "Montecarlo Limited. - Ahmedabad", logo: "/clients/client28.png" },
  { name: "Gayatri Projects Ltd. - Anand", logo: "/clients/client29.png" },
  { name: "Alpa Infrastructure Pvt. Ltd. - Rajkot", logo: "/clients/client30.png" },
  { name: "G.r Infraprojects Ltd. - Varanasi", logo: "/clients/client31.png" },
  { name: "Pepsico India Holdings Pvt. Ltd. - Mahul Plant", logo: "/clients/client32.png" },
  { name: "Reliance Consumer Products Limited - Bengaluru", logo: "/clients/client33.png" },
  { name: "Vadilal Industries Ltd.", logo: "/clients/client34.png" },
  { name: "Marico Limited - Pondicherry", logo: "/clients/client35.png" },
  { name: "Itc Ltd.", logo: "/clients/client36.png" },
  { name: "Cargill India Pvt. Ltd.", logo: "/clients/client37.png" },
  { name: "Adani Wilmar Ltd (Ahmedabad)", logo: "/clients/client38.png" },
  { name: "Havmor Ice Cream Private Limited", logo: "/clients/client39.png" },
  { name: "Euro India Fresh Foods Ltd.", logo: "/clients/client40.png" },
  { name: "Hocco Ice Cream Private Limited", logo: "/clients/client41.png" },
  { name: "INBISCO India Pvt. Ltd. - Ahmedabad", logo: "/clients/client42.png" },
  { name: "Ramdev Food Products Private Limited", logo: "/clients/client43.png" },
  { name: "Hindustan Unilever Limited - Solan", logo: "/clients/client44.png" },
  { name: "Parle Products Private Limited", logo: "/clients/client45.png" },
  { name: "Hindustan Coca-Cola Beverages Pvt. Ltd.", logo: "/clients/client46.png" },
  { name: "Adani Enterprises Ltd.", logo: "/clients/client47.png" },
  { name: "Sun Pharma Advanced Research Company Limited", logo: "/clients/client48.png" },
  { name: "Torrent Pharmaceuticals Limited - Ahmedabad", logo: "/clients/client49.png" },
  { name: "Troikaa Pharmaceuticals Ltd. - Ahmedabad", logo: "/clients/client50.png" },
  { name: "Biocon Limited - DTA", logo: "/clients/client51.png" },
  { name: "Cipla Ltd.", logo: "/clients/client52.png" },
  { name: "Divis Laboratories Limited", logo: "/clients/client53.png" },
  { name: "Zydus Cadila Healthcare Ltd", logo: "/clients/client54.png" },
  { name: "Alembic Pharmaceuticals Limited", logo: "/clients/client55.png" },
  { name: "Ajinomoto Bio-pharma Services India Pvt. Ltd.", logo: "/clients/client56.png" },
  { name: "Aegis Lifesciences Private Limited", logo: "/clients/client57.png" },
  { name: "Bellorebayire Biotech Ltd", logo: "/clients/client58.png" },
  { name: "Syngene International Ltd.", logo: "/clients/client59.png" },
  { name: "Geltec Pvt. Ltd. - Bengaluru", logo: "/clients/client60.png" },
  { name: "Alok Industries Ltd. - Silvassa", logo: "/clients/client61.png" },
  { name: "Indorama Synthetics (I) Ltd.", logo: "/clients/client62.png" },
  { name: "Sanathan Textiles Pvt. Ltd. - Mumbai", logo: "/clients/client63.png" },
  { name: "Raj Rayon Industries Ltd. - Silvassa", logo: "/clients/client64.png" },
  { name: "AYM Syntex Ltd", logo: "/clients/client65.png" },
  { name: "Oerlinkon Textile India Pvt.Ltd", logo: "/clients/client66.png" },
  { name: "Jbf Industries Limited - Athola Silvassa", logo: "/clients/client67.png" },
  { name: "Filatex India Limited - Dadra & Nagar Haveli", logo: "/clients/client68.png" },
  { name: "Superfil Products Pvt. Ltd.", logo: "/clients/client69.png" },
  { name: "The Bombay Dyeing & Manufacturing Co.Ltd - Polyester Division", logo: "/clients/client70.png" },
  { name: "Sarla Flex Inc", logo: "/clients/client71.png" },
  { name: "Kajaria Tiles Pvt Ltd", logo: "/clients/client72.png" },
  { name: "Orient Bell Ltd - Vadodara", logo: "/clients/client73.png" },
  { name: "Asian Granito India Ltd.", logo: "/clients/client74.png" },
  { name: "Somany Ceramics Limited", logo: "/clients/client75.png" },
  { name: "Rak Ceramics India Pvt. Ltd", logo: "/clients/client76.png" },
  { name: "Varmora Granito Private Limited", logo: "/clients/client77.png" },
  { name: "H & R Johnson India", logo: "/clients/client78.png" },
  { name: "Bajaj Tiles", logo: "/clients/client79.png" },
  { name: "Jk Lakshmi Cement Ltd. - Ahmedabad", logo: "/clients/client80.png" },
  { name: "Schneider Electric India Pvt.Ltd.", logo: "/clients/client81.png" },
  { name: "Suzlon Energy Limited", logo: "/clients/client82.png" },
  { name: "Nirma University", logo: "/clients/client83.png" },
  { name: "Godrej Industries Ltd.", logo: "/clients/client84.png" },
  { name: "Essar Projects Png Ltd.", logo: "/clients/client85.png" },
];

const testimonials = [
  {
    name: "Hindustan Colas Ltd. - Vadodara",
    logo: "/testimonials/hindustan-colas.png",
    text:
      "EIE Instruments has successfully executed all the orders and we found their services prompt, efficient and satisfactory. Their instruments are of good quality and better standards.",
  },
  {
    name: "Material Testing House (India) Ltd.",
    logo: "/testimonials/mth.png",
    text:
      "The features and performance of 2000kN capacity fully automatic Compression Testing Machine provided by EIE instruments is Excellent.",
  },
  {
    name: "Intertek India Pvt. Ltd. (Kutch)",
    logo: "/testimonials/intertek.png",
    text:
      "We received all laboratory instruments in good condition by EIE Instruments own transportation service. We really appreciate EIE service for Timely delivery and also appreciate its nice & innovative design of laboratory testing equipments. They have overcome our all expectations !!",
  },
  {
    name: "Shree Digvijay Cement Co. Ltd.",
    logo: "/testimonials/digvijay.png",
    text:
      "We have evaluated your performance and as per the evaluation report, the rating observed is excellent. We wish to convey our thanks and request you to keep the same performance standard in future as well.",
  },
  {
    name: "JMC Projects (India) Ltd. - Ahmedabad - H.O",
    logo: "/testimonials/jmc.png",
    text:
      "EIE Instruments offered excellent after sales services to our maintenance need and the supplied Laboratory Equipments also exhibited up-to-the mark performance.",
  },
  {
    name: "Shapoorji Pallonji & Co. Ltd. - Ahmedabad",
    logo: "/testimonials/shapoorji.png",
    text:
      "We have evaluated your performance and as per the evaluation report, the rating observed is excellent. We wish to convey our thanks and request you to keep the same performance standard in future as well.",
  },
];

const container = { visible: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientelePage() {
  return (
    <div className="px-6 md:px-20 py-24 bg-white">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-red-700 mb-16">
        Our Valuable Clients
      </h2>

      {/* CLIENT LOGO GRID */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10"
      >
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative group bg-white p-4 rounded-xl border shadow-sm hover:shadow-lg transition"
          >
            <div className="relative w-full h-20 flex items-center justify-center">
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </div>

            <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-center p-4 text-sm font-medium transition rounded-xl">
              {client.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SPACING */}
      <div className="my-24"></div>

      {/* TESTIMONIAL TITLE */}
      <h2 className="text-4xl font-bold text-center text-red-700 mb-16">
        Client Testimonials
      </h2>

      {/* TESTIMONIAL GRID */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {testimonials.map((test, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="bg-white rounded-2xl border shadow p-8 relative"
          >

            <div className="absolute left-0 top-0 h-full w-2 bg-red-600 rounded-l-2xl"></div>

            {/* LOGO */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image src={test.logo} alt={test.name} fill className="object-contain" />
            </div>

            {/* TITLE */}
            <h3 className="text-center font-semibold text-lg text-red-700 mb-3">
              {test.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              {test.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
