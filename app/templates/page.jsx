'use client'
import TemplateOne from "../../components/custom/resumeTemplates/TemplateOne";
import TemplateTwo from "../../components/custom/resumeTemplates/TemplateTwo";

export default function TemplatePage() {
  // const storedData = localStorage?.getItem('resumeData');
  // const resumeData = storedData ? JSON.parse(storedData) : null;
return (
    <div>
      {/* <h1 className={title()}>Template One</h1> */}
      <div className="flex align-items-center gap-4">
      {/* <TemplateOne data={resumeData}/> */}
      <TemplateTwo/>
      </div>
    </div>
  );
}
