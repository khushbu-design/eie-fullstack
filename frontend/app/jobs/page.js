"use client";
import { useState, useEffect } from "react";
import JobForm from "@/components/JobForm";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  // Cloud Strapi URL
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace('/api', '') || 
                     "https://optimistic-friends-ed5888f6c2.strapiapp.com";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/jobs?populate=*`, {
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        const formattedJobs = data.data.map((item) => ({
          id: item.id,
          title: item.attributes.name,
          aboutUs: "EIE Instruments engaged in manufacturing, marketing and Calibration of Scientific Instruments and Testing Equipment for various applications.",
          aboutRole: item.attributes.description || "Role description will be updated soon.",
          responsibilities: [],
          qualifications: [],
          additionalInfo: item.attributes.additionDetails 
            ? Object.entries(item.attributes.additionDetails).map(([key, value]) => `${key}: ${value}`)
            : [],
          contactEmail: item.attributes.email || "yuti@eieinstruments.com",
          website: item.attributes.Website || "www.eieinstruments.com",
        }));

        setJobs(formattedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [STRAPI_URL]);

  const applyNow = (jobTitle) => {
    setSelectedJob(jobTitle);
    setOpenForm(true);
  };

  const gridClass = jobs.length === 1 
    ? "max-w-4xl mx-auto grid grid-cols-1" 
    : "grid lg:grid-cols-2 gap-10";

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading current openings...</p>
      </div>
    );
  }

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

        {jobs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No active job openings right now.</p>
          </div>
        ) : (
          <div className={gridClass}>
            {jobs.map((job) => (
              <div
                key={job.id}
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
        )}
      </div>

      {openForm && (
        <JobForm jobTitle={selectedJob} close={() => setOpenForm(false)} />
      )}
    </div>
  );
}