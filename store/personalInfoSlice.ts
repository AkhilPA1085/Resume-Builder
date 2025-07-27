import { StateCreator } from "zustand";
import { PersonalInfoSlice } from "./types";

export const createPersonalInfoSlice: StateCreator<
  PersonalInfoSlice,
  [],
  [],
  PersonalInfoSlice
> = (set) => ({
  personalInfo: { name: "", title: "", phone: "", email: "" },
  updatePersonalInfo: (field, value) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, [field]: value },
    })),
});
