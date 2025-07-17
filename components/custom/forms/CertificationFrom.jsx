import React from "react";
import { Form, Input } from "@heroui/react";
import { Button } from "@heroui/button";

export default function CertificationForm({ data, onChange, addCertifications,removeCertifications,errors }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Certifications</h2>
    
      <Form validationErrors={errors}>
        {data?.map((data,index)=>(
            <div key={index} className="border p-4 mb-4 rounded w-full flex flex-col gap-4">
                <Input label="Certification Name" name="certName" value={data.certName} onChange={(e)=>onChange(e,index)} />
                <Input label="Organization" name="certOrg" value={data.certOrg} onChange={(e)=>onChange(e,index)} />
                <Input label="Issued Date" name="certDate" value={data.certDate} onChange={(e)=>onChange(e,index)} />
                <Button variant="flat" color="danger" onClick={() => removeCertifications(index)}>
                 Remove
                </Button>
            </div>
        ))}
        <Button variant="flat" onClick={addCertifications}>Add Certification</Button>
      </Form>
    </div>
  );
}
