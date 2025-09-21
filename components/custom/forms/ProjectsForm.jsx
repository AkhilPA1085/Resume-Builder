import React from "react";
import { Form, Input } from "@heroui/react";
import { Button } from "@heroui/button";
import { useResumeStore } from "@/store/useResumeStore";

export default function ProjectsForm({
  errors
}) {
  const { project, updateProject,addProject,removeProject} =
    useResumeStore();

    const getFieldError = (index, field) =>
      errors?.[`projects_${index}_${field}`];
    
  return (
    <div className="mb-6 w-full">
      <h2 className="text-lg font-bold mb-4">Projects</h2>

      {project?.map((proj, index) => (
        <div
          key={index}
          className="border p-4 mb-4 rounded w-full flex flex-col gap-4"
        >
          <Input
            label="Project Title"
            name="projectTitle"
            value={proj.projectTitle}
            onChange={(e) =>
              updateProject(index, e.target.name, e.target.value)
            }
          />
          <Input
            label="Description"
            name="projectDescription"
            value={proj.projectDescription}
            onChange={(e) =>
              updateProject(index, e.target.name, e.target.value)
            }
          />
          <Input
            label="Host URL"
            name="hostUrl"
            value={proj.hostUrl}
            type="url"
            onChange={(e) =>
              updateProject(index, e.target.name, e.target.value)
            }
          />
          <Input
            label="Github URL"
            name="gitHub"
            value={proj.gitHub}
            type="url"
            onChange={(e) =>
              updateProject(index, e.target.name, e.target.value)
            }
          />
          <Button
            variant="flat"
            color="danger"
            onPress={() => removeProject(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button variant="flat" onPress={addProject}>
        Add Project
      </Button>
    </div>
  );
}
