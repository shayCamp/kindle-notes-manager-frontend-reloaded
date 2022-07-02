import React, { useEffect, useState } from 'react';
import QuoteBanner from '../Components/LandingComponents/QuoteBanner';

import '../Styling/LandingPage.scss';
import AnalyticPage from './AnalyticPage';
import LibraryPage from './LibraryPage';

// interface LandingPageProps {}

const LandingPage = ({ ...props }) => {
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        //Function to set slide animation on page load
        setTimeout(function () {
            setSlide(true);
        }, 200);
    }, []);

    return (
        <div className={slide ? 'landingPage slideImage' : 'landingPage'}>
            <QuoteBanner />
            <div className={slide ? 'bottomHalf slideUp' : 'bottomHalf'}>
                <AnalyticPage />
                <LibraryPage />
            </div>
        </div>
    );
};

export default LandingPage;
