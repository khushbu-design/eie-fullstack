'use client';

import { useState, useEffect } from "react";
import JobForm from "@/components/JobForm";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace('/api', '') || 
                     "https://optimistic-friends-ed5888f6c2.strapiapp.com";

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setError(null);
      setLoading(true);

      const res = await fetch(`${STRAPI_URL}/api/jobs?populate=*`, {
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();

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
      setError("Failed to load job openings. Please try again later.");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

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

      if (block.type === "heading") {
        const HeadingTag = `h${block.level || 3}`; 
        return (
          <HeadingTag key={index} className="text-xl font-bold text-red-900 mt-6 mb-3">
            {renderChildren(block.children)}
          </HeadingTag>
        );
      }

      if (block.type === "paragraph") {
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {renderChildren(block.children)}
          </p>
        );
      }

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

  const applyNow = (jobTitle) => {
    setSelectedJob(jobTitle);
    setOpenForm(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-xl font-medium text-gray-600">Finding exciting opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-red-700 mb-4">We're Hiring!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing team and be part of India’s leading laboratory testing equipment manufacturer.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl mb-12 text-center">
            {error}
          </div>
        )}

        {jobs.length === 0 && !error ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
            <p className="text-2xl text-gray-400">No active job openings at the moment.</p>
            <p className="text-gray-500 mt-3">Please check back soon!</p>
          </div>
        ) : (
          <div className="space-y-12">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl shadow-md border border-gray-100 p-10 hover:shadow-xl transition-all"
              >
                <h2 className="text-3xl font-bold text-red-800 mb-8">{job.title}</h2>

                <div className="prose prose-lg max-w-none mb-12 text-gray-700">
                  {renderDescription(job.description)}
                </div>

                {Object.keys(job.additionDetails).length > 0 && (
                  <div className="mb-10 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-xl text-red-700 mb-5">Additional Information</h3>
                    <div className="grid sm:grid-cols-2 gap-6 text-sm">
                      {Object.entries(job.additionDetails).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium text-gray-900 capitalize block mb-1">{key}</span>
                          <span className="text-gray-600">
                            {typeof value === 'object' ? JSON.stringify(value) : value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-gray-600 text-sm">
                    To apply, please send your updated CV to:<br />
                    <a href={`mailto:${job.contactEmail1}`} className="font-medium text-red-600 hover:underline">{job.contactEmail1}</a> 
                    {' '}or{' '}
                    <a href={`mailto:${job.contactEmail2}`} className="font-medium text-red-600 hover:underline">{job.contactEmail2}</a>
                  </div>

                  <button
                    onClick={() => applyNow(job.title)}
                    className="bg-red-600 hover:bg-red-700 text-white px-10 py-3.5 rounded-2xl font-semibold transition-all"
                  >
                    Apply Now
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
}