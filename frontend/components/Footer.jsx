'use client';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Footer() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-10">
      
      <div className="border-b border-gray-700 pb-6 mb-8">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 text-center md:text-left gap-6">
          <div>
            <p className="text-sm text-gray-300">📞 Call Us</p>
            <p className="text-lg font-semibold">+91-079-66211234</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">📩 Send Email</p>
            <p className="text-lg font-semibold">info@eieinstruments.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">⏰ Working Hours</p>
            <p className="text-lg font-semibold">Mon to Sat — 9:00am to 6:00pm</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-5 gap-10">

        <div>
          <h3 className="text-lg font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a className="hover:text-red-400" href="/about">About EIE</a></li>
            <li><a className="hover:text-red-400" href="/home/quality-policy">Quality Policy</a></li>
            <li><a className="hover:text-red-400" href="/home/certificates">Certificates</a></li>
            <li><a className="hover:text-red-400" href="/services/calibration-validation">Calibration & Validation Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Industries</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a className="hover:text-red-400" href="/products/civil-engineering-testing-instruments">Civil Engineering</a></li>
            <li><a className="hover:text-red-400" href="/products/tensile-and-elongation-testing-machine">Tensile & Elongation</a></li>
            <li><a className="hover:text-red-400" href="/products/petroleum-and-grease-products-testing-instruments">Oil & Petroleum</a></li>
            <li><a className="hover:text-red-400" href="/products/plastic-and-rubber-testing-instruments">Plastic & Rubber</a></li>
            <li><a className="hover:text-red-400" href="/products/paper-and-packaging-testing-instruments">Paper & Packaging</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Head Office Address</h3>
          <p className="text-sm text-gray-300 leading-6">
            A-1301 BVR Ek, Opp. Hotel Inder Residency,<br />
            Nr. Gujarat College Ellisbridge,<br />
            Ahmedabad, Gujarat - 380006
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Manufacturing Plant Address</h3>
          <p className="text-sm text-gray-300 leading-6">
            Survey No. 1098, Nr. Mahakali Temple,<br />
            Opp. Primary School, Village Kubadthal,<br />
            Tal : Daskroi, Ahmedabad - 382430
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="https://www.facebook.com/EIEInstruments" className="hover:text-red-400"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/eie-instruments-pvt-ltd" className="hover:text-red-400"><FaLinkedinIn /></a>
            <a href="https://x.com/eieinstrument" className="hover:text-red-400"><FaTwitter /></a>
            <a href="https://www.youtube.com/channel/UChMqVEbtLIUmUrot4UGY5rw" className="hover:text-red-400"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="bg-red-700 text-white py-10 mt-12">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Get Notified
          </h3>
          <p className="text-lg mb-8">
            Get updates about new products, events, and special offers directly in your inbox.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setStatusMessage('');
              setIsLoading(true);

              const email = e.target.email.value.trim();

              if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                setStatusMessage('Please enter a valid email address');
                setIsLoading(false);
                return;
              }

              try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/newsletter-subscribers`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ data: { email } }),
                });

                const result = await res.json();

                if (res.ok) {

                  setStatusMessage('Thank you for subscribing! Confirmation email sent.');
                  e.target.reset();
                  setIsLoading(false);

                  fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      to: email,
                      from: "info@eieinstruments.com",
                      subject: "Thank You for Subscribing to EIE Instruments!",
                      message: `
                        <h2>Thank You for Subscribing!</h2>
                        <p>Dear Subscriber,</p>
                        <p>Welcome to EIE Instruments family! You'll now receive updates about new products, lab expos, and special offers.</p>
                        <p><a href="${window.location.origin}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #d60000; font-weight: bold;">Click here to unsubscribe anytime</a></p>
                        <p>Best regards,<br>EIE Instruments Team</p>
                      `.trim(),
                    }),
                  });

                } else {
                  const errorMessage = (result?.error?.message || '').toLowerCase();
                  const errorName = result?.error?.name || '';

                  if (
                    errorName === 'ValidationError' ||
                    errorMessage.includes('unique') ||
                    errorMessage.includes('already') ||
                    errorMessage.includes('taken') ||
                    errorMessage.includes('duplicate')
                  ) {
                    setStatusMessage('Already subscribed with this email');
                  } else {
                    setStatusMessage('Something went wrong. Please try again later.');
                  }
                  setIsLoading(false);
                }
              } catch (err) {
                setStatusMessage('Network error. Please try again.');
                setIsLoading(false);
              }
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={isLoading}
              className="flex-1 px-6 py-3 rounded-lg bg-transparent text-white placeholder:text-white border border-white focus:outline-none focus:ring-4 focus:ring-white focus:border-white"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition disabled:opacity-70"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {statusMessage && (
            <p className={`mt-6 text-lg font-medium ${
              statusMessage.includes('Thank you') ? 'text-green-300' :
              statusMessage.includes('Already') ? 'text-yellow-300' :
              'text-orange-300'
            }`}>
              {statusMessage}
            </p>
          )}
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-5 text-gray-400">
        © 2025 EIE Instruments. Developed & Designed by 
        <span className="text-red-400"> Khushbu Vaghela</span>
      </div>
    </footer>
  );
}