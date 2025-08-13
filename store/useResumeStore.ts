import { create } from "zustand";
import { createPersonalInfoSlice } from "./personalInfoSlice";
import { createEducationInfoSlice } from "./educationInfoSlice";
import { createExperienceSlice } from "@/store/experienceSlice";
import {createProjectSlice} from "@/store/projectSlice"
import {
  CertificateSlice,
  EducationInfoSlice,
  ExperienceSlice,
  PersonalInfoSlice,
  SkillsSlice,
  SummarySlice,
  ProjectsSlice
} from "./types";
import { createCertificateSlice } from "./certificateInfoSlice";
import { createSkillsSlice } from "./skillsInfoSlice";
import { createSummarySlice } from "./summaryInfoSlice";

type ResumeStore = PersonalInfoSlice &
  EducationInfoSlice &
  ExperienceSlice &
  CertificateSlice &
  SkillsSlice &
  ProjectsSlice &
  SummarySlice;

export const useResumeStore = create<ResumeStore>()((...item) => ({
  ...createPersonalInfoSlice(...item),
  ...createEducationInfoSlice(...item),
  ...createExperienceSlice(...item),
  ...createProjectSlice(...item),
  ...createCertificateSlice(...item),
  ...createSkillsSlice(...item),
  ...createSummarySlice(...item)
}));
