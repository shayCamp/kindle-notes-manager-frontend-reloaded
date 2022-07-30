import React, { useContext, useEffect, useState } from 'react';
import '../../Styling/MyBooksOpt.scss';
import { UserContext } from '../../Context/UserContext';
import BooksApi from '../../API/BooksApi';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/react';

interface MyBooksProps {
    title: string;
}

const MyBooksOpt = ({ title }: MyBooksProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;
    const { getAllBooks, books, loading, updateInfo } = BooksApi();
    if (books) {
        console.log('books: ', typeof books[0].upload_date);
    }

    useEffect(() => {
        getAllBooks();
    }, []);

    const override = css`
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
    `;

    return (
        <div className="MyBooksOpt-page">
            <div className="page-title">{title}</div>
            <div className="callOut-holder">
                <div className={dark ? 'callOut bg-dark' : 'callOut bg-light'}>
                    <p>Date</p>
                    <p>Title</p>
                    <p>Notes No.</p>
                    <p>Delete Notes</p>
                    <p>Delete Book</p>
                </div>
            </div>
            {loading || books === undefined || books === null ? (
                <div className="placeholder">
                    <BarLoader color={'#FFFFFF'} css={override} />
                </div>
            ) : (
                books.map((book, i) => (
                    <div className="book-row" key={i}>
                        <p>{book.upload_date}</p>
                        <p>{book.title}</p>
                        <p>{book.highlights.length}</p>
                        <div className="deleteBtn-holder">
                            <p className="deleteBtn">Delete Notes</p>
                        </div>
                        <div className="deleteBtn-holder">
                            <p className="deleteBtn">Delete Books</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyBooksOpt;
