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
    name: "Atul Limited",
    logo: "/testimonials/atul-certificate.png",
    text: "Your average score is 4.8 with Excellent rating.",
    isCertificate: true,
  },
  {
    name: "Alfa Corpuscles Pvt Ltd",
    logo: "/testimonials/alfa-corpuscles.png",
    text: "We sincerely appreciate the support provided by Mr. Parvesh Patel and his team. We faced an issue with our Stability Chamber, but their prompt guidance and technical expertise helped us resolve it quickly. Their professionalism and commitment to customer satisfaction were truly commendable. Thank you for the excellent service.",
  },
  {
    name: "Hindustan Colas Ltd. - Vadodara",
    logo: "/testimonials/hindustan-colas.png",
    text: "EIE Instruments has successfully executed all the orders and we found their services prompt, efficient and satisfactory. Their instruments are of good quality and better standards.",
  },
  {
    name: "Material Testing House (India) Ltd.",
    logo: "/testimonials/mth.png",
    text: "The features and performance of 2000kN capacity fully automatic Compression Testing Machine provided by EIE instruments is Excellent.",
  },
  {
    name: "Intertek India Pvt. Ltd. (Kutch)",
    logo: "/testimonials/intertek.png",
    text: "We received all laboratory instruments in good condition by EIE Instruments own transportation service. They have overcome our all expectations !!",
  },
  {
    name: "Shree Digvijay Cement Co. Ltd.",
    logo: "/testimonials/digvijay.png",
    text: "We have evaluated your performance and as per the evaluation report, the rating observed is excellent.",
  },
  {
    name: "JMC Projects (India) Ltd. - Ahmedabad - H.O",
    logo: "/testimonials/jmc.png",
    text: "EIE Instruments offered excellent after sales services to our maintenance need and the supplied Laboratory Equipments also exhibited up-to-the mark performance.",
  },
  {
    name: "Shapoorji Pallonji & Co. Ltd. - Ahmedabad",
    logo: "/testimonials/shapoorji.png",
    text: "We have evaluated your performance and as per the evaluation report, the rating observed is excellent.",
  },
];

const container = { visible: { transition: { staggerChildren: 0.02 } } };
const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function ClientelePage() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-gray-50 to-white antialiased">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-red-800 tracking-tight mb-4">
          Our Valuable Clients
        </h2>
        <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-28"
      >
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden h-36"
          >
            <div className="relative w-full h-16 flex items-center justify-center transform group-hover:scale-95 group-hover:-translate-y-2 transition-all duration-300">
              <Image 
                src={client.logo} 
                alt={client.name} 
                fill 
                className="object-contain" 
              />
            </div>
            
            <div className="absolute inset-x-0 bottom-0 bg-red-950/95 text-white text-[11px] font-semibold p-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 max-h-full overflow-y-auto flex items-center justify-center whitespace-normal leading-tight">
              {client.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-red-800 tracking-tight mb-4">
          Client Testimonials
        </h2>
        <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((test, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
          >

            <div className="absolute left-0 top-0 h-full w-1.5 bg-red-700 rounded-l-3xl z-10"></div>

            {test.isCertificate ? (
              <div className="flex-1 p-6 flex flex-col justify-between">
                <a 
                  href={test.logo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-center mb-5 cursor-zoom-in group-hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="relative w-full max-w-[260px] mx-auto border-2 border-gray-100 rounded-xl overflow-hidden shadow-md bg-white p-1">
                    <Image
                      src={test.logo}
                      alt="Atul Limited Supplier Performance Certificate"
                      width={400}
                      height={500}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </a>

                <div className="text-center mt-2">
                  <div className="inline-flex items-center gap-1.5 bg-[#e2f7e6] text-[#007a37] text-xs font-bold px-5 py-1.5 rounded-full mb-3 shadow-sm border border-[#c1f0cb]">
                    ⭐ 4.8 / 5.0 - Excellent Rating
                  </div>
                  <h3 className="text-lg font-bold text-red-900">{test.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Supplier Performance Certificate</p>
                </div>
              </div>
            ) : (
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex justify-center mb-5">
                  <div className="relative w-20 h-20 rounded-2xl bg-gray-50 p-2 border border-gray-100 flex items-center justify-center shadow-inner">
                    <Image 
                      src={test.logo} 
                      alt={test.name} 
                      fill 
                      className="object-contain p-2" 
                    />
                  </div>
                </div>

                <h3 className="text-center font-bold text-base text-red-900 mb-4 px-2 leading-snug">
                  {test.name}
                </h3>

                <div className="relative flex-1">
                  <span className="absolute -top-4 -left-2 text-4xl text-red-200 font-serif select-none">“</span>
                  <p className="text-gray-600 text-sm leading-relaxed text-center italic relative z-10 px-3 pb-4">
                    {test.text}
                  </p>
                  <span className="absolute -bottom-6 right-0 text-4xl text-red-200 font-serif select-none">”</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}