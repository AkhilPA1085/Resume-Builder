type PersonalInfoState = {
  name: string;
  title: string;
  phone: string;
  email: string;
};

export type PersonalInfoSlice = {
  personalInfo: PersonalInfoState;
  updatePersonalInfo: (field: keyof PersonalInfoState, value: string) => void;
};

type EducationInfoState = {
  degree: string;
  stream: string;
  university: string;
  duration: string;
  location: string;
};

export type EducationInfoSlice = {
  educationInfo: EducationInfoState[];
  updateEducationInfo: (
    index: number,
    field: keyof EducationInfoState,
    value: string
  ) => void;
};

type Experience = {
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

type Certificates = {
  certName: string;
  certOrg: string;
  certDate: string;
};

export type CertificateSlice = {
  certificates: Certificates[];
  updateCertificate?: (
    index: number,
    field: keyof Certificates,
    value: string
  ) => void;
  addCertificate?: () => void;
  removeCertificate?: (index: number) => void;
};

type SkillsState = {
  title: string;
  description: string;
};

export type SkillsSlice ={
  skills:SkillsState[];
  updateSkills?:(index:number,field:keyof SkillsState,value:string)=>void;
  addSkills?:()=>void;
  removeSkills?:(index:number)=>void
}


type SummaryState={
  personalSummary:string;
  jobDescription?:string;
}

export type SummarySlice={
  summary:SummaryState;
  updateSummary:(field:keyof SummaryState,value:string)=>void;
}