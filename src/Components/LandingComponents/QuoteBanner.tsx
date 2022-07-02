import React, { useEffect } from 'react';
import '../../Styling/QuoteBanner.scss';
import RandomQuoteGenerator from '../../API/RandomQuote';

// interface QuoteBannerProps {}

const QuoteBanner = ({ ...props }) => {
    const { getQuote, quote } = RandomQuoteGenerator();
    // console.log('quote: ', quote);

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className="quoteBanner">
            <h1>In order to be a greater leader, one must first learn to follow</h1>
        </div>
    );
};

export default QuoteBanner;
