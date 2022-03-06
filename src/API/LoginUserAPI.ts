import React, { useState } from "react";
import axios from "axios";
import useToken from "./useToken";

interface postUserProps {
  isNewAccount: boolean;
  username: string;
  password: string;
  updateAuthToken: (args: string) => void;
}

interface LoginUserProps {}

const LoginUserApi = () => {
  // const { setAuthToken } = useToken();
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  function clearIncorrectCredentials() {
    setIncorrectCredentials(false);
  }

  function postUser({
    isNewAccount,
    username,
    password,
    updateAuthToken,
  }: postUserProps) {
    console.log("running function");

    if (isNewAccount) {
      axios({
        method: "POST",
        url: "https://kindle-project-backend-v2.herokuapp.com/users/",
        headers: { "Content-Type": "application/json" },
        data: {
          username: username,
          password: password,
        },
      })
        .then((response) => {
          updateAuthToken(response.data.token);
        })
        .catch((error) => console.log("Form submit error", error));
    } else {
      axios({
        method: `POST`,
        url: "https://kindle-project-backend-v2.herokuapp.com/login",
        headers: { "Content-Type": "application/json" },
        data: {
          username: username,
          password: password,
        },
      })
        .then(function (response) {
          if (response.data.msg === "user does not exist") {
            setIncorrectCredentials(true);
          } else {
            sessionStorage.setItem("username", username);
            updateAuthToken(response.data.token);
          }
        })
        .catch(function (error) {
          console.log(`handle login error:`, error);
          console.log("response: ", error.status);
        });
    }
  }

  return { incorrectCredentials, postUser, clearIncorrectCredentials };
};

export default LoginUserApi;
