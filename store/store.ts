import { create } from "zustand";

type PersonalInfoState = {
  name: string;
  title: string;
  phone: string;
  email: string;
};

type EducationInfoState = {
  degree: string;
  stream: string;
  university: string;
  duration: string;
  location: string;
};

type State = {
  personalInfo: PersonalInfoState;
  educationInfo: EducationInfoState[];
};

type Action = {
  updatePersonalInfo: (field: keyof PersonalInfoState, value: string) => void;
  updateEducationInfo: (
    index: number,
    field: keyof EducationInfoState,
    value: string
  ) => void;
  removeEducationInfo: (index: number) => void;
  addEducationInfo: () => void;
};

export const resumeStore = create<State & Action>((set) => ({
  personalInfo: { name: "", title: "", phone: "", email: "" },
  educationInfo: [
    { degree: "", stream: "", university: "", duration: "", location: "" },
  ],

  updatePersonalInfo: (field, value) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, [field]: value },
    })),

  updateEducationInfo: (index, field, value) =>
    set((state) => {
      const updated = [...state.educationInfo];
      updated[index][field] = value;
      return { educationInfo: updated };
    }),

  removeEducationInfo: (index) =>
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
}));
