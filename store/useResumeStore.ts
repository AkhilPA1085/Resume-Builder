import { create } from "zustand";
import {
  createPersonalInfoSlice,
  PersonalInfoSlice,
} from "./personalInfoSlice";
import { createEducationInfoSlice,EducationInfoSlice } from "./educationInfoSlice";
import {createExperienceSlice } from "@/store/experienceSlice"
import { ExperienceSlice } from "./types";

type ResumeStore = PersonalInfoSlice & EducationInfoSlice & ExperienceSlice;

export const useResumeStore = create<ResumeStore>()((...item) => ({
  ...createPersonalInfoSlice(...item),
  ...createEducationInfoSlice(...item),
  ...createExperienceSlice(...item)
}));
