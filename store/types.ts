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

export type Certificates = {
  certName: string;
  certOrg: string;
  certDate: string;
};

export type EducationInfoSlice = {
  educationInfo: EducationInfoState[];
  updateEducationInfo: (
    index: number,
    field: keyof EducationInfoState,
    value: string
  ) => void;
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
