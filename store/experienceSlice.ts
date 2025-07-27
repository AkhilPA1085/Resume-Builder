import { StateCreator } from "zustand";
import { ExperienceSlice } from "./types";

export const createExperienceSlice: StateCreator<
  ExperienceSlice,
  [],
  [],
  ExperienceSlice
> = (set) => ({
  experience: [
    {
      jobTitle: "",
      company: "",
      expDuration: "",
      expLocation: "",
      jobDescription: "",
    },
  ],

  updateExperience: (index, field, value) =>
    set((state) => {
      const updated = [...state.experience];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return { experience: updated };
    }),

  addExperience: () =>
    set((state) => ({
      experience: [
        ...state.experience,
        {
          jobTitle: "",
          company: "",
          expDuration: "",
          expLocation: "",
          jobDescription: "",
        },
      ],
    })),

  removeExperience: (index) =>
    set((state) => ({
      experience: state.experience.filter((_, i) => i !== index),
    })),
});
