import React from "react";
import { Form, Input } from "@heroui/react";
import { resumeStore } from "@/store/store";

export default function PersonalInfoForm({errors }) {
  const {personalInfo,updatePersonalInfo}=resumeStore()
  const handleChange=(e)=>{
    const {name,value}=e.target
    updatePersonalInfo(name,value)
  }
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Personal Information</h2>

      <Form validationErrors={errors}>
        <Input
          label="Full Name"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
        />
        <Input
          label="Title"
          name="title"
          value={personalInfo.title}
          onChange={handleChange}
        />
        <Input
          label="Phone"
          name="phone"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
}
