import { StateCreator } from "zustand";
import { ProjectsSlice } from "./types";

export const createProjectSlice: StateCreator<
  ProjectsSlice,
  [],
  [],
  ProjectsSlice
> = (set) => ({
  project: [
    {
      projectTitle: "",
      projectDescription: "",
      hostUrl: "",
      gitHub: "",
    },
  ],

  updateProject: (index, field, value) =>
    set((state) => {
      const updated = [...state.project];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return { project: updated };
    }),

  addProject: () =>
    set((state) => ({
      project: [
        ...state.project,
        {
          projectTitle: "",
          projectDescription: "",
          hostUrl: "",
          gitHub: "",
        },
      ],
    })),

  removeProject: (index) =>
    set((state) => ({
      project: state.project.filter((_, i) => i !== index),
    })),
});
