import React, { useEffect, useState } from 'react';
import '../Styling/LibraryPage.scss';
import SearchIcon from '@mui/icons-material/Search';
import BooksApi from '../API/BooksApi';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/react';
import Book from '../Components/LibraryComponents/Book';

const LibraryPage = ({ ...props }) => {
    const { getAllBooks, books, loading } = BooksApi();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getAllBooks();
    }, []);

    const override = css`
        position: absolute;
        width: 200px;
        top: 50%;
        left: 45%;
    `;

    return (
        <div className="lib-page">
            <div className="lib-page__searchSection">
                <div className="searchSection__searchBar">
                    <SearchIcon id="icon" />
                    <input placeholder="Search For Books By Title or Author" onChange={(e) => setSearchValue(e.target.value)}></input>
                </div>
            </div>
            <div className="lib-page__bookSection">
                {loading || books === undefined || books === null ? (
                    <BarLoader color={'#FFFFFF'} css={override} />
                ) : books.length !== 0 ? (
                    books
                        .filter(
                            (book) =>
                                book.deleted === false &&
                                (book.title.toUpperCase().includes(searchValue.toUpperCase()) ||
                                    book.author.toUpperCase().includes(searchValue.toUpperCase()) ||
                                    book.genre.toUpperCase().includes(searchValue.toUpperCase())),
                        )
                        .map((book, i) => <Book key={i} data={book} />)
                ) : null}
            </div>
        </div>
    );
};

export default LibraryPage;
