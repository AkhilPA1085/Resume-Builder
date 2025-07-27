import { create } from "zustand";
import { createPersonalInfoSlice } from "./personalInfoSlice";
import { createEducationInfoSlice } from "./educationInfoSlice";
import { createExperienceSlice } from "@/store/experienceSlice";
import {
  CertificateSlice,
  EducationInfoSlice,
  ExperienceSlice,
  PersonalInfoSlice,
  SkillsSlice,
  SummarySlice,
} from "./types";
import { createCertificateSlice } from "./certificateInfoSlice";
import { createSkillsSlice } from "./skillsInfoSlice";
import { createSummarySlice } from "./summaryInfoSlice";

type ResumeStore = PersonalInfoSlice &
  EducationInfoSlice &
  ExperienceSlice &
  CertificateSlice &
  SkillsSlice &
  SummarySlice;

export const useResumeStore = create<ResumeStore>()((...item) => ({
  ...createPersonalInfoSlice(...item),
  ...createEducationInfoSlice(...item),
  ...createExperienceSlice(...item),
  ...createCertificateSlice(...item),
  ...createSkillsSlice(...item),
  ...createSummarySlice(...item)
}));
