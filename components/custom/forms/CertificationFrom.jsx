import React from "react";
import { Form, Input } from "@heroui/react";
import { Button } from "@heroui/button";
import { useResumeStore } from "@/store/useResumeStore";

export default function CertificationForm({ errors }) {
  const { certificates, updateCertificate, addCertificate, removeCertificate } =
    useResumeStore();
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Certifications</h2>

      <Form validationErrors={errors}>
        {certificates?.map((data, index) => (
          <div
            key={index}
            className="border p-4 mb-4 rounded w-full flex flex-col gap-4"
          >
            <Input
              label="Certification Name"
              name="certName"
              value={data.certName}
              onChange={(e) => updateCertificate(index,e.target.name,e.target.value)}
            />
            <Input
              label="Organization"
              name="certOrg"
              value={data.certOrg}
              onChange={(e) => updateCertificate(index,e.target.name,e.target.value)}
            />
            <Input
              label="Issued Date"
              name="certDate"
              value={data.certDate}
              onChange={(e) => updateCertificate(index,e.target.name,e.target.value)}
            />
            <Button
              variant="flat"
              color="danger"
              onPress={() => removeCertificate(index)}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button variant="flat" onPress={addCertificate}>
          Add Certification
        </Button>
      </Form>
    </div>
  );
}
