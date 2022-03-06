import React from "react";
import "../../Styling/SubmitBtn.scss";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

interface SubmitBtnProps {
  isNewAccount: boolean;
  submitFunc: () => void;
  loading: boolean;
  credDetail: "username" | "password" | "field" | null;
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SubmitBtn = ({
  isNewAccount,
  submitFunc,
  loading,
  credDetail,
}: SubmitBtnProps) => {
  return (
    <div className={loading ? "button loading" : "button"} onClick={submitFunc}>
      {loading ? (
        <MoonLoader css={override} size={20} color={`white`} />
      ) : (
        <p>
          {credDetail === "username"
            ? `Account Name Not Found`
            : credDetail === "password"
            ? `Incorrect Password`
            : credDetail === "field"
            ? `Please Enter All Fields`
            : isNewAccount
            ? `Create Account`
            : `Login Now`}
        </p>
      )}
    </div>
  );
};

export default SubmitBtn;
