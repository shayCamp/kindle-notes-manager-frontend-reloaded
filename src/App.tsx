import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useToken from './API/useToken';
import { UserContext } from './Context/UserContext';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';

import './Styling/App.scss';

const App = () => {
    const { authToken, setAuthToken } = useToken();
    const [advanceUser, setAdvanceUser] = useState(false);

    useEffect(() => {
        //Checking if there is authToken on page load only, if so pass them into application
        if (authToken) {
            advanceUserFunc();
        }
    }, []); //Use state means it only checks authToken when the page loads, instead of constantly, which allows the animation to take place and not get cutt off and user passed straight into app

    const advanceUserFunc = () => {
        //Function used to pass user to app
        setAdvanceUser(true);
    };

    if (!advanceUser) {
        //No auth the user needs to go to login
        return <Login updateAuthToken={setAuthToken} advanceUser={advanceUserFunc} authToken={authToken} />;
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
