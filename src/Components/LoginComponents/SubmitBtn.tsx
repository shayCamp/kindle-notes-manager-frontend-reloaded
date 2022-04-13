import React from 'react';
import '../../Styling/SubmitBtn.scss';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

interface SubmitBtnProps {
    submitFunc: () => void;
    loading: boolean;
    loginError: boolean | null;
}

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const SubmitBtn = ({ submitFunc, loading, loginError }: SubmitBtnProps) => {
    return (
        <div className={loading ? 'button loading' : 'button'} onClick={submitFunc}>
            {loading ? <MoonLoader css={override} size={20} color={`white`} /> : <p>{loginError ? `Invalid Request` : `Advance`}</p>}
        </div>
    );
};

export default SubmitBtn;
