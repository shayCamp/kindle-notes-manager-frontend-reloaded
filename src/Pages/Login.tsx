import React, { useState, useEffect } from 'react';
import DescriptionBlock from '../Components/LoginComponents/DescriptionBlock';
import FormBlock from '../Components/LoginComponents/FormBlock';
import SubmitBtn from '../Components/LoginComponents/SubmitBtn';
import SocialBlock from '../Components/SocialNetworkComponents/SocialBlock';
import { useInView } from 'react-intersection-observer';
import '../Styling/Login.scss';

interface LoginProps {
    updateAuthToken: (args: string | null) => void;
    authToken: string | null;
    getUserInfo: () => void;
}

const Login = ({ updateAuthToken, authToken, getUserInfo }: LoginProps) => {
    const [isNewAccount, setIsNewAccount] = useState(false); //is the user logining in or creating an account
    const [slide, setSlide] = useState(false);

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.01, //When the form is in the viewport set inView to true
    });

    useEffect(() => {
        //Function to set slide animation on page load
        setTimeout(function () {
            setSlide(true);
        }, 1200);
    }, []);

    useEffect(() => {
        //Function to remove slide animation when there is an authToken
        if (authToken) {
            setTimeout(function () {
                setSlide(false);
            }, 200);
        }
    }, [authToken]);

    useEffect(() => {
        if (authToken && !inView) {
            //If user has an authToken and form is not inView then we can advance user
            getUserInfo();
        }
    }, [authToken, inView]);

    return (
        <div className="login-page">
            <div className={slide ? 'login-page__form slide' : 'login-page__form'} ref={ref}>
                <div className="form__details">
                    <DescriptionBlock isNewAccount={isNewAccount} changeState={() => setIsNewAccount(!isNewAccount)} />
                    <FormBlock isNewAccount={isNewAccount} updateAuthToken={updateAuthToken} />
                </div>
                <div className="form__socials">
                    <SocialBlock />
                    <p>Socials</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
