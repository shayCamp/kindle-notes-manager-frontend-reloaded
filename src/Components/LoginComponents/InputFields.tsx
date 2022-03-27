import React, { useEffect, useState } from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import "../../Styling/InputFields.scss";

interface InputFieldsProps {
  type: "Username" | "Password";
  updatePassword?: (arg: string) => void;
  updateUsername?: (arg: string) => void;
  onTextChange: () => void;
  loginError: boolean | null;
}

const InputFields = ({
  type,
  updatePassword,
  updateUsername,
  onTextChange,
  loginError,
}: InputFieldsProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={
        loginError
          ? "inputField redBorder"
          : active
          ? "inputField blueBorder"
          : "inputField"
      }
    >
      <div className="centeringContainer">
        <div className="leftSideInput">
          <div className="bannerForInput">
            <p className="tag">{type}</p>
          </div>
          <input
            autoComplete="off"
            className="inputFields"
            onFocus={() => {
              setActive(true);
              onTextChange();
            }}
            onBlur={() => setActive(false)}
            id="field"
            type="text"
            onChange={(e) => {
              onTextChange();
              if (updatePassword) {
                updatePassword(e.target.value);
              } else if (updateUsername) {
                updateUsername(e.target.value);
              }
            }}
            placeholder={`Enter Your ${type}`}
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
