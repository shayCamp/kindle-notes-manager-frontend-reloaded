import { useEffect, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from '../API/useToken';
import { AllHighlights } from './Interface';

function HighlightApi() {
    const { authToken, setAuthToken } = useToken(); //Retrieving authToken
    const [highlights, setHighlights] = useState<any>(); //state which holds the highlights from the api call
    const [loading, setLoading] = useState(true);

    function getAllHighlights() {
        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `GET`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/books/all-highlights',
                headers: {
                    'x-auth-token': authToken.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<AllHighlights>) {
                    if (Array.isArray(response.data.allHighlights)) {
                        setHighlights(
                            response.data.allHighlights.sort(function (a, b) {
                                // Turn your strings into dates, and then subtract them
                                // to get a value that is either negative, positive, or zero.
                                return <any>new Date(b.highlight.Date) - <any>new Date(a.highlight.Date);
                            }),
                        );
                        setLoading(false);
                    }
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    return { getAllHighlights, highlights, loading };
}

export default HighlightApi;
