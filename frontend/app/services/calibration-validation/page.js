"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react'; 

const AnimateOnScroll = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); 
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) {
         observer.unobserve(domRef.current);
      }
    };
  }, []);

  const animationClasses = `
    transition-all duration-400 ease-out 
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `;

  return (
    <div 
      ref={domRef} 
      className={`${animationClasses} ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function CalibrationValidationPage() {
  const ClickableImageThumbnail = ({
    src,
    alt,
    width,
    height,
    isExternalLink = false,
    linkHref,
  }) => {
    const thumbnailClasses =
      "inline-block max-w-xs cursor-pointer overflow-hidden rounded-md shadow-lg hover:shadow-xl transition transform hover:scale-[1.03] duration-500";

    const imageElement = (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 600px) 100vw, 500px" 
        className="w-full h-auto"
      />
    );

    if (isExternalLink) {
      return (
        <a href={linkHref} target="_blank" rel="noopener noreferrer" className={thumbnailClasses}>
          {imageElement}
        </a>
      );
    }
    
    return (
      <div className={thumbnailClasses}>
        {imageElement}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800">

      <section className="text-center py-12">
        <AnimateOnScroll delay={0}>
          <h1 className="text-4xl font-bold text-red-500 mb-6 transition duration-300 hover:text-red-900">
            Calibration & Validation Services
          </h1>
        </AnimateOnScroll>

        <div className="w-full max-w-4xl mx-auto mb-10 flex justify-center">
          <AnimateOnScroll delay={100}>
            <ClickableImageThumbnail
              src="/images/validation-1.png"
              alt="Validation Services"
              width={1200}
              height={600}
            />
          </AnimateOnScroll>
        </div>

        <div className="max-w-4xl mx-auto text-left space-y-4 leading-relaxed px-4">
          <AnimateOnScroll delay={200}>
            <h2 className="text-2xl font-semibold text-red-700 mt-8">
              Validation Services
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={250}><p>
            Validation is a systematic approach, where data is collected and analyzed to confirm that a process will operate within the specified parameters, whenever required and that it will produce consistent results within the predetermined specifications. The process verifies, if the compliance and quality standards are being met by a product in real time. In short, Validation is defined as a documented program that provides a high degree of assurance that a specific process, method, instrument or system will consistently produce a result meeting pre-determined acceptance criteria.
          </p></AnimateOnScroll>
          
          <AnimateOnScroll delay={300}><p>
            In a pharmaceutical facility, the validation program establishes that a company is meeting Current Good Manufacturing Process (cGMP) guidelines that are set for the industry by concerned regulatory bodies.
          </p></AnimateOnScroll>
          
          <AnimateOnScroll delay={350}><p>
            Validation is concerned mainly with processes. When the same approach is applied to a machine or any equipment instead of a process, it is referred to as Qualification instead. Qualification is not limited to a Validation process, but it is a part of it. It can be further divided into Installation Qualification (IQ), Operation Qualification (OQ) or Performance Qualification (PQ).
          </p></AnimateOnScroll>
          
          <AnimateOnScroll delay={400}><p>
            <b>EIE Instruments </b> offers a wide variety of Validation Services that meet FDA, ICH, and many European standards. We are well equipped with necessary Validation Accessories & SOP to carry out On-site Validation Process for following list of Instruments in any Pharmaceutical Industries:
          </p></AnimateOnScroll>

          <ul className="list-disc ml-8 space-y-1">
            {[
              "Horizontal Steam Sterilizer", "Dry Heat Sterilizer", "Stability Chamber", 
              "Freezer", "Waterbath", "Vertical Steam Sterilizer", "Cooling chamber", 
              "Walk-In Stability chamber", "SIP System", "Heating block", "Hot air oven", 
              "Cold Room", "Refrigerator", "CIP System"
            ].map((item, index) => (
              <AnimateOnScroll key={item} delay={450 + index * 40}>
                <li>{item}</li>
              </AnimateOnScroll>
            ))}
          </ul>

          <AnimateOnScroll delay={1000}><h3 className="text-xl font-semibold mt-6">Validation Documents Include:</h3></AnimateOnScroll>
          <ul className="list-disc ml-8 space-y-1">
            {[
              "Diagram Procedures", "Door Opening Studies", "Result & Conclusion", 
              "Graphical Representation", "Power Failure Studies", "Hot & Cold Point", "Recovery Studies"
            ].map((item, index) => (
              <AnimateOnScroll key={item} delay={1050 + index * 40}>
                <li>{item}</li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>


      <section className="py-16 bg-white">
        <AnimateOnScroll delay={1300}>
          <h2 className="text-3xl text-center font-bold text-red-700 mb-10 transition duration-300 hover:text-red-900">
            Why EIE's Validation Services?
          </h2>
        </AnimateOnScroll>

        <div className="w-full max-w-4xl mx-auto mb-10 flex justify-center">
          <AnimateOnScroll delay={1400}>
            <ClickableImageThumbnail
              src="/images/validation-2.png"
              alt="Validation Services"
              width={1200}
              height={600}
            />
          </AnimateOnScroll>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 text-lg px-4">
          <ul className="list-disc ml-8 space-y-2 leading-relaxed">
            {[
              "Well Trained and Qualified Engineer / Technician Team", 
              "3 decades Manufacturing experience according to GMP Guidelines", 
              "Separate QA and Documentation Department to fulfill complicated activities on priority basis", 
              "All Reporting work complies to National / International and Major Regulatory bodies like USFDA, MHRA, MCC, TGA, WHO, FDA, ISO etc", 
              "Prompt Services and Fast Reporting", 
              "On-Site Calibration & Validation Facility", 
              "Remind Customers for due date of Instrument Calibration & Equipment Validation activity by Mail/Telephonic"
            ].map((item, index) => (
              <AnimateOnScroll key={item} delay={1500 + index * 70}>
                <li>{item}</li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto text-left space-y-4 px-4">
          <div className="w-full flex justify-center mb-6">
            <AnimateOnScroll delay={2000}>
              <ClickableImageThumbnail
                src="/images/calibration-1.png"
                width={1200}
                height={600}
                alt="Calibration Services"
              />
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={2100}>
            <h2 className="text-3xl font-bold text-red-700">Calibration Services</h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2200}><p>Calibration facilities are given the highest priorities at our organization. We hold excellent technical know-how to calibrate versatile calibration parameters with National & International Traceability. EIE’s in-house Calibration Lab is accredited by NABL Authorities as per IEC/ISO : 17025 Guidelines. The Laboratory at Precise is very well equipped with the most modern and sophisticated Master Instruments / Equipment & Reference Standards, which are employed for providing precise & accurate calibration services to the prestigious clients. We provide following 2 kinds of calibration services to our esteemed clients.</p></AnimateOnScroll>
          <ul className="list-disc ml-8 space-y-1">
            <AnimateOnScroll delay={2300}><li>In-house Calibration Service</li></AnimateOnScroll>
            <AnimateOnScroll delay={2350}><li>On-Site Calibration Service</li></AnimateOnScroll>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-zinc-100">
        <AnimateOnScroll delay={2500}>
          <h2 className="text-3xl text-center font-bold text-red-700 mb-12 transition duration-300 hover:text-red-900">
            Calibration Scope as per ISO/IEC 17025
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          <AnimateOnScroll delay={2600}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/thermal.png" alt="Thermal Scope" width={400} height={300} />
              <h3 className="text-xl font-semibold mt-4 text-red-600">Thermal Scope</h3>
              <p className="text-sm mt-2">Sensors, Thermometers, Switches, Recorders, Transmitters and Analytical Instruments such as Freezers, Refrigerators, Stability Chambers (Humidity chambers), Incubators, Ovens, Furnace, Waterbath Hygrometers etc</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2700}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/Mass.png" width={400} height={300} alt="Mass Scope" />
              <h3 className="text-xl font-semibold mt-4 text-red-600">Mass Scope</h3>
              <p className="text-sm mt-2">Laboratory balances, F1 Class weights, F2 Class weights, M1 Class weights, M2 Class weights etc</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2800}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/Pressure.png" width={400} height={300} alt="Pressure Scope" />
              <h3 className="text-xl font-semibold mt-4 text-red-600">Pressure/Vacuum Scope</h3>
              <p className="text-sm mt-2">Pressure Sensors, Pressure Gages, Pressure Transducers, Pressure Switches, Vacuum Gauges, Magnehelic Gauges, Compound gauges, Recorders and more</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2900}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/Dimension.png" width={400} height={300} alt="Dimension Scope" />
              <h3 className="text-xl font-semibold mt-4 text-red-600">Dimension Lab Scope</h3>
              <p className="text-sm mt-2">Vernier Calipers, Rulers, Micrometers, Thickness Gauges, Dial Gauges, Depth Gauges, Level and more</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={3000}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/System.png" width={400} height={300} alt="System Calibrations" />
              <h3 className="text-xl font-semibold mt-4 text-red-600">System Calibrations</h3>
              <p className="text-sm mt-2">Autoclave, Lyophilizer, Centrifuge</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={3100}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/Force.png" width={400} height={300} alt="Force Scope" />
              <h3 className="text-xl font-semibold mt-4 text-red-600">Force Lab Scope</h3>
              <p className="text-sm mt-2">CBR Testing machine, Marshall Stability testing machine, Compression testing machine, Tensile testing machine, Universal tensile testing machine, Load cells, Proving Rings etc</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={3200}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/Volume.png" width={400} height={300} alt="Volume Scope" />
              <h3 className="text-xl font-semibold mt-4 text-red-600">Volume Scope</h3>
              <p className="text-sm mt-2">Beakers, Funnels, Pipettes, Burettes, etc</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={3300}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ClickableImageThumbnail src="/images/Electro-Technical.png" width={400} height={300} alt="Electro-Technical" />
              <h3 className="text-xl font-semibold mt-4 text-red-600">Electro-Technical</h3>
              <p className="text-sm mt-2">Shakers, Mixers, RPM, Timer, pH meter, Conductivity meter, ORP Meter, TDS Meter</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 text-center">
        <AnimateOnScroll delay={3500}>
          <h2 className="text-3xl font-bold text-red-700 mb-8 transition duration-300 hover:text-red-900">
            NABL Accredited Calibration Laboratory (ISO/IEC 17025: 2017)
          </h2>
        </AnimateOnScroll>

        <div className="max-w-xl mx-auto flex justify-center">
          <AnimateOnScroll delay={3600}>
            <ClickableImageThumbnail
              src="/images/NABL Certificate of Accreditation.png"
              alt="NABL Certificate"
              width={800}
              height={1000}
              isExternalLink={true}
              linkHref="/images/NABL Certificate of Accreditation.png"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <AnimateOnScroll delay={3800}>
          <h2 className="text-3xl font-bold text-red-700 mb-6 transition duration-300 hover:text-red-900">Catalog</h2>
        </AnimateOnScroll>

        <div className="max-w-xl mx-auto mb-6 flex justify-center">
          <AnimateOnScroll delay={3900}>
            <ClickableImageThumbnail
              src="/images/catelogue.png"
              alt="Catalogue Preview"
              width={800}
              height={1000}
              isExternalLink={true}
              linkHref="/images/Calibration-Catlogue-03-03-2018-03.pdf"
            />
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={4000}>
          <Link
            href="/images/Calibration-Catlogue-03-03-2018-03.pdf"
            target="_blank"
            className="px-6 py-3 bg-red-700 text-white rounded-lg shadow hover:bg-red-800 transition transform hover:scale-105 inline-block"
          >
            View Catalogue
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}