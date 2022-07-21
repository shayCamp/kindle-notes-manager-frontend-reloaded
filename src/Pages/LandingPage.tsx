import React, { useContext, useEffect, useState } from 'react';
import QuoteBanner from '../Components/LandingComponents/QuoteBanner';
import NavBar from '../Components/NavigationComponents/NavBar';
import InvisibleBar from '../Components/NavigationComponents/InvisibleBar';
import '../Styling/LandingPage.scss';
import AnalyticPage from './AnalyticPage';
import LibraryPage from './LibraryPage';
import { UserContext } from '../Context/UserContext';
import { useInView } from 'react-intersection-observer';
import Modal from '../Components/LandingComponents/Modal';
import '../Styling/darkTheme.scss';

interface LandingPageProps {
    updateUserInfo: (prop: boolean | number) => void;
}

const LandingPage = ({ updateUserInfo }: LandingPageProps) => {
    const [slide, setSlide] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1, //When the form is in the viewport set inView to true
    });

    //When the page loads, after a delay the landing page animation is triggered

    useEffect(() => {
        let isMounted = true;

        setTimeout(function () {
            if (isMounted) {
                setSlide(true);
            }
        }, 200);

        return () => {
            isMounted = false;
        };
    }, []);

    /**
     * This function triggers the settings menu
     */

    const modalToggle = () => {
        setViewModal(!viewModal);
    };

    return (
        <div id="scrollTo" className={slide ? 'landing-page move-background' : 'landing-page'}>
            <QuoteBanner modalToggle={modalToggle} />
            <InvisibleBar toggleTrue={() => setShowNav(true)} toggleFalse={() => setShowNav(false)} />
            <NavBar
                show={showNav}
                toggle={(opt) => setShowNav(opt)}
                libraryActive={inView}
                modalActive={viewModal}
                scroll={(prop) => document.getElementById(prop)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
                modalToggle={modalToggle}
            />
            <div
                className={
                    slide ? (dark ? 'landing-page__bottom move-bottom bg-dark' : 'landing-page__bottom move-bottom bg-light') : 'landing-page__bottom'
                }
            >
                <div id="bottom__dashboard">
                    <AnalyticPage />
                </div>
                <div id="bottom__library" ref={ref}>
                    <LibraryPage modalToggle={modalToggle} />
                </div>
            </div>
            {viewModal ? <Modal modalToggle={modalToggle} updateUserInfo={(prop: boolean | number) => updateUserInfo(prop)} /> : null}
        </div>
    );
};

export default LandingPage;
