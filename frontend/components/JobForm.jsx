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
      resumeBase64 = reader.result; // full data:url
      resumeFilename = resumeFile.name;
    }

    const emailMessage = `
<h2>New Job Application Received</h2>

<h3>Personal Information</h3>
<b>Full Name (First, Middle, Last):</b> ${form.fullName}<br>
<b>Date of Birth:</b> ${form.dob}<br>
<b>Gender:</b> ${form.gender}<br>
<b>Marital Status:</b> ${form.maritalStatus}<br>
<b>Do You Own a Vehicle?:</b> ${form.vehicle}<br>
<b>Do You Have a Driving License?:</b> ${form.drivingLicense}<br>
<b>Do You Have a Passport?:</b> ${form.passport}<br>
<b>Passport Number (if applicable):</b> ${form.passportNumber || "N/A"}<br>
<b>Contact Number:</b> ${form.phone}<br>
<b>Email Address:</b> ${form.email}<br>
<b>Current Address:</b> ${form.currentAddress}<br>
<b>Permanent Address (if different):</b> ${form.permanentAddress || "Same as current"}<br><br>

<h3>Job Information</h3>
<b>Job Title/Position You’re Applying For:</b> ${form.jobTitle}<br>
<b>Desired Salary:</b> ${form.desiredSalary}<br>
<b>Available Start Date:</b> ${form.startDate}<br>
<b>Preferred Work Schedule:</b> ${form.workSchedule}<br><br>

<h3>Employment History</h3>
<b>Employer Name(s):</b> ${form.employerNames}<br>
<b>Job Title(s):</b> ${form.jobTitles}<br>
<b>Duration of Employment (Start – End Date):</b> ${form.employmentDuration}<br>
<b>Job Responsibilities:</b> ${form.jobResponsibilities}<br>
<b>Supervisor’s Name and Contact:</b> ${form.supervisorInfo}<br>
<b>Reason for Leaving:</b> ${form.reasonForLeaving}<br>
<b>Total Years of Industry Experience (Also mention industries):</b> ${form.industryExperience}<br>
<b>Total Years of Experience in Manufacturing Industry:</b> ${form.manufacturingExperience}<br>
<b>Have You Worked in Steel / Fabrication / Metal Industries? If Yes, Mention Names:</b> ${form.steelFabricationExperience}<br>
<b>Experienced in Laboratory Testing Instruments Industry? If Yes, Mention Names:</b> ${form.labTestingExperience}<br><br>

<h3>Skills and Qualifications</h3>
<b>List of Technical and Soft Skills Relevant to the Job:</b> ${form.skills}<br>
<b>Certifications or Licenses:</b> ${form.certifications}<br>
<b>Languages Spoken or Written:</b> ${getLanguagesText()}<br><br>

<h3>References</h3>
<b>Reference 1 – Name, Designation, Contact Number, Email:</b> ${form.reference1 || "Not provided"}<br>
<b>Reference 2 – Name, Designation, Contact Number, Email:</b> ${form.reference2 || "Not provided"}<br>
<b>Reporting To (Previous/Current Manager):</b> ${form.reportingTo}<br><br>

<h3>Additional Information</h3>
<b>Are You Authorized to Work in India?:</b> ${form.workAuthorization}<br>
<b>Have You Ever Been Convicted of a Criminal Offense?:</b> ${form.criminalConviction}<br>
<b>Are You Willing to Relocate or Travel for Work?:</b> ${form.relocateTravel}<br>
<b>Date of Submission:</b> ${form.submissionDate}<br>
<b>Declaration:</b> ${form.declaration ? "I confirm that the information I provide is valid and legal" : "Not accepted"}<br><br>

<b>Resume:</b> ${resumeFilename ? `${resumeFilename} (attached)` : "Not uploaded"}<br>
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
        alert("Application submitted successfully!");
        close();
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

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Job Title/Position You’re Applying For *</label>
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

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Employment History</h3>
            <div className="space-y-6">
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Employer Name(s) *" name="employerNames" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Job Title(s) *" name="jobTitles" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Duration of Employment (Start – End Date) *" name="employmentDuration" onChange={update} required></textarea>
              <textarea rows="4" className="w-full px-4 py-2 border rounded-lg" placeholder="Job Responsibilities *" name="jobResponsibilities" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Supervisor’s Name and Contact *" name="supervisorInfo" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Reason for Leaving *" name="reasonForLeaving" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Total Years of Industry Experience (Also mention industries) *" name="industryExperience" onChange={update} required></textarea>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Total Years of Experience in Manufacturing Industry *" name="manufacturingExperience" onChange={update} required />
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Have You Worked in Steel / Fabrication / Metal Industries? If Yes, Mention Names *" name="steelFabricationExperience" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Experienced in Laboratory Testing Instruments Industry? If Yes, Mention Names *" name="labTestingExperience" onChange={update} required></textarea>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills and Qualifications</h3>
            <div className="space-y-6">
              <textarea rows="4" className="w-full px-4 py-2 border rounded-lg" placeholder="List of Technical and Soft Skills Relevant to the Job *" name="skills" onChange={update} required></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Certifications or Licenses *" name="certifications" onChange={update} required></textarea>

              <div>
                <label className="block font-medium mb-3">Languages Spoken or Written *</label>
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

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">References</h3>
            <div className="space-y-6">
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Reference 1 – Name, Designation, Contact Number, Email" name="reference1" onChange={update}></textarea>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg" placeholder="Reference 2 – Name, Designation, Contact Number, Email" name="reference2" onChange={update}></textarea>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Reporting To (Previous/Current Manager) *" name="reportingTo" onChange={update} required />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              {[
                { name: "workAuthorization", label: "Are You Authorized to Work in India?" },
                { name: "criminalConviction", label: "Have You Ever Been Convicted of a Criminal Offense?" },
                { name: "relocateTravel", label: "Are You Willing to Relocate or Travel for Work?" },
              ].map((item) => (
                <div key={item.name}>
                  <label className="block font-medium mb-2">{item.label} *</label>
                  <div className="flex gap-8">
                    <label className="flex items-center gap-2"><input type="radio" name={item.name} value="Yes" onChange={update} required /> Yes</label>
                    <label className="flex items-center gap-2"><input type="radio" name={item.name} value="No" onChange={update} /> No</label>
                  </div>
                </div>
              ))}

              <div>
                <label className="block font-medium mb-2">Date of Submission *</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg" name="submissionDate" onChange={update} required />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2">Upload Resume (PDF) *</label>
              <input type="file" accept=".pdf" className="w-full" onChange={(e) => setResumeFile(e.target.files[0])} required />
            </div>

            <div className="mb-8">
              <label className="flex items-start gap-3 text-base">
                <input type="checkbox" name="declaration" onChange={update} required className="mt-1" />
                <span>I confirm that the information I provide is valid and legal *</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center gap-6">
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