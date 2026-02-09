"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Animate on Scroll Component
const AnimateOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.05 } // Trigger faster
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Fixed Clickable Image Thumbnail
const ClickableImageThumbnail = ({
  src,
  alt,
  isExternalLink = false,
  linkHref,
  className = "",
  noCrop = false,
  aspectRatio = "aspect-video" 
}) => {
  const thumbnailClasses = `block w-full mx-auto overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.015] ${className}`;

  const imageElement = (
    <div className={`relative w-full ${aspectRatio} bg-white ${noCrop ? "flex items-center justify-center" : ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className={`${noCrop ? "object-contain p-4" : "object-cover"} transition-transform duration-700 hover:scale-105`}
        priority={false}
      />
    </div>
  );

  if (isExternalLink) {
    return (
      <a href={linkHref} target="_blank" rel="noopener noreferrer" className={thumbnailClasses}>
        {imageElement}
      </a>
    );
  }

  return <div className={thumbnailClasses}>{imageElement}</div>;
};

export default function CalibrationValidationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900 font-sans antialiased">

      {/* Page Title */}
      <section className="pt-16 pb-20 text-center bg-gradient-to-b from-white via-red-50/30 to-zinc-50">
        <AnimateOnScroll delay={0}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-700 tracking-tight mb-6 drop-shadow-sm">
            Calibration & Validation Services
          </h1>
        </AnimateOnScroll>
      </section>

      {/* VALIDATION SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="w-full">
              <AnimateOnScroll delay={100}>
                <ClickableImageThumbnail
                  src="/images/validation-1.png"
                  alt="Pharmaceutical equipment validation process and instruments"
                  noCrop={true}
                  aspectRatio="aspect-square"
                  className="rounded-2xl shadow-xl"
                />
              </AnimateOnScroll>
            </div>

            {/* Right: Text */}
            <div className="space-y-6 text-lg leading-7 text-zinc-700">
              <AnimateOnScroll delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold text-red-800 border-l-8 border-red-200 pl-6 uppercase">
                  Validation Services
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={250}>
                <p>
                  Validation is a systematic approach, where data is collected and analyzed to confirm that a process will operate within the specified parameters, whenever required and that it will produce consistent results within the predetermined specifications. The process verifies, if the compliance and quality standards are being met by a product in real time. In short, Validation is defined as a documented program that provides a high degree of assurance that a specific process, method, instrument or system will consistently produce a result meeting pre-determined acceptance criteria.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <p>
                  In a pharmaceutical facility, the validation program establishes that a company is meeting Current Good Manufacturing Process (cGMP) guidelines that are set for the industry by concerned regulatory bodies.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={350}>
                <p>
                  Validation is concerned mainly with processes. When the same approach is applied to a machine or any equipment instead of a process, it is referred to as Qualification instead. Qualification is not limited to a Validation process, but it is a part of it. It can be further divided into Installation Qualification (IQ), Operation Qualification (OQ) or Performance Qualification (PQ).
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={400}>
                <p>
                  <strong className="font-bold text-red-700">EIE Instruments</strong> offers a wide variety of Validation Services that meet FDA, ICH, and many European standards. We are well equipped with necessary Validation Accessories & SOP to carry out On-site Validation Process for following list of Instruments in any Pharmaceutical Industries:
                </p>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Instruments List */}
          <div className="mt-12">
            <AnimateOnScroll delay={450}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  "Horizontal Steam Sterilizer (Horizontal Autoclave)",
                  "Vertical Steam Sterilizer (Vertical Autoclave)",
                  "Hot air oven",
                  "Dry Heat Sterilizer",
                  "Stability Chamber",
                  "Cooling chamber",
                  "Cold Room",
                  "Walk-In Stability chamber",
                  "Refrigerator",
                  "Freezer",
                  "SIP System",
                  "CIP System",
                  "Waterbath",
                  "Heating block",
                ].map((item, i) => (
                  <AnimateOnScroll key={item} delay={100 + i * 30}>
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-zinc-200 flex flex-col h-full">
                      <div className="p-5 text-center flex-grow flex items-center justify-center">
                        <p className="text-base font-medium text-zinc-800">{item}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Validation Documents */}
          <div className="mt-12">
            <AnimateOnScroll delay={500}>
              <h3 className="text-2xl font-bold text-red-700 mb-6 border-b border-red-200 pb-2">
                Validation Documents Include:
              </h3>
            </AnimateOnScroll>

            <AnimateOnScroll delay={550}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  "Diagram Procedures",
                  "Door Opening Studies",
                  "Result & Conclusion",
                  "Graphical Representation",
                  "Power Failure Studies",
                  "Hot & Cold Point",
                  "Recovery Studies",
                ].map((item, i) => (
                  <AnimateOnScroll key={item} delay={100 + i * 30}>
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-zinc-200 flex flex-col h-full">
                      <div className="p-5 text-center flex-grow flex items-center justify-center">
                        <p className="text-base font-medium text-zinc-800">{item}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE EIE */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateOnScroll delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 text-center mb-12">
              Why EIE's Validation Services?
            </h2>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <ul className="space-y-5">
                {[
                  "Well Trained and Qualified Engineer / Technician Team",
                  "3 decades Manufacturing experience according to GMP Guidelines",
                  "Separate QA and Documentation Department to fulfill complicated activities on priority basis",
                  "All Reporting work complies to National / International and Major Regulatory bodies like USFDA, MHRA, MCC, TGA, WHO, FDA, ISO etc",
                  "Prompt Services and Fast Reporting",
                  "On-Site Calibration & Validation Facility",
                  "Remind Customers for due date of Instrument Calibration & Equipment Validation activity by Mail/Telephonic",
                ].map((item, i) => (
                  <AnimateOnScroll key={item} delay={200 + i * 50}>
                    <li className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-red-500">
                      {item}
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>

            <AnimateOnScroll delay={300} className="order-1 lg:order-2 w-full">
              <ClickableImageThumbnail
                src="/images/validation-2.png"
                alt="EIE Instruments validation services team, engineers and laboratory"
                noCrop={true}
                aspectRatio="aspect-[3/2]"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CALIBRATION SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnScroll delay={100} className="w-full">
              <ClickableImageThumbnail
                src="/images/calibration-1.png"
                alt="EIE Instruments calibration laboratory with precision equipment"
                noCrop={true}
                aspectRatio="aspect-video"
              />
            </AnimateOnScroll>

            <div className="space-y-8 text-lg leading-relaxed text-zinc-700">
              <AnimateOnScroll delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold text-red-800 border-l-8 border-red-200 pl-6 uppercase">
                  Calibration Services
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={250}>
                <p>
                  Calibration facilities are given the highest priorities at our organization. We hold excellent technical know-how to calibrate versatile calibration parameters with National & International Traceability. EIE’s in-house Calibration Lab is accredited by NABL Authorities as per IEC/ISO : 17025 Guidelines. The Laboratory at Precise is very well equipped with the most modern and sophisticated Master Instruments / Equipment & Reference Standards, which are employed for providing precise & accurate calibration services to the prestigious clients. We provide following 2 kinds of calibration services to our esteemed clients.
                </p>
              </AnimateOnScroll>

              <ul className="list-disc ml-8 space-y-4 mt-6 text-xl font-medium marker:text-red-600">
                <AnimateOnScroll delay={300}><li>In-house Calibration Service</li></AnimateOnScroll>
                <AnimateOnScroll delay={350}><li>On-Site Calibration Service</li></AnimateOnScroll>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALIBRATION SCOPE GRID */}
      <section className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateOnScroll delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 text-center mb-16">
              Calibration Scope as per ISO/IEC 17025
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                src: "/images/thermal.png",
                alt: "Thermal calibration instruments",
                title: "Thermal Scope",
                desc: "Sensors, Thermometers, Switches, Recorders, Transmitters and Analytical Instruments such as Freezers, Refrigerators, Stability Chambers (Humidity chambers), Incubators, Ovens, Furnace, Waterbath Hygrometers etc",
              },
              {
                src: "/images/Mass.png",
                alt: "Mass calibration weights",
                title: "Mass Scope",
                desc: "Laboratory balances, F1 Class weights, F2 Class weights, M1 Class weights, M2 Class weights etc",
              },
              {
                src: "/images/Pressure.png",
                alt: "Pressure calibration equipment",
                title: "Pressure/Vacuum Scope",
                desc: "Pressure Sensors, Pressure Gages, Pressure Transducers, Pressure Switches, Vacuum Gauges, Magnehelic Gauges, Compound gauges, Recorders and more",
              },
              {
                src: "/images/Dimension.png",
                alt: "Dimensional measurement tools",
                title: "Dimension Lab Scope",
                desc: "Vernier Calipers, Rulers, Micrometers, Thickness Gauges, Dial Gauges, Depth Gauges, Level and more",
              },
              {
                src: "/images/System.png",
                alt: "System level calibrations",
                title: "System Calibrations",
                desc: "Autoclave, Lyophilizer, Centrifuge",
              },
              {
                src: "/images/Force.png",
                alt: "Force testing machine",
                title: "Force Lab Scope",
                desc: "CBR Testing machine, Marshall Stability testing machine, Compression testing machine, Tensile testing machine, Universal tensile testing machine, Load cells, Proving Rings etc",
              },
              {
                src: "/images/Volume.png",
                alt: "Volume measurement devices",
                title: "Volume Scope",
                desc: "Beakers, Funnels, Pipettes, Burettes, etc",
              },
              {
                src: "/images/Electro-Technical.png",
                alt: "Electro-technical instruments",
                title: "Electro-Technical",
                desc: "Shakers, Mixers, RPM, Timer, pH meter, Conductivity meter, ORP Meter, TDS Meter",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={100 + i * 50}>
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col h-full border border-zinc-200 hover:border-red-200">
                  <ClickableImageThumbnail
                    src={item.src}
                    alt={item.alt}
                    noCrop={true}
                    aspectRatio="aspect-square"
                    className="mb-6 border-b border-zinc-100 pb-4 shadow-none hover:scale-100"
                  />
                  <h3 className="text-xl font-bold text-red-700 text-center mb-4">{item.title}</h3>
                  <p className="text-zinc-600 text-base text-center flex-grow leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* NABL CERTIFICATE - RESIZED */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-700 mb-8 md:mb-10">
              NABL Accredited Calibration Laboratory
              <span className="block text-xl md:text-2xl text-zinc-600 font-normal mt-3">(ISO/IEC 17025: 2017)</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="max-w-xs mx-auto">
                <ClickableImageThumbnail
                src="/images/NABL Certificate of Accreditation.png"
                alt="NABL ISO/IEC 17025 Certificate"
                isExternalLink={true}
                linkHref="/images/NABL Certificate of Accreditation.png"
                noCrop={true}
                aspectRatio="aspect-[3/4]"
                className="shadow-xl border border-zinc-200 rounded-2xl"
                />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CATALOG - RESIZED */}
      <section className="py-16 bg-zinc-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-700 mb-8 md:mb-10">
              Service Catalog
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="max-w-[220px] mx-auto">
                <ClickableImageThumbnail
                src="/images/catelogue.png"
                alt="Calibration Services Catalogue"
                isExternalLink={true}
                linkHref="/images/Calibration-Catlogue-03-03-2018-03.pdf"
                noCrop={true}
                aspectRatio="aspect-[3/4]"
                className="shadow-xl border border-zinc-200 rounded-2xl"
                />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <Link
              href="/images/Calibration-Catlogue-03-03-2018-03.pdf"
              target="_blank"
              className="mt-10 inline-block px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-xl md:text-2xl font-bold rounded-xl shadow-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
            >
              View / Download Catalogue
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}