import React, { useState } from "react";
import FormDescriptionBlock from "../Components/LoginComponents/FormDescriptionBlock";
import InputFieldsBlock from "../Components/LoginComponents/InputFieldsBlock";
import SubmitBtn from "../Components/LoginComponents/SubmitBtn";
import "../Styling/Login.scss";

interface LoginProps {
  updateAuthToken: (args: string) => void;
}

const Login = ({ updateAuthToken }: LoginProps) => {
  const [isNewAccount, setIsNewAccount] = useState(false);

  return (
    <div className="loginPage">
      <div className="formHalf">
        <div className="formBlock">
          <FormDescriptionBlock
            isNewAccount={isNewAccount}
            changeState={() => setIsNewAccount(!isNewAccount)}
          />
          <InputFieldsBlock
            isNewAccount={isNewAccount}
            updateAuthToken={updateAuthToken}
          />
        </div>
      </div>
      <div className="backgroundHalf"></div>
    </div>
  );
};

export default Login;
