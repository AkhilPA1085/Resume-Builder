"use client";
import { Tabs, Tab, Card, CardBody, addToast } from "@heroui/react";
import PersonalInfoForm from "@/components/custom/forms/PersonalInfoFrom";
import EducationFrom from "@/components/custom/forms/EducationFrom";
import ExperienceFrom from "@/components/custom/forms/ExperienceFrom";
import CertificationFrom from "@/components/custom/forms/CertificationFrom";
import SkillFrom from "@/components/custom/forms/SkillFrom";
import SummaryFrom from "@/components/custom/forms/SummaryFrom";
import ProjesForm from "@/components/custom/forms/ProjectsForm";

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
      // "experience-info": "experience",
      "certification-info": "certificates",
      "summary-info": "summary",
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

    const errs = validateFields(dataMap[validationType], validationType);

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
                <ExperienceFrom errors={errors} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="project-info" title="Projects">
            <Card>
              <CardBody>
                <ProjesForm errors={errors} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="certification-info" title="Certification Info">
            <Card>
              <CardBody>
                <CertificationFrom errors={errors} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="skills-info" title="Skills Info">
            <Card>
              <CardBody>
                <SkillFrom errors={errors} />
              </CardBody>
            </Card>
          </Tab>

          <Tab key="summary-info" title="Summary Info">
            <Card>
              <CardBody>
                <SummaryFrom errors={errors} />
              </CardBody>
            </Card>
          </Tab>
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
          {selectedTab === "summary-info" && (
            <Button onPress={handleSubmit} variant="flat">
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
