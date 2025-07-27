import { StateCreator } from "zustand";
import { SkillsSlice } from "./types";
export const createSkillsSlice: StateCreator<
  SkillsSlice,
  [],
  [],
  SkillsSlice
> = (set) => ({
  skills: [{ title: "", description: "" }],
  updateSkills: (index, field, value) =>
    set((state) => {
      const updated = [...state.skills];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return { skills: updated };
    }),

    addSkills:()=>set((state)=>({
        skills:[
            ...state.skills,
            {
                title:"",
                description:""
            }
        ]
    })),

    removeSkills:(index:number)=>set((state)=>({
        skills:state.skills.filter((_,i)=>i !== index)
    }))
});
