export type PersonalInfoState = {
  name: string;
  title: string;
  phone: string;
  email: string;
};

export type EducationInfoState = {
  degree: string;
  stream: string;
  university: string;
  duration: string;
  location: string;
};

export type Experience = {
  jobTitle: string;
  company: string;
  expDuration: string;
  expLocation: string;
  jobDescription: string;
};

export type ExperienceSlice = {
  experience: Experience[];
  updateExperience: (
    index: number,
    field: keyof Experience,
    value: string
  ) => void;
  addExperience: () => void;
  removeExperience: (index: number) => void;
};
