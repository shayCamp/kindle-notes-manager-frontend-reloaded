import React, { useState, useEffect } from 'react';
import DescriptionBlock from '../Components/LoginComponents/DescriptionBlock';
import FormBlock from '../Components/LoginComponents/FormBlock';
import SubmitBtn from '../Components/LoginComponents/SubmitBtn';
import SocialBlock from '../Components/SocialNetworkComponents/SocialBlock';
import '../Styling/Login.scss';

interface LoginProps {
    updateAuthToken: (args: string | null) => void;
}

const Login = ({ updateAuthToken }: LoginProps) => {
    const [isNewAccount, setIsNewAccount] = useState(false); //is the user logining in or creating an account
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        console.log('runnnn');
        setTimeout(function () {
            setSlide(true);
        }, 1500);
    }, []);

    return (
        <div className="loginPage">
            <div className={slide ? 'formHalf slide' : 'formHalf'}>
                <div className="formHolder">
                    <DescriptionBlock isNewAccount={isNewAccount} changeState={() => setIsNewAccount(!isNewAccount)} />
                    <FormBlock isNewAccount={isNewAccount} updateAuthToken={updateAuthToken} />
                </div>
                <div className="socialHolder">
                    <SocialBlock />
                    <p>Socials</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
