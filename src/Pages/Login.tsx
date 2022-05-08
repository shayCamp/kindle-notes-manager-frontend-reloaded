import React, { useState, useEffect } from 'react';
import DescriptionBlock from '../Components/LoginComponents/DescriptionBlock';
import FormBlock from '../Components/LoginComponents/FormBlock';
import SubmitBtn from '../Components/LoginComponents/SubmitBtn';
import SocialBlock from '../Components/SocialNetworkComponents/SocialBlock';
import { useInView } from 'react-intersection-observer';
import '../Styling/Login.scss';

interface LoginProps {
    updateAuthToken: (args: string | null) => void;
    advanceUser: () => void;
    authToken: string | null;
}

const Login = ({ updateAuthToken, advanceUser, authToken }: LoginProps) => {
    const [isNewAccount, setIsNewAccount] = useState(false); //is the user logining in or creating an account
    const [slide, setSlide] = useState(false);

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.01, //When the form is in the viewport set inView to true
    });

    useEffect(() => {
        //Function to set slide animation on page load
        console.log('runnnn');
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

    if (authToken && !inView) {
        //If user has an authToken and form is not inView then we can advance user
        advanceUser();
    }

    return (
        <div className="loginPage">
            <div className={slide ? 'formHalf slide' : 'formHalf'} ref={ref}>
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
