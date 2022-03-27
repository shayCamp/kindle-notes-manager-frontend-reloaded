import React, { useRef } from "react";
import LoginUserApi from "../../API/LoginUserAPI";
import InputFields from "./InputFields";
import SubmitBtn from "./SubmitBtn";
import "../../Styling/inputFieldsBlock.scss";

interface InputFieldsBlockProps {
  isNewAccount: boolean;
  updateAuthToken: (args: string) => void;
}

const InputFieldsBlock = ({
  isNewAccount,
  updateAuthToken,
}: InputFieldsBlockProps) => {
  const { loginApiError, postUser, clearLoginError, loading } = LoginUserApi();
  const username = useRef<string>("");
  const password = useRef<string>("");

  const recievePassword = (childPassword: string): void => {
    //taking password from input component
    password.current = childPassword;
  };

  const recieveUsername = (childUsername: string): void => {
    //taking username from input component
    username.current = childUsername;
  };

  const onTextChange = () => {
    //This will refresh the incorrect state when user starts to type their credentials again
    clearLoginError();
  };

  return (
    <div className="inputFieldsBlock">
      <InputFields
        type="Username"
        updateUsername={recieveUsername} //updates username state in this component
        onTextChange={onTextChange} //This clears wrong credential view on type
        loginError={loginApiError}
      />
      <InputFields
        type="Password"
        updatePassword={recievePassword} //updates password state in this component
        onTextChange={onTextChange} //This clears wrong credential view on type
        loginError={loginApiError}
      />
      <SubmitBtn
        loading={loading}
        loginError={loginApiError}
        submitFunc={
          () =>
            postUser({
              isNewAccount,
              username: username.current,
              password: password.current,
              updateAuthToken,
            }) //Create User function
        }
      />
    </div>
  );
};

export default InputFieldsBlock;
