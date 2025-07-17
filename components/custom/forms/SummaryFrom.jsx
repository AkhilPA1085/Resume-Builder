import React, { useState } from "react";
import { Form, Input, Textarea } from "@heroui/react";

export default function SummaryForm({ data, onChange, errors }) {
  const[jobDescription,setJobDescription]=useState("")
  const handleChangeJobDescription=(e)=>{
    setJobDescription(e.target.value)
  }
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Professional Summary</h2>

      <Form validationErrors={errors}>
        <Textarea 
          className="w-full" 
          // label="Summary" 
          placeholder="Enter your Summary"
          name="summary"
          value={data.summary}
          onChange={onChange}
        />
        <Textarea 
          className="w-full" 
          // label="Summary" 
          placeholder="Add your job description"
          name="jobDescription"
          value={jobDescription}
          onChange={handleChangeJobDescription}
        />
      </Form>
    </div>
  );
}
