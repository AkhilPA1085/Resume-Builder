"use client";
import { Tabs, Tab, Card, CardBody, addToast } from "@heroui/react";
import PersonalInfoForm from "@/components/custom/forms/PersonalInfoFrom";
import EducationFrom from "@/components/custom/forms/EducationFrom";
import ExperienceFrom from "@/components/custom/forms/ExperienceFrom";
import CertificationFrom from "@/components/custom/forms/CertificationFrom";
import SkillFrom from "@/components/custom/forms/SkillFrom";
import SummaryFrom from "@/components/custom/forms/SummaryFrom";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { TAB_KEYS } from "@/helpers/constants";
import { resumeStore, usePersonalInfoStore } from "@/store/store";
import {
  educationInfoValidation,
  experienceInfoValidation,
  perSonalInfoValidation,
} from "@/helpers/validations";
import { useResumeStore } from "@/store/useResumeStore";

export default function CustomTab() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    education: [
      {
        degree: "",
        stream: "",
        university: "",
        duration: "",
        location: "",
      },
    ],
    experience: [
      {
        jobTitle: "",
        company: "",
        expDuration: "",
        expLocation: "",
        jobDescription: "",
      },
    ],
    certifications: [
      {
        certName: "",
        certOrg: "",
        certDate: "",
      },
    ],
    skills: [
      {
        title: "",
        description: "",
      },
    ],
    frontend: "",
    languages: "",
    styling: "",
    tools: "",
    specializations: "",
    summary: "",
    achievements: [],
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState("personal-info");

  const { personalInfo, educationInfo, experience } = useResumeStore();

  // useEffect(() => {
  //   const data = localStorage.getItem("resumeData");
  //   const resumeData = data ? JSON.parse(data) : null;
  //   if (resumeData) {
  //     setFormData(resumeData);
  //   }
  // }, []);

  const handleTabChange = (value) => {
    setSelectedTab(value);
  };

  const handleNextTabChange = (formName) => {
    let errs;
    switch (formName) {
      case "personal-info":
        errs = perSonalInfoValidation(personalInfo);
        break;
      case "education-info":
        errs = educationInfoValidation(educationInfo);
        break;
      case "experience-info":
        errs = {};
        break;
    }
    if (Object.keys(errs).length > 0) {
      console.log("errs", errs);
      addToast({
        title: "Error",
        description: "Please fill all the required fields before submit",
        color: "danger",
      });
      setErrors(errs);
    } else {
      const currentTab = TAB_KEYS.indexOf(selectedTab);
      const nextTab = currentTab + 1;
      if (nextTab < TAB_KEYS.length) {
        setSelectedTab(TAB_KEYS[nextTab]);
      }
    }
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const validate = () => {
  //   const errs = {};

  //   // Personal Info
  //   if (!personalInfo.name.trim()) errs.name = "Name is required";
  //   if (!personalInfo.email.trim()) {
  //     errs.email = "Email is required";
  //   } else if (!/^\S+@\S+\.\S+$/.test(personalInfo.email)) {
  //     errs.email = "Invalid email format";
  //   }

  //   if (!personalInfo.phone.trim()) {
  //     errs.phone = "Phone number is required";
  //   } else if (!/^[0-9]{10}$/.test(personalInfo.phone)) {
  //     errs.phone = "Phone number must be 10 digits";
  //   }

  //   if (!personalInfo.title.trim()) {
  //     errs.title = "Title is required";
  //   }

  //   // Education
  //   educationInfo.forEach((edu, i) => {
  //     if (!edu.degree.trim()) errs[`education_${i}_degree`] = "Degree required";
  //     if (!edu.stream.trim()) errs[`education_${i}_stream`] = "Stream required";
  //     if (!edu.university.trim())
  //       errs[`education_${i}_university`] = "University required";
  //     if (!edu.duration.trim())
  //       errs[`education_${i}_duration`] = "Duration required";
  //     if (!edu.location.trim())
  //       errs[`education_${i}_location`] = "Location required";
  //   });

  //   // Experience
  //   formData.experience.forEach((exp, index) => {
  //     if (
  //       !exp.jobTitle.trim() ||
  //       !exp.company.trim() ||
  //       !exp.expDuration.trim() ||
  //       !exp.expLocation.trim() ||
  //       !exp.jobDescription.trim()
  //     ) {
  //       errs[`experience_${index}`] = "All experience fields are required";
  //     }
  //   });

  //   // Certifications
  //   formData.certifications.forEach((cert, index) => {
  //     if (
  //       !cert.certName.trim() ||
  //       !cert.certOrg.trim() ||
  //       !cert.certDate.trim()
  //     ) {
  //       errs[`certifications_${index}`] =
  //         "All certification fields are required";
  //     }
  //   });

  //   // Skills
  //   formData.skills.forEach((skill, index) => {
  //     if (!skill.title.trim() || !skill.description.trim()) {
  //       errs[`skills_${index}`] = "All skill fields are required";
  //     }
  //   });

  //   // Summary
  //   if (!formData.summary.trim()) {
  //     errs.summary = "Summary is required";
  //   }

  //   return errs;
  // };

  // const handleEducationChange = (e, index) => {
  //   const updatedEducation = [...formData.education];
  //   updatedEducation[index][e.target.name] = e.target.value;
  //   setFormData({ ...formData, education: updatedEducation });
  // };

  // const addEducation = () => {
  //   setFormData({
  //     ...formData,
  //     education: [
  //       ...formData.education,
  //       {
  //         degree: "",
  //         stream: "",
  //         university: "",
  //         duration: "",
  //         location: "",
  //       },
  //     ],
  //   });
  // };

  // const removeEducation = (index) => {
  //   const updatedEducation = formData.education.filter((_, i) => i !== index);
  //   setFormData({ ...formData, education: updatedEducation });
  // };

  // const handleExperienceChange = (e, index) => {
  //   const updatedExperience = [...formData.experience];
  //   updatedExperience[index][e.target.name] = e.target.value;
  //   setFormData({ ...formData, experience: updatedExperience });
  // };

  // const addExperience = () => {
  //   setFormData({
  //     ...formData,
  //     experience: [
  //       ...formData.experience,
  //       {
  //         jobTitle: "",
  //         company: "",
  //         expDuration: "",
  //         expLocation: "",
  //         jobDescription: "",
  //       },
  //     ],
  //   });
  // };

  // const removeExperience = (index) => {
  //   const updatedExperience = formData.experience.filter((_, i) => i !== index);
  //   setFormData({
  //     ...formData,
  //     experience: updatedExperience,
  //   });
  // };

  // const handleCertificationChange = (e, index) => {
  //   const updatedCertification = [...formData.certifications];
  //   updatedCertification[index][e.target.name] = e.target.value;
  //   setFormData({ ...formData, certifications: updatedCertification });
  // };

  // const addCertifications = () => {
  //   setFormData({
  //     ...formData,
  //     certifications: [
  //       ...formData.certifications,
  //       {
  //         certName: "",
  //         certOrg: "",
  //         certDate: "",
  //       },
  //     ],
  //   });
  // };

  // const removeCertifications = (index) => {
  //   const updatedCertifications = formData.certifications.filter(
  //     (_, i) => i !== index
  //   );
  //   setFormData({
  //     ...formData,
  //     certifications: updatedCertifications,
  //   });
  // };

  // const handleSkillsChange = (e, index) => {
  //   const updatedSkills = [...formData.skills];
  //   updatedSkills[index][e.target.name] = e.target.value;
  //   setFormData({ ...formData, skills: formData.skills });
  // };

  // const addSkills = () => {
  //   setFormData({
  //     ...formData,
  //     skills: [
  //       ...formData.skills,
  //       {
  //         title: "",
  //         description: "",
  //       },
  //     ],
  //   });
  // };

  // const removeSkills = (index) => {
  //   const updatedSkills = formData.skills.filter((_, i) => i !== index);
  //   setFormData({
  //     ...formData,
  //     skills: updatedSkills,
  //   });
  // };

  // const handleSubmit = () => {
  //   const errs = validate();
  //   if (Object.keys(errs).length > 0) {
  //     console.log("errs", errs);
  //     addToast({
  //       title: "Error",
  //       description: "Please fill all the required fields before submit",
  //       color: "danger",
  //     });
  //     setErrors(errs);
  //   } else {
  //     setErrors({});
  //     console.log("formData", formData);
  //     const formDetails = JSON.stringify(formData);
  //     localStorage.setItem("resumeData", formDetails);
  //     // const queryString = encodeURIComponent(JSON.stringify(formData));
  //     router.push(`/templates`);
  //     // alert("Resume Submitted Successfully!");
  //   }
  // };

  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          selectedKey={selectedTab}
          onSelectionChange={handleTabChange}
        >
          <Tab key="personal-info" title="Personal Info">
            <Card>
              <CardBody>
                <PersonalInfoForm errors={errors} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="education-info" title="Education Info">
            <Card>
              <CardBody>
                <EducationFrom errors={errors} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="experience-info" title="Experience Info">
            <Card>
              <CardBody>
                <ExperienceFrom
                  errors={errors}
                />
              </CardBody>
            </Card>
          </Tab>
          {/* 
          <Tab key="certification-info" title="Certification Info">
            <Card>
              <CardBody>
                <CertificationFrom
                  data={formData.certifications}
                  onChange={handleCertificationChange}
                  addCertifications={addCertifications}
                  removeCertifications={removeCertifications}
                  errors={errors}
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="skills-info" title="Skills Info">
            <Card>
              <CardBody>
                <SkillFrom
                  data={formData.skills}
                  onChange={handleSkillsChange}
                  addSkills={addSkills}
                  removeSkills={removeSkills}
                  errors={errors}
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="summary-info" title="Summary Info">
            <Card>
              <CardBody>
                <SummaryFrom
                  data={formData}
                  onChange={handleChange}
                  errors={errors}
                />
              </CardBody>
            </Card>
          </Tab> */}
        </Tabs>

        <div className="flex justify-end gap-4 mt-4">
          {selectedTab !== "summary-info" && (
            <Button
              onPress={() => handleNextTabChange(selectedTab)}
              variant="flat"
            >
              Next
            </Button>
          )}
          {/* {selectedTab === "summary-info" && (
            <Button onPress={handleSubmit} variant="flat">
              Submit
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
}
