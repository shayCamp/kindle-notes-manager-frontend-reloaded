import React, { useRef } from "react";
import LoginUserApi from "../../API/LoginUserAPI";
import InputFields from "./InputFields";
import SubmitBtn from "./SubmitBtn";

interface InputFieldsBlockProps {
  isNewAccount: boolean;
  updateAuthToken: (args: string) => void;
}

const InputFieldsBlock = ({
  isNewAccount,
  updateAuthToken,
}: InputFieldsBlockProps) => {
  const { incorrectCredentials, postUser, clearIncorrectCredentials, loading } =
    LoginUserApi();
  console.log("incorrectCredentials: ", incorrectCredentials);
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
    clearIncorrectCredentials();
  };

  return (
    <div className="inputFieldsBlock">
      <InputFields
        type="username"
        updateUsername={recieveUsername} //updates username state in this component
        onTextChange={onTextChange} //This clears wrong credential view on type
        incorrectCredentials={incorrectCredentials}
      />
      <InputFields
        type="password"
        updatePassword={recievePassword} //updates password state in this component
        onTextChange={onTextChange} //This clears wrong credential view on type
        incorrectCredentials={incorrectCredentials}
      />
      <SubmitBtn
        isNewAccount={isNewAccount}
        loading={loading}
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
