import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserInfoApi from './API/UserInfo';
import useToken from './API/useToken';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import { UserContext } from './Context/UserContext';
import './Styling/App.scss';

const App = () => {
    const { authToken, setAuthToken } = useToken();
    const { userInfo, getUserInfo, updateUserInfo } = UserInfoApi(authToken);
    // const { noHighlights, checkHighlights } = HighlightCheck(authToken);

    if (userInfo === undefined) {
        //No auth the user needs to go to login
        return <Login updateAuthToken={setAuthToken} getUserInfo={getUserInfo} authToken={authToken} />;
    } else {
        //Loading main app once auth is in local storage
        return (
            <div className="app">
                <Router>
                    <UserContext.Provider value={userInfo}>
                        <Routes>
                            <Route path="/" element={<LandingPage updateUserInfo={(prop: boolean) => updateUserInfo(prop)} />} />
                        </Routes>
                    </UserContext.Provider>
                </Router>
            </div>
        );
    }
};

export default App;
