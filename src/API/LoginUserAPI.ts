import React, { useState } from 'react';
import axios from 'axios';
import useToken from './useToken';

interface postUserProps {
    isNewAccount: boolean;
    username: string;
    password: string;
    updateAuthToken: (args: string) => void;
}

const LoginUserApi = () => {
    // const { setAuthToken } = useToken();
    const [loading, setLoading] = useState(false);
    const [loginApiError, setLoginApiError] = useState<boolean | null>(null); //holds the error returned from the login request

    function clearLoginError() {
        //Function used to clear the error state when user types
        setLoginApiError(null);
    }

    /**
     *
     * @param isNewAccount boolean to indicate whether to login user or create account
     * @param username stores username of user, passed from input
     * @param password  stores password of user, passed from input
     * @param updateAuthToken stores function passed from login page which allows the auth token recieved from api to be stored in local storage
     */

    function postUser({ isNewAccount, username, password, updateAuthToken }: postUserProps) {
        console.log('running function');
        setLoading(true);

        if (isNewAccount) {
            //if new account create account
            console.log('creating account');
            axios({
                method: 'POST',
                url: 'https://kindle-project-backend-v2.herokuapp.com/users/',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    username: username,
                    password: password,
                },
            })
                .then((response) => {
                    setLoading(false);
                    sessionStorage.setItem('username', username);
                    updateAuthToken(response.data.token); //update auth token and return it to the app.ts page in order to pass user into main application
                })
                .catch((error) => {
                    console.log('error: ', error);
                    setLoading(false);
                    setLoginApiError(true);
                });
        } else {
            //else log user in
            console.log('logging user in');
            axios({
                method: `POST`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/login',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    username: username,
                    password: password,
                },
            })
                .then(function (response) {
                    setLoading(false);
                    sessionStorage.setItem('username', username);
                    updateAuthToken(response.data.token); //update auth token and return it to the app.ts page in order to pass user into main application
                })
                .catch(function (error) {
                    setLoading(false);
                    setLoginApiError(true);
                });
        }
    }

    return {
        loginApiError,
        postUser,
        clearLoginError,
        loading,
    }; //returning the login attempt value, the function to create user and clear wrong attempt
};

export default LoginUserApi;
