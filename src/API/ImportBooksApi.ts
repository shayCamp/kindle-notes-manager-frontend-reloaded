import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import useToken from '../API/useToken';
import axios from 'axios';

function ImportBooksApi() {
    const { authToken, setAuthToken } = useToken();
    const [successful, setSuccessful] = useState<boolean>(false);

    function uploadBooks(prop: File) {
        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `POST`,
                url: `${process.env.REACT_APP_BACKENDURL}/upload`,
                headers: { 'x-auth-token': authToken.replace(/\"/g, '') },
                data: prop,
            })
                .then(function (response) {
                    setSuccessful(true);
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    return {
        uploadBooks,
        successful,
    };
}

export default ImportBooksApi;
