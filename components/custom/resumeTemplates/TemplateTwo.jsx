"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";

// html2pdf.js uses the browser DOM – load it only on the client
const html2pdf = typeof window !== "undefined" ? require("html2pdf.js") : null;

export default function TemplateTwo() {
  const resumeRef = useRef(null);

  const handleDownload = async () => {
    if (!resumeRef.current || !html2pdf) return;

    const options = {
      margin: [0.3, 0.3], // inches – top/right/bottom/left
      filename: "Resume.pdf",
      // png keeps text edges sharper than jpeg; quality ignored for png
      image: { type: "png", quality: 1 },
      // ↑ html2canvas turns DOM → bitmap, so boost resolution:
      html2canvas: {
        scale: 4, // 4× device‑pixel ratio (more pixels → crisper)
        dpi: 300, // target print DPI
        letterRendering: true,
        useCORS: true,
      },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all"] },
      enableLinks: true,
    };

    await html2pdf().set(options).from(resumeRef.current).save();
  };

  return (
    <main className="relative mx-auto my-0 w-full max-w-[8.5in] bg-white px-[0.5in] py-[0.5in] print:p-[0.3in] text-gray-800 text-[12px] leading-relaxed">
      {/* Download Button (hidden when printing) */}
      <div className="print:hidden fixed right-5 top-5 z-50">
        <button
          type="button"
          onClick={handleDownload}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
        >
          <span role="img" aria-label="download">
            📥
          </span>
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        className="bg-white max-w-[8.5in] min-h-[11in] mx-auto p-6 print:p-4"
      >
        <header className="mb-6 border-b-2 border-gray-800 pb-4 text-center">
          <h1 className="text-[22px] font-bold uppercase tracking-wide">
            Akhil P A
          </h1>
          <h2 className="mt-1 text-[14px] font-semibold text-gray-600">
            Software Developer | Frontend Developer
          </h2>
          <div className="mt-2 text-[12px] text-gray-700 space-x-1">
            📧
            <a
              href="mailto:akhilpunchayilalakkat@gmail.com"
              className="hover:underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              akhilpunchayilalakkat@gmail.com
            </a>
            | 📱
            <a
              href="tel:+919061651734"
              className="hover:underline text-blue-600"
            >
              +91 90616 51734
            </a>
            | 🌐
            <a
              href="https://www.linkedin.com/in/akhilpunchayilalakkat/"
              className="hover:underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            |
            <a
              href="https://github.com/AkhilPA1085"
              className="hover:underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <br />
            📍 Kannur, Kerala, India
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h3 className="text-[13px] font-bold uppercase tracking-wide border-b border-gray-800 pb-1 mb-3">
            Professional Summary
          </h3>
          <p className="text-justify">
            Dedicated Frontend Developer with 3+ years of proven experience
            creating engaging and high‑performance web applications. Expertise
            in Next.js, React.js, Redux, and modern JavaScript frameworks.
            Skilled in API integration, performance optimization, and responsive
            design. Passionate about delivering exceptional digital experiences
            with cross‑platform compatibility.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h3 className="text-[13px] font-bold uppercase tracking-wide border-b border-gray-800 pb-1 mb-3">
            Technical Skills
          </h3>
          <ul className="space-y-1">
            <li>
              <strong>Frontend Frameworks:</strong> Next.js, React.js, Redux
            </li>
            <li>
              <strong>Programming Languages:</strong> JavaScript (ES6+),
              TypeScript
            </li>
            <li>
              <strong>Styling Technologies:</strong> Tailwind CSS, HTML5, CSS3,
              Material UI, Bootstrap
            </li>
            <li>
              <strong>Development Tools:</strong> Git, AJAX
            </li>
            <li>
              <strong>Specializations:</strong> API Integration, Performance
              Optimization, Responsive Design, Cross‑Platform Compatibility,
              REST APIs
            </li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h3 className="text-[13px] font-bold uppercase tracking-wide border-b border-gray-800 pb-1 mb-3">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {/* Job 1 */}
            <article>
              <h4 className="text-[13px] font-bold">Software Developer</h4>
              <p className="font-semibold text-gray-800">Fin Firm Solutions</p>
              <p className="text-[11px] italic text-gray-600">
                January 2025 – Present (7 months)
              </p>
              <p className="text-[11px] text-gray-600">Kerala, India</p>
              <ul className="ml-5 list-disc">
                <li>
                  Currently developing software solutions using modern frontend
                  technologies
                </li>
                <li>
                  Working on full‑time development projects with focus on user
                  experience
                </li>
              </ul>
            </article>

            {/* Job 2 */}
            <article>
              <h4 className="text-[13px] font-bold">Frontend Developer</h4>
              <p className="font-semibold text-gray-800">
                TADA Kids Private Limited
              </p>
              <p className="text-[11px] italic text-gray-600">
                March 2023 – January 2025 (1 year 11 months)
              </p>
              <p className="text-[11px] text-gray-600">
                Kozhikode, Kerala, India
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  Developed and maintained frontend applications using React.js
                  and modern JavaScript
                </li>
                <li>
                  Integrated REST APIs and implemented responsive design
                  principles
                </li>
                <li>
                  Collaborated with cross‑functional teams to deliver
                  high‑quality web applications
                </li>
                <li>
                  Optimized application performance and ensured cross‑platform
                  compatibility
                </li>
              </ul>
            </article>

            {/* Job 3 */}
            <article>
              <h4 className="text-[13px] font-bold">Frontend Developer</h4>
              <p className="font-semibold text-gray-800">
                Araigen Innovations Pvt Ltd
              </p>
              <p className="text-[11px] italic text-gray-600">
                March 2022 – March 2023 (1 year 1 month)
              </p>
              <p className="text-[11px] text-gray-600">
                Kozhikode, Kerala, India
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  Created engaging and user‑friendly web experiences using HTML,
                  CSS, JavaScript
                </li>
                <li>Developed WordPress and React JS applications</li>
                <li>
                  Built responsive web interfaces with focus on user experience
                </li>
                <li>
                  Contributed to innovative projects with professional
                  development experience
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-[13px] font-bold uppercase tracking-wide border-b border-gray-800 pb-1 mb-3">
            Education
          </h3>
          <article>
            <p className="font-bold">
              Bachelor of Technology – Electronics and Communications
              Engineering
            </p>
            <p className="font-semibold text-gray-800">
              APJ Abdul Kalam Technological University
            </p>
            <p className="text-[11px] italic text-gray-600">
              August 2017 – June 2021
            </p>
            <p className="text-[11px] text-gray-600">
              Government Engineering College Wayanad, Kerala
            </p>
            <p className="mt-1 text-[11px]">
              Activities: National Service Scheme (NSS) Volunteer
            </p>
          </article>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h3 className="text-[13px] font-bold uppercase tracking-wide border-b border-gray-800 pb-1 mb-3">
            Certifications
          </h3>
          <ul className="space-y-1">
            <li>
              <span className="font-semibold">Frontend Developer (React)</span>
               | HackerRank | December 2024
            </li>
            <li>
              <span className="font-semibold">React (Basic)</span>
               | HackerRank | December 2024
            </li>
            <li>
              <span className="font-semibold">React.js Certification</span>
               | LinkedIn Skill Assessment – Passed
            </li>
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h3 className="text-[13px] font-bold uppercase tracking-wide border-gray-800 pb-1 mb-3">
            Languages
          </h3>
          <p>
            <strong>English:</strong> Elementary Proficiency
          </p>
        </section>

        {/* Services Offered */}
        <section>
          <h3 className="text-[13px] font-bold uppercase tracking-wide border-b border-gray-800 pb-1 mb-3">
            Services Offered
          </h3>
          <p>Web Development | Web Design</p>
        </section>
      </div>
    </main>
  );
}
