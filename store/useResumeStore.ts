import { create } from "zustand";
import {
  createPersonalInfoSlice,
  PersonalInfoSlice,
} from "./personalInfoSlice";
import { createEducationInfoSlice } from "./educationInfoSlice";
import { createExperienceSlice } from "@/store/experienceSlice";
import { CertificateSlice, EducationInfoSlice, ExperienceSlice } from "./types";
import { createCertificateSlice } from "./certificateInfoSlice";

type ResumeStore = PersonalInfoSlice &
  EducationInfoSlice &
  ExperienceSlice &
  CertificateSlice;

export const useResumeStore = create<ResumeStore>()((...item) => ({
  ...createPersonalInfoSlice(...item),
  ...createEducationInfoSlice(...item),
  ...createExperienceSlice(...item),
  ...createCertificateSlice(...item),
}));
