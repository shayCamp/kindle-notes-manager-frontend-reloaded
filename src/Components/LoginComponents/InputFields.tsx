import React, { useState } from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import "../../Styling/InputFields.scss";

interface InputFieldsProps {
  type: "username" | "password";
  updatePassword?: (arg: string) => void;
  updateUsername?: (arg: string) => void;
  onTextChange: () => void;
  incorrectCredentials: boolean;
}

const InputFields = ({
  type,
  updatePassword,
  updateUsername,
  onTextChange,
  incorrectCredentials,
}: InputFieldsProps) => {
  const [active, setActive] = useState<boolean>(type === "username");
  return (
    <div
      className={
        incorrectCredentials
          ? "inputField redBorder"
          : active
          ? "inputField blueBorder"
          : "inputField"
      }
    >
      <div className="centeringContainer">
        <div className="leftSideInput">
          <div className="bannerForInput">
            <p className="tag">Username</p>
          </div>
          <input
            autoComplete="off"
            className="inputFields"
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            id="username"
            type="text"
            onChange={(e) => {
              onTextChange();
              if (updatePassword) {
                updatePassword(e.target.value);
              } else if (updateUsername) {
                updateUsername(e.target.value);
              }
            }}
            placeholder={
              type === "username"
                ? "Enter Your Username"
                : "Enter Your Password"
            }
          ></input>
        </div>
        <div className="rightSideIcon">
          <SupervisedUserCircleIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export default InputFields;
