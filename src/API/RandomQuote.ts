import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from '../API/useToken';
import { randomHighlight } from './Interface';

const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState('No Quote');
    const [loading, setLoading] = useState(true);
    const { authToken, setAuthToken } = useToken(); //Retrieving authToken

    function getQuote() {
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
                    if (error.response.status === 400) {
                        setQuote('Currently Have No Highlights, Go To Settings To Import');
                        setLoading(false);
                    }
                });
        }
    }

    return {
        getQuote,
        quote,
        loading,
    };
};

export default RandomQuoteGenerator;
