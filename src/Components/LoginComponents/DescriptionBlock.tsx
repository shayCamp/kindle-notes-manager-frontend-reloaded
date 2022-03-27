import React from "react";
import "../../Styling/FormDescriptionBlock.scss";

interface FormDescriptionBlockProps {
  isNewAccount: boolean;
  changeState: () => void;
}

const FormDescriptionBlock = ({
  isNewAccount,
  changeState,
}: FormDescriptionBlockProps) => {
  if (isNewAccount) {
    return (
      <div className="formDescriptionBlock">
        <p>Start For Free</p>
        <h3>
          Create new account <span id="bullet">.</span>
        </h3>
        <p>
          Already A Member?{" "}
          <span id="loginBtn" onClick={changeState}>
            Log In
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="formDescriptionBlock">
        <p>Welcome Back</p>
        <h3>
          Log into your account <span id="bullet">.</span>
        </h3>
        <p>
          Haven't Signed Up Yet?{" "}
          <span id="loginBtn" onClick={changeState}>
            Create account
          </span>
        </p>
      </div>
    );
  }
};

export default FormDescriptionBlock;
