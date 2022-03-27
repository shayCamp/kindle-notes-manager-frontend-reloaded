import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useToken from './API/useToken';
import { UserContext } from './Context/UserContext';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';

import './Styling/App.scss';

const App = () => {
    const { authToken, setAuthToken } = useToken();
    console.log('authToken: ', authToken);

    if (!authToken) {
        //No auth the user needs to go to login
        console.log('no auth token - go to login page');
        return <Login updateAuthToken={setAuthToken} />;
    } else {
        //Loading main app once auth is in local storage
        return (
            <div className="app">
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </Router>
            </div>
        );
    }
};

export default App;
