"use client";
import { Tabs, Tab, Card, CardBody, addToast } from "@heroui/react";
import PersonalInfoForm from "@/components/custom/forms/PersonalInfoFrom";
import EducationFrom from "@/components/custom/forms/EducationFrom";
import ExperienceFrom from "@/components/custom/forms/ExperienceFrom";
import CertificationFrom from "@/components/custom/forms/CertificationFrom";
import SkillFrom from "@/components/custom/forms/SkillFrom";
import SummaryFrom from "@/components/custom/forms/SummaryFrom";
import ProjectsForm from "@/components/custom/forms/ProjectsForm";

import CustomTabTitle from "@/components/custom/CustomTabTitle";
import ProfileIcon from "@/components/custom/customIcons/ProfileIcon";
import EducationIcon from "@/components/custom/customIcons/EducationIcon";
import ExperienceIcon from "@/components/custom/customIcons/ExperienceIcon";
import CertificateIcon from "@/components/custom/customIcons/CertificateIcon";
import ProjectsIcon from "@/components/custom/customIcons/ProjectsIcon";
import SkillsIcon from "@/components/custom/customIcons/SkillsIcon";
import SummaryIcon from "@/components/custom/customIcons/SummaryIcon";

import { useState } from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { TAB_KEYS } from "@/utils/constants";
import { useResumeStore } from "@/store/useResumeStore";
import { validateFields } from "@/utils/validateFields";

export default function CustomTab() {
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("personal-info");
  const {
    personalInfo,
    educationInfo,
    experience,
    skills,
    certificates,
    summary,
  } = useResumeStore();

  const handleTabChange = (value) => {
    setSelectedTab(value);
  };

  const handleNextTabChange = (formName) => {
    const typeMap = {
      "personal-info": "personal",
      "education-info": "education",
      "experience-info": "experience",
      "certification-info": "certificates",
      "summary-info": "summary",
      "project-info":"projects"
    };

    if (
      formName === "experience-info" ||
      formName === "skills-info" ||
      formName === "project-info"
    ) {
      const currentTab = TAB_KEYS.indexOf(selectedTab);
      const nextTab = currentTab + 1;
      if (nextTab < TAB_KEYS.length) {
        setSelectedTab(TAB_KEYS[nextTab]);
      }
      return;
    }

    const validationType = typeMap[formName];

    if (!validationType) {
      console.warn(`Unknown form name: ${formName}`);
      return;
    }

    const dataMap = {
      personal: personalInfo,
      education: educationInfo,
      // experience: experience,
      certificates: certificates,
      summary: summary,
    };

    // const errs = validateFields(dataMap[validationType], validationType);
    const errs={}

    if (Object.keys(errs).length > 0) {
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

  const handleSubmit = () => {
    router.push("/templates");
  };

  return (
    <div className="h-screen flex gap-10 w-full">
      {/* Sidebar */}
      <div className="w-full fixed left-0 border-r shadow-md">
        <Tabs
          aria-label="Sidebar Navigation"
          selectedKey={selectedTab}
          onSelectionChange={handleTabChange}
          orientation="vertical"
          classNames={{
            tabList: "flex flex-col gap-2 w-full p-3 h-screen",
            tab: "justify-start text-left px-3 py-2 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-600",
          }}
        >
          <Tab
            key="personal-info"
            title={
              <CustomTabTitle title="Personal Info" icon={<ProfileIcon />} />
            }
          />
          <Tab
            key="education-info"
            title={
              <CustomTabTitle title="Education Info" icon={<EducationIcon />} />
            }
          />
          <Tab
            key="experience-info"
            title={
              <CustomTabTitle
                title="Experience Info"
                icon={<ExperienceIcon />}
              />
            }
          />
         
          <Tab
            key="certification-info"
            title={
              <CustomTabTitle
                title="Certification Info"
                icon={<CertificateIcon />}
              />
            }
          />
           <Tab
            key="project-info"
            title={<CustomTabTitle title="Projects" icon={<ProjectsIcon />} />}
          />
          <Tab
            key="skills-info"
            title={<CustomTabTitle title="Skills Info" icon={<SkillsIcon />} />}
          />
          <Tab
            key="summary-info"
            title={
              <CustomTabTitle title="Summary Info" icon={<SummaryIcon />} />
            }
          />
        </Tabs>
      </div>

      {/* Content */}
      <div className="ml-[50px] md:ml-[150px] p-6 w-full h-screen">
        {selectedTab === "personal-info" && (
          <Card className="w-full">
            <CardBody>
              <PersonalInfoForm errors={errors} />
            </CardBody>
          </Card>
        )}
        {selectedTab === "education-info" && (
          <Card className="w-full">
            <CardBody>
              <EducationFrom errors={errors} />
            </CardBody>
          </Card>
        )}
        {selectedTab === "experience-info" && (
          <Card className="w-full">
            <CardBody>
              <ExperienceFrom errors={errors} />
            </CardBody>
          </Card>
        )}
        {selectedTab === "project-info" && (
          <Card className="w-full">
            <CardBody>
              <ProjectsForm errors={errors} />
            </CardBody>
          </Card>
        )}
        {selectedTab === "certification-info" && (
          <Card className="w-full">
            <CardBody>
              <CertificationFrom errors={errors} />
            </CardBody>
          </Card>
        )}
        {selectedTab === "skills-info" && (
          <Card className="w-full">
            <CardBody>
              <SkillFrom errors={errors} />
            </CardBody>
          </Card>
        )}
        {selectedTab === "summary-info" && (
          <Card className="w-full">
            <CardBody>
              <SummaryFrom errors={errors} />
            </CardBody>
          </Card>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          {selectedTab !== "summary-info" && (
            <Button
              onPress={() => handleNextTabChange(selectedTab)}
              variant="flat"
              className="w-full sm:w-auto"
            >
              Next
            </Button>
          )}
          {selectedTab === "summary-info" && (
            <Button
              onPress={handleSubmit}
              variant="flat"
              className="w-full sm:w-auto"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
