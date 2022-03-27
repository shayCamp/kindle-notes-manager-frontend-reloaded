import React, { useState } from "react";
import DescriptionBlock from "../Components/LoginComponents/DescriptionBlock";
import FormBlock from "../Components/LoginComponents/FormBlock";
import SubmitBtn from "../Components/LoginComponents/SubmitBtn";
import "../Styling/Login.scss";

interface LoginProps {
  updateAuthToken: (args: string | null) => void;
}

const Login = ({ updateAuthToken }: LoginProps) => {
  const [isNewAccount, setIsNewAccount] = useState(false); //is the user logining in or creating an account

  return (
    <div className="loginPage">
      <div className="formHalf">
        <div className="formBlock">
          <DescriptionBlock
            isNewAccount={isNewAccount}
            changeState={() => setIsNewAccount(!isNewAccount)}
          />
          <FormBlock
            isNewAccount={isNewAccount}
            updateAuthToken={updateAuthToken}
          />
        </div>
      </div>
      <div className="backgroundHalf">
        <h1>KTON</h1>
      </div>
    </div>
  );
};

export default Login;
