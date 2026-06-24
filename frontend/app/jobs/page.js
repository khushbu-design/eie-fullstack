"use client";
import { useState, useEffect } from "react";
import JobForm from "@/components/JobForm";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace('/api', '') || 
                     "https://optimistic-friends-ed5888f6c2.strapiapp.com";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/jobs?populate=*`, {
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        console.log("🔍 Full Strapi Response:", data);

        const rawItems = data.data || [];

        const formattedJobs = rawItems
          .map((item) => {
            const attr = item.attributes || item; 
            const id = item.id || item.documentId;

            if (!attr || !attr.name) return null;

            let email1 = "career@eieinstruments.com";
            let email2 = "yuti@eieinstruments.com";

            if (attr.email && typeof attr.email === 'object') {
              email1 = attr.email["Contact Email 1"] || attr.email.email || email1;
              email2 = attr.email["Contact Email 2"] || attr.email.email2 || email2;
            } else if (typeof attr.email === 'string') {
              email1 = attr.email;
            }

            return {
              id: id,
              title: attr.name,
              description: attr.description || [], 
              additionDetails: attr.additionDetails || {},
              contactEmail1: email1,
              contactEmail2: email2,
            };
          })
          .filter(Boolean);

        setJobs(formattedJobs);
      } catch (error) {
        console.error("❌ Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [STRAPI_URL]);

  // Strapi Rich Text Blocks ને મરૂન હેડિંગ્સ સાથે રેન્ડર કરવાનું ફંક્શન
  const renderDescription = (blocks) => {
    if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
      return <p className="text-gray-500 italic">Description coming soon...</p>;
    }

    return blocks.map((block, index) => {
      const renderChildren = (children) => {
        if (!children) return null;
        return children.map((child, i) => {
          let content = child.text || "";
          if (child.bold) content = `<strong>${content}</strong>`;
          if (child.italic) content = `<em>${content}</em>`;
          return <span key={i} dangerouslySetInnerHTML={{ __html: content }} />;
        });
      };

      // 1. મરૂન હેડિંગ્સ (Maroon Color Setup)
      if (block.type === "heading") {
        const HeadingTag = `h${block.level || 3}`; 
        const headingClasses = {
          h1: "text-3xl font-extrabold text-red-950 mt-8 mb-4 tracking-tight border-b pb-1 border-red-100",
          h2: "text-2xl font-bold text-red-900 mt-6 mb-3 tracking-tight",
          h3: "text-xl font-bold text-red-900 mt-5 mb-2",
          h4: "text-lg font-semibold text-red-900 mt-4 mb-2",
          h5: "text-base font-semibold text-red-900 mt-3 mb-1",
          h6: "text-sm font-semibold text-red-800 mt-2 mb-1",
        };

        return (
          <HeadingTag key={index} className={headingClasses[HeadingTag] || headingClasses.h3}>
            {renderChildren(block.children)}
          </HeadingTag>
        );
      }

      // 2. પેરેગ્રાફ સેટિંગ્સ
      if (block.type === "paragraph") {
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed text-base antialiased">
            {renderChildren(block.children)}
          </p>
        );
      }

      // 3. લિસ્ટ સેટિંગ્સ (Bullet points)
      if (block.type === "list") {
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        const listClass = block.format === "ordered" 
          ? "list-decimal pl-6 mb-5 space-y-2 text-gray-700" 
          : "list-disc pl-6 mb-5 space-y-2 text-gray-700";
        
        return (
          <ListTag key={index} className={listClass}>
            {block.children && block.children.map((listItem, liIndex) => (
              <li key={liIndex} className="text-gray-700 leading-relaxed">
                {renderChildren(listItem.children)}
              </li>
            ))}
          </ListTag>
        );
      }

      return null;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-xl font-medium text-gray-600">Loading current openings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 antialiased py-12">
      <div className="px-4 max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-black text-red-800 mt-4 mb-4 tracking-tight">We're Hiring!</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">EIE Instruments is always looking for talented individuals to join our dynamic team.</p>
        </div>

        {jobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xl text-gray-400 font-medium">No active job openings right now.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300 ease-in-out relative overflow-hidden"
              >
                {/* Top decorative bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-700 to-red-900"></div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-red-800 mb-6 pb-4 border-b border-gray-100">
                  {job.title}
                </h2> 

                {/* Job Description Block */}
                <section className="prose max-w-none mb-10">
                  {renderDescription(job.description)}
                </section>

                {/* Additional Information Box (ડાબી બાજુ વ્યવસ્થિત ગોઠવણી) */}
                {Object.keys(job.additionDetails).length > 0 && (
                  <section className="mb-8 bg-gradient-to-r from-red-50/60 to-red-50/20 p-6 rounded-xl border border-red-100/70">
                    <h3 className="text-lg font-bold text-red-900 mb-4 tracking-tight">Additional Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {Object.entries(job.additionDetails).map(([key, value]) => (
                        <div key={key} className="flex flex-col border-b border-red-100/40 pb-2 last:border-none">
                          <span className="font-semibold text-red-800 capitalize text-xs tracking-wider uppercase opacity-85">{key}</span>
                          <span className="text-gray-700 font-medium text-sm mt-0.5">
                            {typeof value === 'object' ? JSON.stringify(value) : value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Contact Section (ડાબી બાજુ) */}
                <section className="mb-8 bg-gray-50/80 p-6 rounded-xl border border-gray-200/60">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Contact us to apply</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Please share your updated CV to:<br />
                    <span className="inline-flex flex-wrap gap-2 mt-2">
                      <a href={`mailto:${job.contactEmail1}`} className="text-red-700 font-bold hover:text-red-800 transition-colors underline decoration-2 underline-offset-2">
                        {job.contactEmail1}
                      </a> 
                      <span className="text-gray-400 font-normal">OR</span>
                      <a href={`mailto:${job.contactEmail2}`} className="text-red-700 font-bold hover:text-red-800 transition-colors underline decoration-2 underline-offset-2">
                        {job.contactEmail2}
                      </a>
                    </span>
                  </p>
                </section>

                {/* Apply Button */}
                <div className="pt-2">
                  <button
                    onClick={() => applyNow(job.title)}
                    className="w-full sm:w-auto px-10 bg-gradient-to-r from-red-700 to-red-800 text-white text-base font-bold py-3.5 rounded-xl hover:from-red-800 hover:to-red-900 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:ring-4 focus:ring-red-100"
                  >
                    Apply For This Position
                  </button>
                </div>

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

  function applyNow(jobTitle) {
    setSelectedJob(jobTitle);
    setOpenForm(true);
  }
}