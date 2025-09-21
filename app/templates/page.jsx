'use client'
import TemplateOne from "../../components/custom/resumeTemplates/TemplateOne";
import TemplateTwo from "../../components/custom/resumeTemplates/TemplateTwo";
import { useResumeStore } from "@/store/useResumeStore";

export default function TemplatePage() {
return (
    <div>
      {/* <h1 className={title()}>Template One</h1> */}
      {/* <div className="flex align-items-center gap-4"> */}
      <TemplateOne/>
      {/* <TemplateTwo/> */}
      {/* </div> */}
    </div>
  );
}
