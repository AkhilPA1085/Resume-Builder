import { StateCreator } from "zustand";
import { CertificateSlice } from "./types";

export const createCertificateSlice: StateCreator<
  CertificateSlice,
  [],
  [],
  CertificateSlice
> = (set) => ({
  certificates: [
    {
      certName: "",
      certOrg: "",
      certDate: "",
    },
  ],
  updateCertificate: (index, field, value) =>
    set((state) => {
      const updated = [...state.certificates];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return { certificates: updated };
    }),

  addCertificate: () =>
    set((state) => ({
      certificates: [
        ...state.certificates,
        {
          certName: "",
          certOrg: "",
          certDate: "",
        },
      ],
    })),

  removeCertificate: (index: number) =>
    set((state) => ({
      certificates: state.certificates.filter((_, i) => i !== index),
    })),
});
