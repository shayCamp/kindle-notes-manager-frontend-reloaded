import React, { useEffect, useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import '../../Styling/InputFields.scss';
import DoneIcon from '@mui/icons-material/Done';

interface InputFieldsProps {
    type: 'Username' | 'Password';
    updatePassword?: (arg: string) => void;
    updateUsername?: (arg: string) => void;
    clearErrors: () => void;
    ApiError: boolean | null;
    localError: boolean | string;
}

const InputFields = ({ type, updatePassword, updateUsername, clearErrors, ApiError, localError }: InputFieldsProps) => {
    const [active, setActive] = useState<boolean>(false);
    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [inputText, setInputText] = useState('');

    // ApiError
    //     ? 'inputField redBorder'
    //     : localError === type && !active
    //     ? 'inputField redBorder'
    //     : active
    //     ? 'inputField blueBorder'
    //     : 'inputField'

    return (
        <div
            className={
                //If theres an API error set both borders to red
                //If theres a local error, ill check its type and then set that border to red, if the input aint active
                //If input is active set border blue
                ApiError
                    ? 'inputField redBorder'
                    : localError === type && !active
                    ? 'inputField redBorder'
                    : active
                    ? 'inputField blueBorder'
                    : 'inputField'
            }
        >
            <div className="centeringContainer">
                <div className="leftSideInput">
                    <div className="bannerForInput">
                        <p className="tag">{type}</p>
                    </div>
                    <input
                        autoComplete="off"
                        className="inputFields"
                        onFocus={() => {
                            setActive(true);
                            clearErrors();
                        }}
                        onBlur={() => {
                            setActive(false);
                        }}
                        type={type === 'Username' || viewPassword ? 'text' : 'password'}
                        onChange={(e) => {
                            setInputText(e.target.value.replace(/\s/g, ''));
                            if (updatePassword) {
                                updatePassword(e.target.value);
                            } else if (updateUsername) {
                                updateUsername(e.target.value);
                            }
                        }}
                        placeholder={`Enter Your ${type}`}
                    ></input>
                </div>
                <div className="rightSideIcon">
                    {type === 'Username' ? inputText ? <DoneIcon id="tickIcon" /> : null : null}
                    {type === 'Password' ? (
                        inputText ? (
                            viewPassword ? (
                                <LockOpenIcon id="lock" onClick={() => setViewPassword(!viewPassword)} />
                            ) : (
                                <LockIcon id="lock" onClick={() => setViewPassword(!viewPassword)} />
                            )
                        ) : null
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default InputFields;
