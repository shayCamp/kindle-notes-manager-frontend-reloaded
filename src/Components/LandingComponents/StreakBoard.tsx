import React, { useEffect, useState } from 'react';
import '../../Styling/StreakBoard.scss';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import HighlightApi from '../../API/HighlightApi';
import CalenderFunctions from '../../API/CalenderFunctions';

// interface StreakBoardProps {}

const StreakBoard = ({ ...props }) => {
    const { highlights, getAllHighlights, loading } = HighlightApi();
    console.log('highlights: ', highlights);
    const { shiftDate } = CalenderFunctions();
    const today = new Date();

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            getAllHighlights();
        }

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="boardContainer">
            <div className="calenderContainer">
                <CalendarHeatmap
                    startDate={shiftDate(today, -365)}
                    endDate={today}
                    values={[
                        { date: '2016-01-01', count: 12 },
                        { date: '2016-01-22', count: 122 },
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
