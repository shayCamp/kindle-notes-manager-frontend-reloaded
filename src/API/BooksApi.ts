import { useEffect, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from '../API/useToken';
import { dbBook } from './Interface';

function BooksApi() {
    const { authToken, setAuthToken } = useToken(); //Retrieving authToken
    const [books, setBooks] = useState<dbBook[]>();
    const [loading, setLoading] = useState(true);

    function getAllBooks() {
        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `GET`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/books',
                headers: {
                    'x-auth-token': authToken.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<dbBook[]>) {
                    setBooks(response.data);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    return {
        getAllBooks,
        books,
        loading,
    };
}

export default BooksApi;
