export const validationSchemas = {
  personal: (data) => {
    const errors = {};
    if (!data.name?.trim()) errors.name = "Name is required";

    if (!data.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.phone?.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(data.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!data.title?.trim()) {
      errors.title = "Title is required";
    }

    return errors;
  },

  education: (data) => {
    const errors = {};
    data.forEach((edu, i) => {
      if (!edu.degree?.trim())
        errors[`education_${i}_degree`] = "Degree required";
      if (!edu.stream?.trim())
        errors[`education_${i}_stream`] = "Stream required";
      if (!edu.university?.trim())
        errors[`education_${i}_university`] = "University required";
      if (!edu.duration?.trim())
        errors[`education_${i}_duration`] = "Duration required";
      if (!edu.location?.trim())
        errors[`education_${i}_location`] = "Location required";
    });
    return errors;
  },

  experience: (data) => {
    const errors = {};
    data.forEach((exp, i) => {
      if (!exp.jobTitle?.trim())
        errors[`experience_${i}_jobTitle`] = "Job title is required";
      if (!exp.company?.trim())
        errors[`experience_${i}_company`] = "Company name is required";
      if (!exp.expDuration?.trim())
        errors[`experience_${i}_expDuration`] = "Duration is required";
      if (!exp.expLocation?.trim())
        errors[`experience_${i}_expLocation`] = "Location is required";
      if (!exp.jobDescription?.trim())
        errors[`experience_${i}_jobDescription`] =
          "Job description is required";
    });
    return errors;
  },

  certificates:(data)=>{
    const errors={}
    data.forEach((cert,i)=>{
        if(!cert.certName.trim())
            errors[`certificate_${i}_certName`] = "Certificate name is required";
        if(!cert.certOrg.trim())
            errors[`certificate_${i}_certOrg`] = "Organisation name is required";
        if(!cert.certDate.trim())
            errors[`certificate_${i}_certDate`] = "Certificate Date is required";
    });
    return errors;
  },

  summary:(data)=>{
    const errors={}
    data.forEach((item,i)=>{
        if(!item.summary.trim()) errors.summary = 'Add a summary about yourself'
    })
  }

};
