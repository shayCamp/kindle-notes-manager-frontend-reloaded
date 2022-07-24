import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import useToken from '../API/useToken';
import axios from 'axios';
import { io } from 'socket.io-client';

function ImportBooksApi() {
    const { authToken, setAuthToken } = useToken();
    const [percentage, setPercentage] = useState<number>(0);
    const [progress, setProgress] = useState<string>('None');

    const socket = io(`${process.env.REACT_APP_BACKENDURL}`);

    socket.on('connect', () => {
        console.log('connected to socket server');

        socket.on('upload-progress', (data) => {
            setPercentage(Number(data));
            if (data === '100') {
                setProgress('Complete');

                setTimeout(() => {
                    //After two seconds return upload button
                    setProgress('None');
                    setPercentage(0);
                }, 2000);
            }
        });
    });

    function uploadBooks(prop: FormData) {
        setProgress('Started');

        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `POST`,
                url: `${process.env.REACT_APP_BACKENDURL}/upload`,
                headers: { 'x-auth-token': authToken.replace(/\"/g, ''), 'Content-Type': 'multipart/form-data' },
                data: prop,
            })
                .then(function (response) {
                    console.log('response: ', response);
                })
                .catch(function (error) {
                    setProgress('None'); //If error, make loading bar disappear
                });
        }
    }

    return {
        uploadBooks,
        percentage,
        progress,
    };
}

export default ImportBooksApi;
