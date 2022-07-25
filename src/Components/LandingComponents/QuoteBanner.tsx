import React, { useEffect, useState } from 'react';
import '../../Styling/QuoteBanner.scss';
import RandomQuoteGenerator from '../../API/RandomQuote';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/react';

interface QuoteBannerProps {
    modalToggle: () => void;
}

const QuoteBanner = ({ modalToggle }: QuoteBannerProps) => {
    const { getQuote, quote, author, loading, title } = RandomQuoteGenerator(); //Getting a random quote

    const override = css`
        position: absolute;
        width: 200px;
        top: 20%;
        left: 45%;
    `;

    //On page load we will get a random quote, this runs once
    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            getQuote();
        }
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        let isMounted = true;

        if (quote === 'Currently Have No Highlights, Go To Settings To Import') {
            null;
        } else {
            const interval = setInterval(() => {
                if (isMounted) {
                    getQuote(); //secures a random quote every 60 seconds
                }
            }, 60000); // runs every 60 seconds

            return () => {
                clearInterval(interval);
            };
        }

        return () => {
            isMounted = false;
        };
    }, [quote]);

    return (
        <div className="quoteBanner">
            {loading ? (
                <BarLoader color={'#FFFFFF'} css={override} />
            ) : (
                <>
                    <div className="QuoteHolder">
                        <h1 className="Quote">{`"${quote}"`}</h1>
                    </div>
                    <div className="AuthorHolder">
                        <p className="Author">{`- ${author}`}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuoteBanner;
