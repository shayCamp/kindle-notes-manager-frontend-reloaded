import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from '../API/useToken';
import { randomHighlight } from './Interface';

const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState('Currently No Quote');
    const [loading, setLoading] = useState(false);
    const { authToken, setAuthToken } = useToken(); //Retrieving authToken

    function getQuote() {
        setLoading(true);

        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `GET`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/books/random-highlight',
                headers: {
                    'x-auth-token': authToken.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<randomHighlight>) {
                    setQuote(response.data.randomHighlight.highlight.Text);
                    setLoading(false);
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
