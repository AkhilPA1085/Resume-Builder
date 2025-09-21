import React from "react";
import { Form, Input } from "@heroui/react";
import { Button } from "@heroui/button";
import { useResumeStore } from "@/store/useResumeStore";

export default function ExperienceForm({
  errors
}) {
  const { experience, addExperience, removeExperience, updateExperience } =
    useResumeStore();

    const getFieldError = (index, field) =>
      errors?.[`experience_${index}_${field}`];
    
  return (
    <div className="mb-6 w-full">
      <h2 className="text-lg font-bold mb-4">Experience</h2>

      {experience?.map((exp, index) => (
        <div
          key={index}
          className="border p-4 mb-4 rounded w-full flex flex-col gap-4"
        >
          <Input
            label="Job Title"
            name="jobTitle"
            value={exp.jobTitle}
            onChange={(e) =>
              updateExperience(index, e.target.name, e.target.value)
            }
          />
          <Input
            label="Company"
            name="company"
            value={exp.company}
            onChange={(e) =>
              updateExperience(index, e.target.name, e.target.value)
            }
          />
          <Input
            label="Duration"
            name="expDuration"
            value={exp.expDuration}
            onChange={(e) =>
              updateExperience(index, e.target.name, e.target.value)
            }
          />
          <Input
            label="Location"
            name="expLocation"
            value={exp.expLocation}
            onChange={(e) =>
              updateExperience(index, e.target.name, e.target.value)
            }
          />
          <Input
            label="Description"
            name="jobDescription"
            value={exp.jobDescription}
            onChange={(e) =>
              updateExperience(index, e.target.name, e.target.value)
            }
          />
          <Button
            variant="flat"
            color="danger"
            onPress={() => removeExperience(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button variant="flat" onPress={addExperience}>
        Add Experience
      </Button>
    </div>
  );
}
