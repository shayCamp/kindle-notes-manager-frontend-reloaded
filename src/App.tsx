import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserInfoApi from './API/UserInfo';
import useToken from './API/useToken';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import { UserContext } from './Context/UserContext';
import './Styling/App.scss';
import IntermediateImportPage from './Pages/IntermediateImportPage';

const App = () => {
    const { authToken, setAuthToken } = useToken(); //On page load we get authToken from local storage
    console.log('authToken: ', authToken);
    const { userInfo, getUserInfo, updateUserInfo, hasBooks } = UserInfoApi(authToken); //Get user info
    console.log('hasBooks: ', hasBooks);
    console.log('userInfo: ', userInfo);

    if (userInfo === undefined) {
        //Only pass user into application if userInfo is present
        return <Login updateAuthToken={setAuthToken} getUserInfo={getUserInfo} authToken={authToken} />;
    } else if (userInfo !== undefined && !hasBooks) {
        return <IntermediateImportPage />;
    } else {
        //Loading main app once auth is in local storage && user info present
        return (
            <div className="app">
                <Router>
                    <UserContext.Provider value={userInfo}>
                        {' '}
                        {/**passing user info down as context */}
                        <Routes>
                            <Route path="/" element={<LandingPage updateUserInfo={(prop: boolean | number) => updateUserInfo(prop)} />} />
                        </Routes>
                    </UserContext.Provider>
                </Router>
            </div>
        );
    }
};

export default App;
