import React from 'react';
import '../../Styling/DescriptionBlock.scss';

interface DescriptionBlockProps {
    isNewAccount: boolean;
    changeState: () => void;
}

const DescriptionBlock = ({ isNewAccount, changeState }: DescriptionBlockProps) => {
    if (isNewAccount) {
        return (
            <div className="DescriptionBlock">
                <p>Start For Free</p>
                <h3>
                    Create account <span id="bullet">.</span>
                </h3>
                <p>
                    Already A Member?{' '}
                    <span id="loginBtn" onClick={changeState}>
                        Log In
                    </span>
                </p>
            </div>
        );
    } else {
        return (
            <div className="DescriptionBlock">
                <p>Welcome Back</p>
                <h3>
                    Log in<span id="bullet">.</span>
                </h3>
                <p>
                    {/* // eslint-disable-next-line react/no-unescaped-entities*/}
                    Haven&apos;t Signed Up Yet?
                    <span id="loginBtn" onClick={changeState}>
                        {' '}
                        Create account
                    </span>
                </p>
            </div>
        );
    }
};

export default DescriptionBlock;
