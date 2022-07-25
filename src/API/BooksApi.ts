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
                url: `${process.env.REACT_APP_BACKENDURL}/books`,
                headers: {
                    'x-auth-token': authToken.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<dbBook[]>) {
                    setBooks(response.data.reverse());
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    interface updateInfoProps {
        book_id: string;
        data: string | number;
    }

    function updateInfo({ book_id, data }: updateInfoProps) {
        // const selected

        if (typeof data === 'number' && books !== undefined) {
            const newState = books.map((book) => {
                //If book has same ID change rating locally
                if (book._id === book_id) {
                    if (book.rating === data) {
                        return { ...book, rating: data - 1 };
                    } else {
                        return { ...book, rating: data };
                    }
                } else return book;
            });

            setBooks(newState);

            console.log('new state', newState);
        }

        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            let value;

            books?.map((book) => {
                //If book has same ID change rating locally
                if (book._id === book_id) {
                    if (book.rating === data) {
                        value = data - 1;
                    } else {
                        value = data;
                    }
                }
            });

            axios({
                method: `PUT`,
                url: `${process.env.REACT_APP_BACKENDURL}/books/${book_id}`,
                headers: {
                    'x-auth-token': authToken.replace(/\"/g, ''),
                },
                data: typeof data === 'number' ? { rating: value } : null,
            })
                .then(function (response) {
                    console.log('rating updated');
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
        updateInfo,
    };
}

export default BooksApi;
