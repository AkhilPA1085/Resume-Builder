import { StateCreator } from "zustand";
import { EducationInfoState } from "./types";

export type EducationInfoSlice = {
  educationInfo: EducationInfoState[];
  updateEducationInfo: (
    index: number,
    field: keyof EducationInfoState,
    value: string
  ) => void;
};

export const createEducationInfoSlice: StateCreator<
  EducationInfoSlice,
  [],
  [],
  EducationInfoSlice
> = (set) => ({
  educationInfo: [
    {
      degree: "",
      stream: "",
      university: "",
      duration: "",
      location: "",
    },
  ],
  updateEducationInfo: (index, field, value) =>
    set((state) => {
      const updated = [...state.educationInfo];
      updated[index][field] = value;
      return { educationInfo: updated };
    }),

  removeEducationInfo: (index: number) =>
    set((state) => ({
      educationInfo: state.educationInfo.filter((_, i) => i !== index),
    })),

  addEducationInfo: () =>
    set((state) => ({
      educationInfo: [
        ...state.educationInfo,
        {
          degree: "",
          stream: "",
          university: "",
          duration: "",
          location: "",
        },
      ],
    })),
});
