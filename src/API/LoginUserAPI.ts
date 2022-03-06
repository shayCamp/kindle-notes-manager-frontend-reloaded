import React, { useState } from "react";
import axios from "axios";
import useToken from "./useToken";

interface postUserProps {
  isNewAccount: boolean;
  username: string;
  password: string;
  updateAuthToken: (args: string) => void;
}

const LoginUserApi = () => {
  // const { setAuthToken } = useToken();
  const [incorrectCredentials, setIncorrectCredentials] = useState(false); //Stores response from api, user doesnt exist
  const [loading, setLoading] = useState(false);

  function clearIncorrectCredentials() {
    setIncorrectCredentials(false); //function to clear invalid login attempt by user
  }

  /**
   *
   * @param isNewAccount boolean to indicate whether to login user or create account
   * @param username stores username of user, passed from input
   * @param password  stores password of user, passed from input
   * @param updateAuthToken stores function passed from login page which allows the auth token recieved from api to be stored in local storage
   */

  function postUser({
    isNewAccount,
    username,
    password,
    updateAuthToken,
  }: postUserProps) {
    console.log("running function");
    setLoading(true);

    if (isNewAccount) {
      //if new account create account
      console.log("creating account");
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
          updateAuthToken(response.data.token); //This is passed from login page, which allows the auth to be updated and passed back to login page
          setLoading(false);
        })
        .catch((error) => console.log("Form submit error", error));
    } else {
      //else log user in
      console.log("logging user in");
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
          setLoading(false);
          if (response.data.msg === "user does not exist") {
            setIncorrectCredentials(true); //if user account isnt in database to log them in
          } else {
            sessionStorage.setItem("username", username);
            updateAuthToken(response.data.token); //update auth token and return it to the app.ts page in order to pass user into main application
          }
        })
        .catch(function (error) {
          console.log(`handle login error:`, error);
          console.log("response: ", error.status);
        });
    }
  }

  return { incorrectCredentials, postUser, clearIncorrectCredentials, loading }; //returning the login attempt value, the function to create user and clear wrong attempt
};

export default LoginUserApi;
