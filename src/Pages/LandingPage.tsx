import React from 'react';
import '../Styling/LandingPage.scss';

// interface LandingPageProps {}

const LandingPage = ({ ...props }) => {
    console.log(props);
    return (
        <div className="landingPage">
            <h1>LandingPage</h1>
        </div>
    );
};

export default LandingPage;
