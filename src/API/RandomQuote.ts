import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from '../API/useToken';
import { randomHighlight } from './Interface';

const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState('No Quote');
    const [author, setAuthor] = useState('No Author');
    const [title, setTitle] = useState('No Title');
    const [loading, setLoading] = useState(true);
    const { authToken, setAuthToken } = useToken(); //Retrieving authToken

    function getQuote() {
        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            //Axios call returns random highlight or message saying no highlights
            axios({
                method: `GET`,
                url: `${process.env.REACT_APP_BACKENDURL}/books/random-highlight`,
                headers: {
                    'x-auth-token': authToken.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<randomHighlight>) {
                    setQuote(response.data.randomHighlight.highlight.Text);
                    setAuthor(response.data.randomHighlight.author);
                    setTitle(response.data.randomHighlight.title);
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
        author,
        quote,
        title,
        loading,
    };
};

export default RandomQuoteGenerator;
