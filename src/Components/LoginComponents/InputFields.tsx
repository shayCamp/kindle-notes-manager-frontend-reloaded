import React, { useEffect, useState } from 'react';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../Styling/InputFields.scss';

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
    console.log('active: ', active);
    const [viewPassword, setViewPassword] = useState<boolean>(false);

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
                        id="field"
                        type={type === 'Username' || viewPassword ? 'text' : 'password'}
                        onChange={(e) => {
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
                    {type === 'Username' ? (
                        <SupervisedUserCircleIcon fontSize="medium" />
                    ) : viewPassword ? (
                        <VisibilityIcon id="eye" onClick={() => setViewPassword(!viewPassword)} />
                    ) : (
                        <VisibilityOffIcon id="eye" onClick={() => setViewPassword(!viewPassword)} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default InputFields;
