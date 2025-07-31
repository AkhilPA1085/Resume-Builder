'use client'
import React, { useRef } from "react";
import { Button } from "@heroui/button";
import { useResumeStore } from "../../../store/useResumeStore";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const DownloadIcon=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}

const TemplateOne = ({data}) => {
  const { personalInfo, educationInfo, experience,skills, certificates, summary } =
      useResumeStore();
  const resumeRef = useRef();

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
  
    if (!element) return;
  
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
  
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };
  return (
    <div className="text-[11px] font-sans text-[#333] leading-[1.4] print:text-black print:bg-white">
      {/* <button
        className="fixed top-5 right-5 px-4 py-2 bg-blue-500 text-white text-xs rounded-md cursor-pointer z-50 hover:bg-blue-600 print:hidden"
        onClick={handlePrint}
      >
        Print/Save as PDF
      
      </button> */}

      <Button
      // className="fixed top-5 right-5"
      onPress={handleDownloadPDF} 
      color="success" 
      endContent={<DownloadIcon />}>
        Download
      </Button>



      <div ref={resumeRef} className="bg-white max-w-[8.5in] min-h-[11in] mx-auto p-6 print:p-4">
        {/* Header */}
        <div className="text-center mb-6 border-b-2 border-[#2c3e50] pb-4">
          <div className="text-[28px] font-bold text-[#2c3e50] mb-1 uppercase">{personalInfo?.name}</div>
          <div className="text-sm text-[#7f8c8d] mb-2">
            {personalInfo?.title}
          </div>
          <div className="space-x-2 text-[10px] text-[#555]">
            <a href={`tel:${personalInfo?.phone}`} className="hover:underline">
              {personalInfo?.phone}
            </a>
            |
            <a href={`mailto:${personalInfo?.email}`} className="hover:underline">
              {personalInfo?.email}
            </a>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Left Column */}
          <div className="w-1/3 space-y-6">
            {/* Technical Skills */}
            <section>
              <h2 className="text-[13px] font-bold uppercase text-[#2c3e50] border-b border-gray-300 mb-2">
                Skills
              </h2>
              {skills?.map((skill,index)=>(
                <React.Fragment key={index}>
                  <div>
                    <strong>{skill.title}</strong>
                    <br />{skill.description}
                  </div>
                  <br />
                </React.Fragment>
              ))}
              {/* <div>
                <strong>Languages:</strong>
                <br />{data?.languages}
              </div>
              <br />
              <div>
                <strong>Styling & Design:</strong>
                <br />{data?.styling}
              </div>
              <br />
              <div>
                <strong>Tools & Technologies:</strong>
                <br />{data?.tools}
              </div>
              <br />
              <div>
                <strong>Specializations:</strong>
                <br />{data?.specializations}
              </div> */}
            </section>

            {/* Education */}
            <section>
              <h2 className="text-[13px] font-bold uppercase text-[#2c3e50] border-b border-gray-300 mb-2">
                Education
              </h2>
              {educationInfo?.map((education,index)=>(
                  <div key={index}>
                    <div className="font-bold text-[11px]">{education?.degree}</div>
                    <div className="italic text-[10px] text-[#7f8c8d]">
                      {education?.stream}
                    </div>
                    <div className="italic text-[10px] text-[#7f8c8d]">
                      {education?.university}
                    </div>
                    <div className="text-[10px] text-[#95a5a6]">{education?.duration}</div>
                    <div className="text-[10px] text-[#95a5a6]">
                      {education?.location}
                    </div>
                  </div>
              ))}
              
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-[13px] font-bold uppercase text-[#2c3e50] border-b border-gray-300 mb-2">
                Certifications
              </h2>
              {certificates?.map((cert,index)=>(
                  <div className="mb-2" key={index}>
                  <div className="font-bold text-[11px]">{cert?.certName}</div>
                  <div className="italic text-[10px] text-[#7f8c8d]">{cert?.certOrg}</div>
                  <div className="text-[10px] text-[#95a5a6]">{cert?.certDate}</div>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="w-2/3 space-y-6">
            {/* Summary */}
            <section>
              <h2 className="text-[13px] font-bold uppercase text-[#2c3e50] border-b border-gray-300 mb-2">
                Professional Summary
              </h2>
              <p className="text-justify">
                {summary?.personalSummary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-[13px] font-bold uppercase text-[#2c3e50] border-b border-gray-300 mb-2">
                Professional Experience
              </h2>
              {experience?.map((job, idx) => (
                <div key={idx} className="mb-4">
                  <div className="font-bold text-[12px] text-[#2c3e50]">{job.jobTitle}</div>
                  <div className="italic text-[11px] text-[#7f8c8d]">{job.company}</div>
                  <div className="text-[10px] text-[#95a5a6]">{job.expDuration}</div>
                  <div className="text-[10px] text-[#95a5a6] mb-1">{job.expLocation}</div>
                  <p className="text-justify">{job.jobDescription}</p>
                </div>
              ))}
            </section>

            {/* Key Achievements */}
            {/* <section>
              <h2 className="text-[13px] font-bold uppercase text-[#2c3e50] border-b border-gray-300 mb-2">
                Key Achievements
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-[11px]">
                <li>Successfully delivered multiple high-performance web applications using React.js and Next.js</li>
                <li>Implemented responsive design solutions ensuring cross-platform compatibility</li>
                <li>Optimized application performance and improved user experience through efficient coding practices</li>
                <li>Earned multiple professional certifications in React development</li>
              </ul>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
