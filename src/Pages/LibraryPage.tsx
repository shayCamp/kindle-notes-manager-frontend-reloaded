import React, { useEffect, useState } from 'react';
import '../Styling/LibraryPage.scss';
import SearchIcon from '@mui/icons-material/Search';
import BooksApi from '../API/BooksApi';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/react';
import Book from '../Components/LibraryComponents/Book';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';

const LibraryPage = ({ ...props }) => {
    const { getAllBooks, books, loading } = BooksApi();
    const [searchValue, setSearchValue] = useState('');
    const [displayDrop, setDisplayDrop] = useState(false);
    const [recent, setRecent] = useState(true);
    const [rating, setRating] = useState(false);
    const [genre, setGenre] = useState(false);

    useEffect(() => {
        getAllBooks();
    }, []);

    const override = css`
        position: absolute;
        width: 200px;
        top: 50%;
        left: 45%;
    `;

    const filterFunction = (filter: string) => {
        switch (filter) {
            case 'Rating':
                setRating(!rating);
                break;
            case 'Recent':
                setRecent(!recent);
                break;
            case 'Genre':
                setGenre(!genre);
                break;
        }
    };

    return (
        <div className="lib-page">
            <div className="lib-page__search-section">
                <div className="search-section__search-bar">
                    <SearchIcon id="search-icon" />
                    <input placeholder="Search For Books By Title or Author" onChange={(e) => setSearchValue(e.target.value)}></input>
                    <div className="search-bar__drop-part" onClick={() => setDisplayDrop(!displayDrop)}>
                        <MdKeyboardArrowDown className={displayDrop ? 'arrow arrowActive' : 'arrow'} />
                        <p>Book Filter</p>
                        {displayDrop ? (
                            <div className="drop-part__drop">
                                <p>Sorting</p>
                                <div
                                    className={recent ? 'drop__option active' : 'drop__option'}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        filterFunction('Recent');
                                    }}
                                >
                                    Recent
                                </div>
                                <div
                                    className={rating ? 'drop__option active' : 'drop__option'}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        filterFunction('Rating');
                                    }}
                                >
                                    Rating
                                </div>
                                <div
                                    className={genre ? 'drop__option active' : 'drop__option'}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        filterFunction('Genre');
                                    }}
                                >
                                    Genre
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className={displayDrop ? 'lib-page__bookSection margin' : 'lib-page__bookSection'}>
                {loading || books === undefined || books === null ? (
                    <BarLoader color={'#FFFFFF'} css={override} />
                ) : recent ? (
                    books
                        .slice()
                        .sort(function (a, b): number {
                            if (rating) {
                                return b.rating - a.rating;
                            } else {
                                return 0;
                            }
                        })
                        .sort(function (a, b): number {
                            if (genre) {
                                return b.genre > a.genre ? 1 : -1;
                            } else {
                                return 0;
                            }
                        })
                        .filter(
                            (book) =>
                                book.deleted === false &&
                                (book.title.toUpperCase().includes(searchValue.toUpperCase()) ||
                                    book.author.toUpperCase().includes(searchValue.toUpperCase()) ||
                                    book.genre.toUpperCase().includes(searchValue.toUpperCase())),
                        )
                        .map((book, i) => <Book key={i} data={book} />)
                ) : (
                    books
                        .slice()
                        .reverse()
                        .sort(function (a, b): number {
                            if (rating) {
                                return b.rating - a.rating;
                            } else {
                                return 0;
                            }
                        })
                        .sort(function (a, b): number {
                            if (genre) {
                                return b.genre > a.genre ? 1 : -1;
                            } else {
                                return 0;
                            }
                        })
                        .filter(
                            (book) =>
                                book.deleted === false &&
                                (book.title.toUpperCase().includes(searchValue.toUpperCase()) ||
                                    book.author.toUpperCase().includes(searchValue.toUpperCase()) ||
                                    book.genre.toUpperCase().includes(searchValue.toUpperCase())),
                        )
                        .map((book, i) => <Book key={i} data={book} />)
                )}
            </div>
        </div>
    );
};

export default LibraryPage;
