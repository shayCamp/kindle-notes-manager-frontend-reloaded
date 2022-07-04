import React from 'react';
import AnalyticCards from '../Components/LandingComponents/AnalyticCards';
import StreakBoard from '../Components/LandingComponents/StreakBoard';
import '../Styling/AnalyticPage.scss';

const AnalyticPage = ({ ...props }) => {
    return (
        <div className="analyticPage">
            <div className="section1">
                <StreakBoard />
            </div>
            <div className="section2">
                <AnalyticCards />
                <AnalyticCards />
                <AnalyticCards />
            </div>
        </div>
    );
};

export default AnalyticPage;
