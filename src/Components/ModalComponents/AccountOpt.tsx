import React from 'react';
import '../../Styling/AccountOpt.scss';
import { BsFillPencilFill } from 'react-icons/bs';

// interface MyAccountProps {}

const AccountOpt = ({ ...props }) => {
    console.log(props);
    return (
        <div className="AccountOpt-page">
            <div className="circle">
                <div className="circle__edit">
                    <BsFillPencilFill id="edit-icon" />
                </div>
            </div>
            <div className="info-block"></div>
            <div className="linked-block"></div>
            <div
                className="signOut-block"
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
