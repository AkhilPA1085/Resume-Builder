import React from "react";
import { Form, Input } from "@heroui/react";

export default function PersonalInfoForm({ data, onChange, errors }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Personal Information</h2>

      <Form validationErrors={errors}>
        <Input
          label="Full Name"
          name="name"
          value={data.name}
          onChange={onChange}
        />
        <Input
          label="Title"
          name="title"
          value={data.title}
          onChange={onChange}
        />
        <Input
          label="Phone"
          name="phone"
          value={data.phone}
          onChange={onChange}
        />
        <Input
          label="Email"
          name="email"
          value={data.email}
          onChange={onChange}
        />
      </Form>
    </div>
  );
}
