// DisplayFormData.js
import React from "react";

const DisplayFormData = ({ formData }) => {
  return (
    <div className="inputData">
      {/* <h3>Submitted Details</h3> */}
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Company: {formData.company}</p>
      <p>Designation: {formData.designation}</p>
      <p>Purpose: {formData.purpose}</p>
    </div>
  );
};

export default DisplayFormData;
