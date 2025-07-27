import React from "react";
import { Button, Form, Input } from "@heroui/react";
import { useResumeStore } from "@/store/useResumeStore";

export default function SkillsForm({ errors }) {
  const {skills,updateSkills,addSkills,removeSkills}=useResumeStore()
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Skills</h2>

      <Form validationErrors={errors}>
        {skills?.map((skill,index)=>(
          <div key={index} className="border p-4 mb-4 rounded w-full flex flex-col gap-4">
            <Input 
              label="Skill Title" 
              name="title" 
              value={skill.title} 
              onChange={(e)=>updateSkills(index,e.target.name,e.target.value)} 
            />
            <Input 
              label="Description" 
              name="description" 
              value={skill.description} 
              onChange={(e)=>updateSkills(index,e.target.name,e.target.value)} 
            />
            <Button variant="flat" color="danger" onPress={() => removeSkills(index)}>
              Remove
            </Button>
          </div>
        ))}
        <Button variant="flat" onPress={addSkills}>Add Skills</Button>
      </Form>
    </div>
  );
}
