import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { dbBook } from '../../API/Interface';
import '../../Styling/Book.scss';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

interface BookProps {
    data: dbBook;
}

const Book = ({ data }: BookProps) => {
    const [genreColor, setGenreColor] = useState('default');
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    const colors = [
        ['black history', '#ededed'],
        ['finance', '#acd5f2'],
        ['psychology', '#7fa8d1'],
        ['productivity', '#49729b'],
        ['education', '#254e77'],
    ];

    useEffect(() => {
        if (data.genre !== undefined) {
            const colorArray = colors.filter((eachA) => {
                return eachA[0].toUpperCase() === data.genre.toUpperCase();
            });

            setGenreColor(colorArray[0] !== undefined ? colorArray[0][1] : 'default');
        }
    }, []);

    return (
        <div className={dark ? 'book cd-dark' : 'book cd-light'}>
            <div className="book__image">
                <img src={data.cover_image} />
            </div>
            <div className={dark ? 'book__description text-dark' : 'book__description'}>
                <div className="description__tags">
                    <p id="tag" style={{ backgroundColor: genreColor }}>
                        {data.genre !== '' ? data.genre : 'No Genre'}
                    </p>
                </div>
                <div className="description__title">
                    <p>{data.title}</p>
                </div>
                <div className="description__author">
                    <p>{data.author}</p>
                </div>
                <div className="description__stars">
                    {data.rating === null ? (
                        <p>
                            {[...Array(5)].map((eachStar, i) => (
                                <FaRegStar key={i} id="star" />
                            ))}
                        </p>
                    ) : (
                        <p>
                            {[...Array(data.rating)].map((eachStar, i) => (
                                <FaStar key={i} id="star" />
                            ))}
                            {[...Array(5 - data.rating)].map((eachStar, i) => (
                                <FaRegStar key={i} id="star" />
                            ))}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Book;
