import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/AccountOpt.scss';
import { BsFillPencilFill } from 'react-icons/bs';

// interface MyAccountProps {}

const AccountOpt = ({ ...props }) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;
    return (
        <div className="AccountOpt-page">
            <div className="circle">
                <div className="circle__edit">
                    <BsFillPencilFill id="edit-icon" />
                </div>
            </div>
            <div className={dark ? 'info-block bg-dark' : 'info-block'}></div>
            <div className={dark ? 'linked-block bg-dark' : 'linked-block'}></div>
            <div
                className={dark ? 'signOut-block bg-dark' : 'signOut-block'}
                onClick={() => {
                    sessionStorage.clear();
                    history.go(0);
                }}
            >
                <p>Sign Out</p>
            </div>
        </div>
    );
};

export default AccountOpt;
