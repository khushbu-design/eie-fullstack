"use client";
import { useState } from "react";
import JobForm from "@/components/JobForm";

export default function JobPage() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobs = [
    {
      title: "Finance Officer",
      aboutUs: "EIE Instruments engaged in manufacturing, marketing and Calibration of Scientific Instruments and Testing Equipment for various applications.",
      aboutRole: "The Finance Officer is responsible for managing the financial accounting record and transactions. This role ensures compliance with accounting standards, internal policies, and regulatory requirements while supporting decision-making through accurate financial analysis and reporting.",
      responsibilities: [
        "Maintain accurate and up-to-date financial records, including ledgers, journals, and reconciliations.",
        "Prepare monthly, quarterly, and annual financial statements and reports.",
        "Manage accounts payable and receivable, ensuring timely processing of invoices and payments.",
        "Monitor cash flow, bank reconciliations.",
        "Assist in budgeting, forecasting, and financial planning processes.",
        "Ensure compliance with tax regulations, financial policies, and statutory reporting requirements.",
        "Support internal and external audits by providing required documentation and information.",
        "Analyze financial data to provide insights and recommendations for cost control and efficiency.",
        "Maintain proper documentation ensuring confidentiality of sensitive information.",
        "Collaborate with other departments to provide financial guidance and support organizational objectives.",
      ],
      qualifications: [
        "Bachelor's degree in Accounting, Finance, or a relatable field.",
        "Proven experience (3-5 years) in accounting or financial management.",
        "Strong knowledge of accounting principles, financial reporting, and regulatory compliance.",
        "Proficiency in accounting software (eg. SAP, Tally, or similar).",
        "Should possess skills in MS Excel and other financial tools.",
        "Excellent analytical, problem-solving, and organizational skills.",
        "High attention to detail, accuracy, and integrity.",
        "Strong communication and interpersonal skills.",
      ],
      additionalInfo: [
        "Qualification: Bachelor's degree in Accounting, Finance, or a relatable field.",
        "Min Experience: 3 Years",
        "Max Experience: 5 Years",
      ],
      contactEmail: "yuti@eieinstruments.com",
      website: "www.eieinstruments.com",
    },
    
  ];

  const applyNow = (jobTitle) => {
    setSelectedJob(jobTitle);
    setOpenForm(true);
  };

  const gridClass = jobs.length === 1 
    ? "max-w-4xl mx-auto grid grid-cols-1" 
    : "grid lg:grid-cols-2 gap-10";

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="px-6 py-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-red-700 mb-4">
            We're Hiring!
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            EIE Instruments is always looking for talented individuals to join our dynamic team. Explore exciting career opportunities with us.
          </p>
        </div>

        <div className={gridClass}>
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl border border-red-100 p-8 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-3xl font-bold text-red-600 mb-6 border-b-2 border-red-200 pb-3">
                {job.title}
              </h2>

              <section className="mb-7">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">About Us</h3>
                <p className="text-gray-600 leading-relaxed">{job.aboutUs}</p>
              </section>

              <section className="mb-7">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">About the Role</h3>
                <p className="text-gray-600 leading-relaxed">{job.aboutRole}</p>
              </section>

              <section className="mb-7">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Responsibilities</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ol>
              </section>

              <section className="mb-7">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Candidate Qualifications</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                  {job.qualifications.map((qual, idx) => (
                    <li key={idx}>{qual}</li>
                  ))}
                </ol>
              </section>

              <section className="mb-7 bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Additional Information</h3>
                <ul className="text-gray-700 space-y-2 font-medium">
                  {job.additionalInfo.map((info, idx) => (
                    <li key={idx}>
                      <span className="text-red-700">{info.split(":")[0]}:</span> {info.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Apply</h3>
                <p className="text-gray-600">
                  Please share your updated CV to:{" "}
                  <a href={`mailto:${job.contactEmail}`} className="text-red-600 font-bold underline">
                    {job.contactEmail}
                  </a>
                  <br />
                  Website:{" "}
                  <a 
                    href={`https://${job.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 font-bold underline"
                  >
                    {job.website}
                  </a>
                </p>
              </section>

              <button
                onClick={() => applyNow(job.title)}
                className="w-full bg-red-600 text-white text-xl font-bold py-4 rounded-xl hover:bg-red-700 transition transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {openForm && (
        <JobForm jobTitle={selectedJob} close={() => setOpenForm(false)} />
      )}
    </div>
  );
}