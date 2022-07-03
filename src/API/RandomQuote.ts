import React, { useState } from 'react';
import axios from 'axios';
import useToken from '../API/useToken';

const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState('Currently No Quote');
    const [loading, setLoading] = useState(false);

    console.log('quote: ', quote);
    const { authToken, setAuthToken } = useToken(); //Retrieving authToken
    console.log('authToken: ', authToken);

    function getQuote() {
        console.log('getting Quote');
        setLoading(true);

        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `GET`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/books/random-highlight',
                headers: {
                    'x-auth-token': authToken,
                },
            })
                .then(function (response) {
                    console.log(`response:`, response);
                    // setQuote(response.data);
                    // setLoading(false);
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    return {
        getQuote,
        quote,
    };
};

export default RandomQuoteGenerator;
