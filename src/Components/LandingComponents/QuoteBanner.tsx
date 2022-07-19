import React, { useEffect, useState } from 'react';
import '../../Styling/QuoteBanner.scss';
import RandomQuoteGenerator from '../../API/RandomQuote';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/react';

interface QuoteBannerProps {
    modalToggle: () => void;
}

const QuoteBanner = ({ modalToggle }: QuoteBannerProps) => {
    const { getQuote, quote, loading } = RandomQuoteGenerator(); //Getting a random quote
    const [noHighlights, setNoHighlights] = useState(false);

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
            //If they have no quotes dont continue to generate random quotes
            setNoHighlights(true);
        } else {
            //If they have quotes then we can update quotes every minute
            setNoHighlights(false);

            const interval = setInterval(() => {
                if (isMounted) {
                    getQuote(); //secures a random quote every 60 seconds
                }
            }, 60000); // runs every 60 seconds

            return () => clearInterval(interval);
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
                <h1 className={noHighlights ? 'Quote cursor' : 'Quote'} onClick={noHighlights ? modalToggle : undefined}>
                    {quote}
                </h1>
            )}
        </div>
    );
};

export default QuoteBanner;
