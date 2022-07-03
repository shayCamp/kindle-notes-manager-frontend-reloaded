import React, { useEffect, useState } from 'react';
import QuoteBanner from '../Components/LandingComponents/QuoteBanner';
import NavBar from '../Components/NavigationComponents/NavBar';
import InvisibleBar from '../Components/NavigationComponents/InvisibleBar';
import '../Styling/LandingPage.scss';
import AnalyticPage from './AnalyticPage';
import LibraryPage from './LibraryPage';
import { useInView } from 'react-intersection-observer';

// interface LandingPageProps {}

const LandingPage = ({ ...props }) => {
    const [slide, setSlide] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.6, //When the form is in the viewport set inView to true
    });

    useEffect(() => {
        //Function to set slide animation on page load
        setTimeout(function () {
            setSlide(true);
        }, 200);
    }, []);

    useEffect(() => {
        console.log('inView');
    }, [inView]);

    return (
        <div className={slide ? 'landingPage slideImage' : 'landingPage'}>
            <QuoteBanner />
            <InvisibleBar toggleTrue={() => setShowNav(true)} toggleFalse={() => setShowNav(false)} />
            <NavBar
                show={showNav}
                toggle={(opt) => setShowNav(opt)}
                libraryActive={inView}
                scroll={(prop) => document.getElementById(prop)?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })}
            />
            <div className={slide ? 'bottomHalf slideUp' : 'bottomHalf'}>
                <div id="dashboard">
                    <AnalyticPage />
                </div>
                <div id="library" ref={ref}>
                    <LibraryPage />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
