import React, { useState } from "react";
import { Form, Input, Textarea } from "@heroui/react";
import { useResumeStore } from "@/store/useResumeStore";

export default function SummaryForm({ errors }) {
  const { personalSummary, jobDescription, updateSummary } = useResumeStore();
  const handleSummary = (e) => {
    const { name, value } = e.target;
    updateSummary(name, value);
  };
  return (
    <div className="mb-6 w-full">
      <h2 className="text-lg font-bold mb-4">Professional Summary</h2>

      <Form validationErrors={errors}>
        <Textarea
          className="w-full"
          // label="Summary"
          placeholder="Enter your Summary"
          name="personalSummary"
          value={personalSummary}
          onChange={handleSummary}
        />
        {/* <Textarea
          className="w-full"
          label="Summary"
          placeholder="Add your job description"
          name="jobDescription"
          value={jobDescription}
          onChange={handleSummary}
        /> */}
      </Form>
    </div>
  );
}
