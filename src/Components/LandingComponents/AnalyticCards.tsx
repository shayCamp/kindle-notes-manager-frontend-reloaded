import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/AnalyticCards.scss';

const AnalyticCards = ({ ...props }) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    return (
        <div className={dark ? 'card1 cd-dark' : 'card1 cd-light'}>
            <h1></h1>
        </div>
    );
};

export default AnalyticCards;
