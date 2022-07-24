import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import useToken from '../API/useToken';
import axios from 'axios';

function ImportBooksApi() {
    const { authToken, setAuthToken } = useToken();
    const [successful, setSuccessful] = useState<boolean>(false);

    function uploadBooks(prop: File) {
        console.log('prop: ', prop);
        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `POST`,
                url: `${process.env.REACT_APP_BACKENDURL}/upload`,
                headers: { 'x-auth-token': authToken.replace(/\"/g, '') },
                data: { clippingsFile: prop },
            })
                .then(function (response) {
                    console.log('response: ', response);
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
