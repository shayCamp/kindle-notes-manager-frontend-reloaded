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
        threshold: 0.1, //When the form is in the viewport set inView to true
    });

    useEffect(() => {
        //Function to set slide animation on page load
        setTimeout(function () {
            setSlide(true);
        }, 200);
    }, []);

    return (
        <div id="scrollTo" className={slide ? 'landing-page move-background' : 'landing-page'}>
            <QuoteBanner />
            <InvisibleBar toggleTrue={() => setShowNav(true)} toggleFalse={() => setShowNav(false)} />
            <NavBar
                show={showNav}
                toggle={(opt) => setShowNav(opt)}
                libraryActive={inView}
                scroll={(prop) => document.getElementById(prop)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
            />
            <div className={slide ? 'landing-page__bottom move-bottom' : 'landing-page__bottom'}>
                <div id="bottom__dashboard">
                    <AnalyticPage />
                </div>
                <div id="bottom__library" ref={ref}>
                    <LibraryPage />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
