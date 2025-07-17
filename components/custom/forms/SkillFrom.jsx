import React from "react";
import { Button, Form, Input } from "@heroui/react";

export default function SkillsForm({ data, onChange,addSkills,removeSkills, errors }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Skills</h2>

      <Form validationErrors={errors}>
        {data?.map((skill,index)=>(
          <React.Fragment key={index}>
            <Input 
              label="Skill Title" 
              name="title" 
              value={skill.title} 
              onChange={(e)=>onChange(e,index)} 
            />
            <Input 
              label="Description" 
              name="description" 
              value={data.description} 
              onChange={(e)=>onChange(e,index)} 
            />
            <Button variant="flat" color="danger" onClick={() => removeSkills(index)}>
              Remove
            </Button>
          </React.Fragment>
        ))}
        <Button variant="flat" onClick={addSkills}>Add Skills</Button>
      </Form>
    </div>
  );
}
