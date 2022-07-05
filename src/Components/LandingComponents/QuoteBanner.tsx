import React, { useEffect, useState } from 'react';
import '../../Styling/QuoteBanner.scss';
import RandomQuoteGenerator from '../../API/RandomQuote';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/react';

// interface QuoteBannerProps {}

const QuoteBanner = ({ ...props }) => {
    const { getQuote, quote, loading } = RandomQuoteGenerator();

    const override = css`
        position: absolute;
        width: 200px;
        top: 20%;
        left: 45%;
    `;

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            getQuote(); //runs once when the Home page first loads

            const interval = setInterval(() => {
                getQuote(); //secures a random quote every 60 seconds
            }, 60000); // runs every 60 seconds

            return () => clearInterval(interval);
        }
        return () => {
            isMounted = false;
        };
    }, []);

    return <div className="quoteBanner">{loading ? <BarLoader color={'#FFFFFF'} css={override} /> : <h1 id="Quote">{quote}</h1>}</div>;
};

export default QuoteBanner;
