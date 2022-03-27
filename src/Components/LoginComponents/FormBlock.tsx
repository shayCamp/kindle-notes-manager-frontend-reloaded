import React, { useRef, useState } from 'react';
import LoginUserApi from '../../API/LoginUserAPI';
import InputFields from './InputFields';
import SubmitBtn from './SubmitBtn';
import '../../Styling/FormBlock.scss';

interface InputFieldsBlockProps {
    isNewAccount: boolean;
    updateAuthToken: (args: string) => void;
}

const InputFieldsBlock = ({ isNewAccount, updateAuthToken }: InputFieldsBlockProps) => {
    const { loginApiError, postUser, clearLoginError, loading } = LoginUserApi();
    const username = useRef<string>('');
    const password = useRef<string>('');
    const [localError, setLocalError] = useState<string | boolean>(false);

    const recievePassword = (childPassword: string): void => {
        //taking password from input component
        password.current = childPassword;
    };

    const recieveUsername = (childUsername: string): void => {
        //taking username from input component
        username.current = childUsername;
    };

    const clearErrors = () => {
        //This will refresh the incorrect state when user starts to type their credentials again
        clearLoginError();
        setLocalError(false);
    };

    const presenceCheck = () => {
        if (username.current.replace(/\s/g, '').length > 0 && password.current.replace(/\s/g, '').length > 0) {
            return true;
        }

        if (!username.current.replace(/\s/g, '').length && !password.current.replace(/\s/g, '').length) {
            setLocalError(`both`);
        } else if (!username.current.replace(/\s/g, '').length) {
            setLocalError(`Username`);
        } else if (!password.current.replace(/\s/g, '').length) {
            setLocalError(`Password`);
        }
        return false;
    };

    return (
        <div>
            <InputFields
                type="Username"
                updateUsername={recieveUsername} //updates username state in this component
                clearErrors={clearErrors} //This clears wrong credential view on type
                ApiError={loginApiError}
                localError={localError}
            />
            <InputFields
                type="Password"
                updatePassword={recievePassword} //updates password state in this component
                clearErrors={clearErrors} //This clears wrong credential view on type
                ApiError={loginApiError}
                localError={localError}
            />
            <p id="ErrorMsg">{localError ? `Please Enter ${localError}` : loginApiError ? `Check Credentials` : null}</p>
            <SubmitBtn
                loading={loading}
                loginError={loginApiError}
                submitFunc={() => {
                    if (presenceCheck()) {
                        postUser({
                            isNewAccount,
                            username: username.current,
                            password: password.current,
                            updateAuthToken,
                        }); //Create User function
                    } else {
                        console.log('some error');
                    }
                }}
            />
        </div>
    );
};

export default InputFieldsBlock;
