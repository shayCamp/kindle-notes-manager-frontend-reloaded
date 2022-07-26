import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/StreakBoard.scss';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import HighlightApi from '../../API/HighlightApi';
import CalenderFunctions from '../../API/CalenderFunctions';
import '../../Styling/darkTheme.scss';

// interface StreakBoardProps {}

const StreakBoard = ({ ...props }) => {
    const { highlights, getAllHighlights, loading } = HighlightApi();
    const { shiftDate } = CalenderFunctions();
    const today = new Date();
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    //On page load get all highlights
    useEffect(() => {
        getAllHighlights();
    }, []);

    return (
        <div className={dark ? 'boardContainer cd-dark' : 'boardContainer cd-light'}>
            <div className="calenderContainer">
                <CalendarHeatmap
                    startDate={shiftDate(today, -365)}
                    endDate={today}
                    values={[
                        { date: '2022-01-01', count: 12 },
                        { date: '2022-03-22', count: 122 },
                        { date: '2016-01-30', count: 38 },
                        // ...and so on
                    ]}
                    classForValue={(value) => {
                        if (!value) {
                            return 'color-empty';
                        }
                        return `color-scale-${value.count}`;
                    }}
                />
            </div>
        </div>
    );
};

export default StreakBoard;
