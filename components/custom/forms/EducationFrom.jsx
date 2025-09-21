import React from "react";
import { Form, Input, Button } from "@heroui/react";
import { useResumeStore } from "@/store/useResumeStore";

export default function EducationForm({ errors }) {
  const {
    educationInfo,
    updateEducationInfo,
    removeEducationInfo,
    addEducationInfo,
  } = useResumeStore();

  const getFieldError = (index, field) =>
    errors?.[`education_${index}_${field}`];

  return (
    <div className="mb-6 w-full">
      <h2 className="text-lg font-bold mb-4">Education</h2>

      <Form className="w-full gap-4">
        {educationInfo?.map((edu, index) => {
          return (
            <div
              key={index}
              className="border p-4 mb-4 rounded w-full flex flex-col gap-4"
            >
              <Input
                label="Degree"
                name="degree"
                value={edu.degree}
                onChange={(e) =>
                  updateEducationInfo(index, e.target.name, e.target.value)
                }
                isInvalid={!!getFieldError(index, "degree")}
                errorMessage={getFieldError(index, "degree")}
              />
              <Input
                label="Stream"
                name="stream"
                value={edu.stream}
                onChange={(e) =>
                  updateEducationInfo(index, e.target.name, e.target.value)
                }
                isInvalid={!!getFieldError(index, "stream")}
                errorMessage={getFieldError(index, "stream")}
              />
              <Input
                label="University"
                name="university"
                value={edu.university}
                onChange={(e) =>
                  updateEducationInfo(index, e.target.name, e.target.value)
                }
                isInvalid={!!getFieldError(index, "university")}
                errorMessage={getFieldError(index, "university")}
              />
              <Input
                label="Duration"
                name="duration"
                value={edu.duration}
                onChange={(e) =>
                  updateEducationInfo(index, e.target.name, e.target.value)
                }
                isInvalid={!!getFieldError(index, "duration")}
                errorMessage={getFieldError(index, "duration")}
              />
              <Input
                label="Location"
                name="location"
                value={edu.location}
                onChange={(e) =>
                  updateEducationInfo(index, e.target.name, e.target.value)
                }
                isInvalid={!!getFieldError(index, "location")}
                errorMessage={getFieldError(index, "location")}
              />
              <Button
                variant="flat"
                color="danger"
                onClick={() => removeEducationInfo(index)}
              >
                Remove
              </Button>
            </div>
          );
        })}
      </Form>

      <Button variant="flat" onPress={addEducationInfo}>
        Add Education
      </Button>
    </div>
  );
}
