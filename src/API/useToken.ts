import { useState } from 'react';

function useToken() {
    /**
     *
     * @returns the auth token from the local storage
     */
    const getToken = () => {
        const tokenString: string | null = sessionStorage.getItem('token'); //Getting auth token from local storage
        return tokenString;
    };

    const [authToken, setAuthToken] = useState(getToken()); //setting auth token to state

    /**
     *This function saves authToken to the local storage and then returns it to App.ts to pass the user in
     * @param userTokenProp the auth token the user wants to save to the local storage
     */

    const saveToken = (userTokenProp: string | null) => {
        //Saving passed token to the session storage
        sessionStorage.setItem('token', JSON.stringify(userTokenProp));
        setAuthToken(userTokenProp);
    };

    return {
        setAuthToken: saveToken,
        authToken,
    };
}
export default useToken;
