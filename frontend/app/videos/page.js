"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VideosPage() {
  const videos = [
    {
      title: "Demonstration Of Servo Hydraulic TMT Bar Universal Testing Machine | IS 1608 |",
      link: "https://www.youtube.com/watch?v=9lU6PwuxiDA",
    },
    {
      title: "How To Assemble Orsat Gas Apparatus With Three Pipettes",
      link: "https://www.youtube.com/watch?v=AAVjm8FR_4E",
    },
    {
      title:
        "Automatic soil compactor as per BIS 2770 - Part VII & VIII",
      link: "https://www.youtube.com/watch?v=ccbGoflH-kw",
    },
    {
      title:
        "Gum Content By Jet Evaporation Method With Steam Super Heater | ASTM D381 |",
      link: "https://www.youtube.com/watch?v=d1ZDVUvrvp8",
    },
    {
      title:
        "Flow Box Test As Per ASTM C 1339",
      link: "https://www.youtube.com/watch?v=yWcX-0YcW8o&t=1s",
    },
    {
      title:
        "Apparatus Gum Content By Jet Evaporation Bath With Air Compressor ASTM D 381",
      link: "https://www.youtube.com/watch?v=I1H6DjQIG0E",
    },
    {
      title:
        "Eie Instruments | Set Up Of Geotextile Laboratory | Iit Delhi |",
      link: "https://www.youtube.com/watch?v=B9u6vEObbxk",
    },
    {
      title:
        "Flow Table - Cement-ASTM C 230 -Motorised",
      link: "https://www.youtube.com/watch?v=dxetlb6h6Ww",
    },
    {
      title:
        "Thermal Conductivity Appartus",
      link: "https://www.youtube.com/watch?v=KQ7akOjym_A",
    },
    {
      title:
        "Mullen Burst Tester For Fabric | Hmi Touch Screen | Eie Instruments | ASTM D3786 | ISO 13938-2 |",
      link: "https://www.youtube.com/watch?v=BeN5vPm_4yo",
    },
    {
      title:
        "EIE Instruments | ASTM D4751 - AOS Test Procedure | Sieve & Collection Pan Arrangement (Option 1)|",
      link: "https://www.youtube.com/watch?v=uAcIN-NV-pM",
    },
    {
      title:
        "Compression Testing Machine With Builtin Vernier, Electronic Balance And Printer",
      link: "https://www.youtube.com/watch?v=CF4SFvV8ssM",
    },
    {
      title:
        "Shear Adhesion Bond Strength Test | BIS 15477:2019 | EN 12003, EN 12004",
      link: "https://www.youtube.com/watch?v=uo20OUNuAZA",
    },
    {
      title:
        "Tumbler Drum Test Aparatus For The Coal Testing",
      link: "https://www.youtube.com/watch?v=tl2oKBZTxsA",
    },
    {
      title:
        "Glimpses Of Inauguration Ceremony | EIE Kubadthal Plant",
      link: "https://www.youtube.com/watch?v=j95YjkmtxGA",
    },
    {
      title:
        "Compression Testing Machine With Automatic Pace Rate Control - EIE MAKE",
      link: "https://www.youtube.com/watch?v=Brn-SAPyxts",
    },
    {
      title:
        "Compression Testing Machine With Automatic Pace Rate Controlled - Servo Controlled",
      link: "https://www.youtube.com/watch?v=muv-Q12jlE0",
    },
    {
      title:
        "Eie Instruments | Overview Of Infrastructure | 02 Production Units | 01 Corporate Office |",
      link: "https://www.youtube.com/watch?v=S51FTUR26_Y",
    },
    {
      title:
        "Standard Penetrometer Fully Automatic For Bitumen, Grease, Soap And Many More Application.",
      link: "https://www.youtube.com/watch?v=WEWXyfBKpn0",
    },
    {
      title:
        "Manhole Cover Testing Machine As Per BIS 12592 And As Per EN 124",
      link: "https://www.youtube.com/watch?v=qh9FK--oh8Q",
    },
    {
      title:
        "Paver Block Flexural, Splitting Tensile And Compressive Strength",
      link: "https://www.youtube.com/watch?v=AJ8FH2oa-K0",
    },
    {
      title:
        "Concrete / Block Cutting Machine",
      link: "https://www.youtube.com/watch?v=ZXQPEQc7c7A",
    },
    {
      title:
        "Automatic Cum Manual Mortar Mixer | En 196-1, En 196-3, IS 10890, ASTM C307 |",
      link: "https://www.youtube.com/watch?v=BWjtJDU6TIQ",
    },
    {
      title:
        "Eie Instruments | Hand Operated Compression Testing Machine With Digital Readout Unit |",
      link: "https://www.youtube.com/watch?v=fNHbNtG6fik",
    },
    {
      title:
        "Constant & Falling Head Geotextile Permeability Test Apparatus | Astm D4491 |",
      link: "https://www.youtube.com/watch?v=DwRL8yE2onI",
    },
    {
      title:
        "Grease Penetration Test | ASTM D217 | IP 50 |",
      link: "https://www.youtube.com/watch?v=lZkBpCvRt38",
    },
    {
      title:
        "Eie Instruments | Tensile Testing Machine | Astm D412 | Astm D638 | For Rubber & Elastomer |",
      link: "https://www.youtube.com/watch?v=8-B8fy5nh8E",
    },
    {
      title:
        "Eie Instruments | Computerized Direct Shear Test Aparatus | Pc Software | Astm D3080 | IS 2720 |",
      link: "https://www.youtube.com/watch?v=GXUmIBZjgO0",
    },
    {
      title:
        "Electrical Cbr Testing Machine | Installation & Commissioning | Proving Ring |",
      link: "https://www.youtube.com/watch?v=hCWSTXztzSw",
    },
    {
      title:
        "Bitumen Extractor | Variable Speed | ASTM D2172 | EN 12697-1 |",
      link: "https://www.youtube.com/watch?v=nuI4w9dBLxc",
    },
    {
      title:
        "Gyratory Sieve Shaker | Particle Size Distribution | Testing Instruments |",
      link: "https://www.youtube.com/watch?v=USDLDLtLH6g",
    },
    {
      title:
        "Asphalt Recovery Method By Abson Method | Astm D1856 | Astm D2172 | Binder Recovery | Aashto T170 |",
      link: "https://www.youtube.com/watch?v=GIHnfobtcEs&t=1s",
    },
    {
      title:
        "Triaxial Test Machine | ASTM D2850 | IS: 2720 (Part Xi & Xii) |",
      link: "https://www.youtube.com/watch?v=ly6QK0RU3ME",
    },
    {
      title:
        "Eie Instruments | Short Presentation | Categories We Serve |",
      link: "https://www.youtube.com/watch?v=RH4zg9hRmLw",
    },
    {
      title:
        "Corrugated Box Compression Strength Tester | Hmi & Plc | Fully Automatic |",
      link: "https://www.youtube.com/watch?v=2OMrqME_9uU",
    },
    {
      title:
        "Fully Automatic CTM (Compression Testing Machine)",
      link: "https://www.youtube.com/watch?v=9n-Ac_T_18k",
    },
    {
      title:
        "Digital Marshall Stability Test Apparatus | ASTM D6927 |",
      link: "https://www.youtube.com/watch?v=kzN7eFYgfZ8",
    },
    {
      title:
        "How To Control The Pace Rate In EIE Make Digital CTM TM-042-D",
      link: "https://www.youtube.com/watch?v=fYdvuoFhh-w",
    },
    {
      title:
        "Bursting Strength Tester | For Paper & Corrugated Boxes | Fully Automatic |",
      link: "https://www.youtube.com/watch?v=kuzGNTfcxmI",
    },
    {
      title:
        "Water Separability Test Apparatus | Astm D1401 | Petroleum Test | Emulsion Test |",
      link: "https://www.youtube.com/watch?v=Rth0G4qVYRs",
    },
    {
      title:
        "Laboratory Pulverizer | To Produce Mesh Size Powder Of Rock, Stone, Coal, Cock |",
      link: "https://www.youtube.com/watch?v=V8qVzuhzdVE",
    },
    {
      title:
        "Jaw Crusher | To Crush Rock, Stone, Coal, Iron Ore Into Small Size |",
      link: "https://www.youtube.com/watch?v=QHV-OZIuIkA",
    },
    {
      title:
        "Jar Test Apparatus | Flocculator | 06 Place Positions With RPM Indicator |",
      link: "https://www.youtube.com/watch?v=X7YN_XboB0E",
    },
    {
      title:
        "Humidity Chamber | Stability Chamber | Conditioning Chamber | Temp & Rh Chamber |",
      link: "https://www.youtube.com/watch?v=qbnFJWNku0s",
    },
    {
      title:
        "Splitting Tensile Strength Of Paver Blocks And Concrete",
      link: "https://www.youtube.com/watch?v=IHyAox6awYQ",
    },
    {
      title:
        "Installation Of COMPRESSION TESTING MACHINE | CTM |",
      link: "https://www.youtube.com/watch?v=EKfQwG21Sv0",
    },
    {
      title:
        "EN ISO 10545-4 | Mor Testing Machine | IS 13630 (Part-6) |",
      link: "https://www.youtube.com/watch?v=-xRfUMpOHRw",
    },
    {
      title:
        "Paver Block Flexural Testing Machine",
      link: "https://www.youtube.com/watch?v=X77ItoFxh9c",
    },
    {
      title:
        "Apparatus For Measur. Of Surface Flatness And Straightness - Part 1 | ISO 10545 |",
      link: "https://www.youtube.com/watch?v=AU2Qw9VrXeI",
    },
    {
      title:
        "Apparatus For Measur. Of Surface Flatness And Straightness - Part 2 | ISO 10545 |",
      link: "https://www.youtube.com/watch?v=rooHRLzq2L8",
    },
    {
      title:
        "Apparatus For Measur. Of Surface Flatness And Straightness - Part 3 | ISO 10545 |",
      link: "https://www.youtube.com/watch?v=Q0MSil0mwyc",
    },
    {
      title:
        "Asphalt Content Tester | Asphalt Ignition Oven | ASTM D6307 | Aashto T308 |",
      link: "https://www.youtube.com/watch?v=KyN0YuK_Z6s",
    },
    {
      title:
        "Reflectance Meter | Whiteness Meter | Brightness Meter",
      link: "https://www.youtube.com/watch?v=GTtXOlKP-yM",
    },
    {
      title:
        "Grease Worker | Grease Penetration Test | ASTM D217 | IP 50 |",
      link: "https://www.youtube.com/watch?v=x9A01ZTn5_4",
    },
    {
      title:
        "Fully Automatic Cube Compression Testing Machine | ASTM C39, C140, C1314 | IS 14858 | AASHTO T22 |",
      link: "https://www.youtube.com/watch?v=R2fl5mx3Rek",
    },
    {
      title:
        "EIE - Animated Video CD For Entire Range Of Bitumen Testing Instruments",
      link: "https://www.youtube.com/watch?v=AL4Lg_FdBN4",
    },
    {
      title:
        "Dry Ice Making Machine - Part 1 |",
      link: "https://www.youtube.com/watch?v=upwC8jEmGm0&t=1s",
    },
    {
      title:
        "Deep Abrasion Testing Machine | En Iso 10545-6 | Is 13630 (Part-12) |",
      link: "https://www.youtube.com/watch?v=4qJnueu0g5s",
    },
    {
      title:
        "Fully Automatic Penetrometer | ASTM D5 | ASTM D217 | ASTM D1321 |",
      link: "https://www.youtube.com/watch?v=4K3hJQI7vPs",
    },
    {
      title:
        "Eie Instruments | Corporate Video |",
      link: "https://www.youtube.com/watch?v=A49xThsRn3I",
    },
    {
      title:
        "Sand Pouring Cylinder (Sand Replacement Method) | BIS 2720 (Part-28) |",
      link: "https://www.youtube.com/watch?v=t_sHYp42gYM",
    },
    {
      title:
        "How To Use Bomb Calorimeter Part-1 | BS 1016 | IP 12 | EIE Instruments |",
      link: "https://www.youtube.com/watch?v=CxosLXJE3vs",
    },
    {
      title:
        "How To Use Bomb Calorimeter Part-2 | BS 1016 | IP 12 | EIE Instruments |",
      link: "https://www.youtube.com/watch?v=INRM3-2yjb0",
    },
    {
      title:
        "Ductility Testing Machine | ASTM D113 | BIS:1208 | BIS:73 |",
      link: "https://www.youtube.com/watch?v=SxU00_wlzA4",
    },
    {
      title:
        "Thin Film Oven Test | IS 1212 | Bitumen Binder |",
      link: "https://www.youtube.com/watch?v=DubJZ55F5xY",
    },
    {
      title:
        "Tar Viscometer | IS 1206 (Part-1) | Road Tar | Cutback Bitumen |",
      link: "https://www.youtube.com/watch?v=Pm1y8z7XHvE",
    },
    {
      title:
        "Los Angeles Abrasion Testing Machine | Is 2386 | Astm C131 | Astm C535 |",
      link: "https://www.youtube.com/watch?v=YqthILRTkAs",
    },
    {
      title:
        "Softening Point Apparatus | ASTM D36 | BIS 1205 | Ring & Ball Apparatus |",
      link: "https://www.youtube.com/watch?v=wshdQfiBLHk&t=100s",
    },
    {
      title:
        "Marshal Stability Testing Machine | Astm D6927, Astm D1559 | Bituminous Mix |",
      link: "https://www.youtube.com/watch?v=Qe8GuAkU-5c",
    },
    {
      title:
        "Specific Gravity Test Of Bitumen | BIS 1202 |",
      link: "https://www.youtube.com/watch?v=Mf4ds_7SETw",
    },
    {
      title:
        "Max Specific Gravity Of Bituminous Paving Mixture | ASTM D2041 | AASHTO T209 |",
      link: "https://www.youtube.com/watch?v=Qn0WJJN5hXc",
    },
    {
      title:
        "Cleveland Flash And Fire Point Apparatus | IS 1448 (PART-IV) | ASTM D92 |",
      link: "https://www.youtube.com/watch?v=1QVoqaQr9Q0&t=3s",
    },
    {
      title:
        "Saybolt Viscometer | Bis : 3117-1998 | Bitumen Emulsion & Tar |",
      link: "https://www.youtube.com/watch?v=0mk5ljI6tTQ",
    },
    {
      title:
        "Pensky Marten Flash And Fire Point Apparatus | BIS 1209 | BIS 1448 |",
      link: "https://www.youtube.com/watch?v=PR7q4-ilENA",
    },
    {
      title:
        "Bitumen Penetrometer | ASTM D5 | BIS:1203 | Semi Automatic |",
      link: "https://www.youtube.com/watch?v=x0MERLSccNc",
    },
    {
      title:
        "Aggregate Impact Testing Machine | IS 2386 (PART-IV) | Aggregate Testing |",
      link: "https://www.youtube.com/watch?v=qwewtYO60Ao",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 lg:px-28 py-20"
    >

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-center text-3xl font-bold text-red-600"
      >
        Demonstration Videos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-gray-600 max-w-3xl mx-auto mt-4"
      >
        Get an inside look at our high-quality instruments trusted by industries worldwide.
        View instructional videos for step-by-step demonstrations and usage guidance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12 border rounded-lg overflow-hidden shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 bg-red-700 text-white font-semibold p-3 text-sm">
          <div>INSTRUMENT NAME</div>
          <div className="text-right md:text-center">VIDEO DEMO / QUOTE</div>
        </div>

        {videos.map((v, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2 border-b p-5 hover:bg-gray-50 transition"
          >
            <div className="font-semibold text-gray-800">{v.title}</div>

            <div className="flex md:flex-row flex-col gap-3 justify-end md:justify-center mt-4 md:mt-0">

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={v.link}
                target="_blank"
                className="bg-red-700 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm w-fit"
              >
                ▶ Watch Demo
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-5 py-2 rounded-md text-sm w-fit"
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
