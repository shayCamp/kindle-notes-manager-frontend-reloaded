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
    console.log('authToken: ', authToken);
    const { userInfo } = UserInfoApi();
    const [advanceUser, setAdvanceUser] = useState(false);

    useEffect(() => {
        if (authToken) {
            advanceUserFunc();
        }
    }, []);

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
                    <UserContext.Provider value={userInfo}>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                        </Routes>
                    </UserContext.Provider>
                </Router>
            </div>
        );
    }
};

export default App;
