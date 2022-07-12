import React from 'react';
import '../../Styling/AccountOpt.scss';

// interface MyAccountProps {}

const AccountOpt = ({ ...props }) => {
    console.log(props);
    return (
        <div className="AccountOpt-page">
            <h1>MyAccount</h1>
        </div>
    );
};

export default AccountOpt;
