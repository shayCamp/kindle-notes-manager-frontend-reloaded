import React from "react";
import "../../Styling/SubmitBtn.scss";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

interface SubmitBtnProps {
  isNewAccount: boolean;
  submitFunc: () => void;
  loading: boolean;
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SubmitBtn = ({ isNewAccount, submitFunc, loading }: SubmitBtnProps) => {
  return (
    <div className={loading ? "button loading" : "button"} onClick={submitFunc}>
      {loading ? (
        <MoonLoader css={override} size={20} color={`white`} />
      ) : (
        <p>{isNewAccount ? `Create Account` : `Login Now`}</p>
      )}
    </div>
  );
};

export default SubmitBtn;
