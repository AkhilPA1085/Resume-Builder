import React from "react";
import { Form, Input } from "@heroui/react";
import { Button } from "@heroui/button";

export default function ExperienceForm({ data, onChange, addExperience,removeExperience }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Experience</h2>

        {data?.map((exp,index)=>(
            <div key={index} className="border p-4 mb-4 rounded w-full flex flex-col gap-4">
            <Input label="Job Title" name="jobTitle" value={exp.jobTitle} onChange={(e) => onChange(e, index)} />
            <Input label="Company" name="company" value={exp.company} onChange={(e) => onChange(e, index)} />
            <Input label="Duration" name="expDuration" value={exp.expDuration} onChange={(e) => onChange(e, index)} />
            <Input label="Location" name="expLocation" value={exp.expLocation} onChange={(e) => onChange(e, index)} />
            <Input label="Description" name="jobDescription" value={exp.jobDescription} onChange={(e) => onChange(e, index)} />
            <Button variant="flat" color="danger" onClick={() => removeExperience(index)}>
                Remove
            </Button>
            </div>
        ))}
        <Button variant="flat" onClick={addExperience}>Add Experience</Button>
        
    </div>
  );
}
