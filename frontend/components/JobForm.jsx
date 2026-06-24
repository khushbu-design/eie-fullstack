"use client";
import { useState } from "react";

export default function JobForm({ jobTitle, close }) {
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    vehicle: "",
    drivingLicense: "",
    passport: "",
    passportNumber: "",
    phone: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",
    jobTitle: jobTitle || "",
    desiredSalary: "",
    startDate: "",
    workSchedule: "",
    employerNames: "",
    jobTitles: "",
    employmentDuration: "",
    jobResponsibilities: "",
    supervisorInfo: "",
    reasonForLeaving: "",
    industryExperience: "",
    manufacturingExperience: "",
    steelFabricationExperience: "",
    labTestingExperience: "",
    skills: "",
    certifications: "",
    englishRead: false,
    englishWrite: false,
    englishSpeak: false,
    hindiRead: false,
    hindiWrite: false,
    hindiSpeak: false,
    gujaratiRead: false,
    gujaratiWrite: false,
    gujaratiSpeak: false,
    reference1: "",
    reference2: "",
    reportingTo: "",
    workAuthorization: "",
    criminalConviction: "",
    relocateTravel: "",
    submissionDate: "",
    declaration: false,
  });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getLanguagesText = () => {
    const langs = [];
    if (form.englishRead || form.englishWrite || form.englishSpeak) {
      const skills = [];
      if (form.englishRead) skills.push("Read");
      if (form.englishWrite) skills.push("Write");
      if (form.englishSpeak) skills.push("Speak");
      langs.push(`English (${skills.join(", ")})`);
    }
    if (form.hindiRead || form.hindiWrite || form.hindiSpeak) {
      const skills = [];
      if (form.hindiRead) skills.push("Read");
      if (form.hindiWrite) skills.push("Write");
      if (form.hindiSpeak) skills.push("Speak");
      langs.push(`Hindi (${skills.join(", ")})`);
    }
    if (form.gujaratiRead || form.gujaratiWrite || form.gujaratiSpeak) {
      const skills = [];
      if (form.gujaratiRead) skills.push("Read");
      if (form.gujaratiWrite) skills.push("Write");
      if (form.gujaratiSpeak) skills.push("Speak");
      langs.push(`Gujarati (${skills.join(", ")})`);
    }
    return langs.length > 0 ? langs.join("; ") : "Not specified";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let resumeBase64 = "";
    let resumeFilename = "";
    if (resumeFile) {
      const reader = new FileReader();
      reader.readAsDataURL(resumeFile);
      await new Promise((resolve) => (reader.onload = resolve));
      resumeBase64 = reader.result;
      resumeFilename = resumeFile.name;
    }

    const emailMessage = `
<h2>New Job Application Received</h2>

<h3>Personal Information</h3>
<b>Full Name:</b> ${form.fullName}<br>
<b>Date of Birth:</b> ${form.dob}<br>
<b>Gender:</b> ${form.gender}<br>
<b>Marital Status:</b> ${form.maritalStatus}<br>
<b>Vehicle:</b> ${form.vehicle}<br>
<b>Driving License:</b> ${form.drivingLicense}<br>
<b>Passport:</b> ${form.passport}<br>
<b>Passport Number:</b> ${form.passportNumber || "N/A"}<br>
<b>Phone:</b> ${form.phone}<br>
<b>Email:</b> ${form.email}<br>
<b>Current Address:</b> ${form.currentAddress}<br>
<b>Permanent Address:</b> ${form.permanentAddress || "Same as current"}<br><br>

<h3>Job Information</h3>
<b>Job Title:</b> ${form.jobTitle}<br>
<b>Desired Salary:</b> ${form.desiredSalary}<br>
<b>Start Date:</b> ${form.startDate}<br>
<b>Work Schedule:</b> ${form.workSchedule}<br><br>

<h3>Employment History</h3>
<b>Employers:</b> ${form.employerNames}<br>
<b>Job Titles:</b> ${form.jobTitles}<br>
<b>Duration:</b> ${form.employmentDuration}<br>
<b>Responsibilities:</b> ${form.jobResponsibilities}<br>
<b>Supervisor:</b> ${form.supervisorInfo}<br>
<b>Reason for Leaving:</b> ${form.reasonForLeaving}<br>
<b>Industry Experience:</b> ${form.industryExperience}<br>
<b>Manufacturing Experience:</b> ${form.manufacturingExperience}<br>
<b>Steel/Fabrication:</b> ${form.steelFabricationExperience}<br>
<b>Lab Testing:</b> ${form.labTestingExperience}<br><br>

<h3>Skills & Languages</h3>
<b>Skills:</b> ${form.skills}<br>
<b>Certifications:</b> ${form.certifications}<br>
<b>Languages:</b> ${getLanguagesText()}<br><br>

<h3>References</h3>
<b>Reference 1:</b> ${form.reference1 || "N/A"}<br>
<b>Reference 2:</b> ${form.reference2 || "N/A"}<br>
<b>Reporting To:</b> ${form.reportingTo}<br><br>

<h3>Additional</h3>
<b>Work Authorization:</b> ${form.workAuthorization}<br>
<b>Criminal Conviction:</b> ${form.criminalConviction}<br>
<b>Willing to Relocate/Travel:</b> ${form.relocateTravel}<br>
<b>Declaration:</b> ${form.declaration ? "Accepted" : "Not Accepted"}<br>
<b>Resume:</b> ${resumeFilename ? resumeFilename + " (attached)" : "Not uploaded"}
    `.trim();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "yuti@eieinstruments.com",
          subject: `Job Application – ${form.jobTitle}`,
          message: emailMessage,
          attachment: resumeBase64 || null,
          attachmentFilename: resumeFilename || null,
        }),
      });

      if (res.ok) {
        const successMsg = encodeURIComponent("Your job application has been successfully submitted. We will contact you soon.");
        window.location.href = `/success?message=${successMsg}`;
      } else {
        const data = await res.json();
        alert("Failed to submit: " + (data.error || "Please try again later"));
      }
    } catch (err) {
      alert("Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto p-8">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Job Application
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Full Name (First, Middle, Last) *</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" name="fullName" onChange={update} required />
              </div>

              <div>
                <label className="block font-medium mb-1">Date of Birth *</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg" name="dob" onChange={update} required />
              </div>

              <div>
                <label className="block font-medium mb-1">Gender *</label>
                <div className="flex flex-wrap gap-6">
                  {["Male", "Female", "Prefer not to say", "Other"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input type="radio" name="gender" value={opt} onChange={update} required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Marital Status *</label>
                <div className="flex flex-wrap gap-6">
                  {["Married", "Unmarried", "Divorced", "Widowed", "Prefer not to say"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input type="radio" name="maritalStatus" value={opt} onChange={update} required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {[
                { name: "vehicle", label: "Do You Own a Vehicle?" },
                { name: "drivingLicense", label: "Do You Have a Driving License?" },
                { name: "passport", label: "Do You Have a Passport?" },
              ].map((item) => (
                <div key={item.name}>
                  <label className="block font-medium mb-1">{item.label} *</label>
                  <div className="flex gap-8">
                    <label className="flex items-center gap-2"><input type="radio" name={item.name} value="Yes" onChange={update} required /> Yes</label>
                    <label className="flex items-center gap-2"><input type="radio" name={item.name} value="No" onChange={update} /> No</label>
                  </div>
                </div>
              ))}

              <div>
                <label className="block font-medium mb-1">Passport Number (if applicable)</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" name="passportNumber" onChange={update} />
              </div>

              <div>
                <label className="block font-medium mb-1">Contact Number *</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg" name="phone" onChange={update} required />
              </div>

              <div>
                <label className="block font-medium mb-1">Email Address *</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" name="email" onChange={update} required />
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Current Address *</label>
                <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" name="currentAddress" onChange={update} required></textarea>
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Permanent Address (if different)</label>
                <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" name="permanentAddress" onChange={update}></textarea>
              </div>
            </div>
          </div>

          {/* Job Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Job Title/Position *</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg bg-gray-100" value={jobTitle} readOnly />
              </div>

              <div>
                <label className="block font-medium mb-1">Desired Salary *</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" name="desiredSalary" onChange={update} required />
              </div>

              <div>
                <label className="block font-medium mb-1">Available Start Date *</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg" name="startDate" onChange={update} required />
              </div>

              <div>
                <label className="block font-medium mb-1">Preferred Work Schedule *</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2"><input type="radio" name="workSchedule" value="Full Time" onChange={update} required /> Full Time</label>
                  <label className="flex items-center gap-2"><input type="radio" name="workSchedule" value="Part Time" onChange={update} /> Part Time</label>
                </div>
              </div>
            </div>
          </div>

          {/* Employment History */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Employment History</h3>
            <div className="space-y-6">
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Employer Name(s) *" name="employerNames" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Job Title(s) *" name="jobTitles" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Duration of Employment *" name="employmentDuration" onChange={update} required></textarea>
              <textarea rows="4" className="w-full px-4 py-2 border rounded-lg" placeholder="Job Responsibilities *" name="jobResponsibilities" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Supervisor’s Name and Contact *" name="supervisorInfo" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Reason for Leaving *" name="reasonForLeaving" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Industry Experience *" name="industryExperience" onChange={update} required></textarea>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Manufacturing Experience *" name="manufacturingExperience" onChange={update} required />
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Steel / Fabrication Experience *" name="steelFabricationExperience" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Lab Testing Instruments Experience *" name="labTestingExperience" onChange={update} required></textarea>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills and Qualifications</h3>
            <div className="space-y-6">
              <textarea rows="4" className="w-full px-4 py-2 border rounded-lg" placeholder="Technical & Soft Skills *" name="skills" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Certifications *" name="certifications" onChange={update} required></textarea>

              <div>
                <label className="block font-medium mb-3">Languages *</label>
                <table className="w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">Language</th>
                      <th className="px-6 py-3 text-center">Read</th>
                      <th className="px-6 py-3 text-center">Write</th>
                      <th className="px-6 py-3 text-center">Speak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["English", "Hindi", "Gujarati"].map((lang) => {
                      const key = lang.toLowerCase();
                      return (
                        <tr key={lang} className="border-t">
                          <td className="px-6 py-3 font-medium">{lang}</td>
                          <td className="text-center"><input type="checkbox" name={`${key}Read`} onChange={update} /></td>
                          <td className="text-center"><input type="checkbox" name={`${key}Write`} onChange={update} /></td>
                          <td className="text-center"><input type="checkbox" name={`${key}Speak`} onChange={update} /></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* References & Additional */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">References & Additional Information</h3>
            <div className="space-y-6">
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Reference 1" name="reference1" onChange={update}></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Reference 2" name="reference2" onChange={update}></textarea>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Reporting To *" name="reportingTo" onChange={update} required />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "workAuthorization", label: "Authorized to Work in India?" },
                  { name: "criminalConviction", label: "Criminal Conviction?" },
                  { name: "relocateTravel", label: "Willing to Relocate/Travel?" },
                ].map((item) => (
                  <div key={item.name}>
                    <label className="block font-medium mb-2">{item.label} *</label>
                    <div className="flex gap-8">
                      <label className="flex items-center gap-2"><input type="radio" name={item.name} value="Yes" onChange={update} required /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name={item.name} value="No" onChange={update} /> No</label>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label className="block font-medium mb-2">Submission Date *</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg" name="submissionDate" onChange={update} required />
              </div>

              <div>
                <label className="block font-medium mb-2">Upload Resume (PDF) *</label>
                <input type="file" accept=".pdf" className="w-full" onChange={(e) => setResumeFile(e.target.files[0])} required />
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="declaration" onChange={update} required className="mt-1" />
                  <span>I confirm that all information provided is correct and legal *</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            <button
              type="button"
              onClick={close}
              className="bg-gray-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}