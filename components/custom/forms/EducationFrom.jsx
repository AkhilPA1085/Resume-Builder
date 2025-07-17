import React from "react";
import { Form, Input, Button } from "@heroui/react";

export default function EducationForm({ data, onChange, addEducation, removeEducation, errors }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Education</h2>
    
    <Form validationErrors={errors} className="w-full gap-4">
      {data?.map((edu, index) => {
        const fieldError = errors[`education_${index}`]
        console.log('fieldError',fieldError)
        return(
        <div key={index} className="border p-4 mb-4 rounded w-full flex flex-col gap-4">
          <Input
            label="Degree"
            name="degree"
            value={edu.degree}
            onChange={(e) => onChange(e, index)}
          />
          <Input
            label="Stream"
            name="stream"
            value={edu.stream}
            onChange={(e) => onChange(e, index)}
          />
          <Input
            label="University"
            name="university"
            value={edu.university}
            onChange={(e) => onChange(e, index)}
          />
          <Input
            label="Duration"
            name="duration"
            value={edu.duration}
            onChange={(e) => onChange(e, index)}
          />
          <Input
            label="Location"
            name="location"
            value={edu.location}
            onChange={(e) => onChange(e, index)}
          />
          <Button variant="flat" color="danger" onClick={() => removeEducation(index)}>
            Remove
          </Button>
        </div>
        )
      })}
    </Form>

      <Button variant="flat" onClick={addEducation}>Add Education</Button>
    </div>
  );
}
