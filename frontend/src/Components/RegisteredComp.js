// RegistrationForm.js
import React, { useState } from "react";
import DisplayFormData from "./DisplayFormData"; // Import your DisplayFormData component

const RegisteredComp = ({ currentStep, setCurrentStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    purpose: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 1000);
  };
  console.log(handleChange);

  return (
    <form onSubmit={handleSubmit}>
      <DisplayFormData formData={formData} />
    </form>
  );
};

export default RegisteredComp;
