export const perSonalInfoValidation = (personalInfo) => {
  const errs = {};

  if (!personalInfo.name.trim()) errs.name = "Name is required";
  if (!personalInfo.email.trim()) {
    errs.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(personalInfo.email)) {
    errs.email = "Invalid email format";
  }

  if (!personalInfo.phone.trim()) {
    errs.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(personalInfo.phone)) {
    errs.phone = "Phone number must be 10 digits";
  }

  if (!personalInfo.title.trim()) {
    errs.title = "Title is required";
  }

  return errs;
};


export const educationInfoValidation = (educationInfo) =>{
  const errs={}
  educationInfo.forEach((edu, i) => {
    if (!edu.degree.trim()) errs[`education_${i}_degree`] = "Degree required";
    if (!edu.stream.trim()) errs[`education_${i}_stream`] = "Stream required";
    if (!edu.university.trim()) errs[`education_${i}_university`] = "University required";
    if (!edu.duration.trim()) errs[`education_${i}_duration`] = "Duration required";
    if (!edu.location.trim()) errs[`education_${i}_location`] = "Location required";
  });

  return errs;
}
