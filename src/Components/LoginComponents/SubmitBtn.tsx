import React from "react";
import "../../Styling/SubmitBtn.scss";

interface SubmitBtnProps {
  isNewAccount: boolean;
  submitFunc: () => void;
}

const SubmitBtn = ({ isNewAccount, submitFunc }: SubmitBtnProps) => {
  return (
    <div className="button" onClick={submitFunc}>
      <p>{isNewAccount ? `Create Account` : `Login Now`}</p>
    </div>
  );
};

export default SubmitBtn;
