import { StateCreator } from "zustand";
import { PersonalInfoState } from "./types";


export type PersonalInfoSlice = {
  personalInfo: PersonalInfoState;
  updatePersonalInfo: (field: keyof PersonalInfoState, value: string) => void;
};

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
