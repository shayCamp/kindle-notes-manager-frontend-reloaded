import { useState } from "react";

function useToken() {
  const getToken = () => {
    const tokenString: string | null = sessionStorage.getItem("token"); //Getting auth token from local storage
    return tokenString;
  };

  const [authToken, setAuthToken] = useState(getToken()); //setting auth token to state

  const saveToken = (userTokenProp: string) => {
    //Saving passed token to the session storage
    console.log("incoming user auth token: ", userTokenProp);
    sessionStorage.setItem("token", JSON.stringify(userTokenProp));
    setAuthToken(userTokenProp);
  };

  return {
    setAuthToken: saveToken,
    authToken,
  };
}
export default useToken;
