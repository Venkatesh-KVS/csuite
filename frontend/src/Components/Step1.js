import React from "react";
import { styled } from "styled-components";
import MobileNumberOTPForm from "./MobileNumberOTPForm";

export default function Step1({
  userId,
  currentStep,
  setCurrentStep,
  checkOutFormData,
  setCheckOutFormData,
}) {
  return (
    <Wrapper>
      <div className="step1 p-5 ">
        <MobileNumberOTPForm
          userId={userId}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          checkOutFormData={checkOutFormData}
          setCheckOutFormData={setCheckOutFormData}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (max-width: 600px) {
    .step1 {
      /* border: 2px solid; */
      padding: 10px 0;
      margin: 0;
    }
  }
`;
