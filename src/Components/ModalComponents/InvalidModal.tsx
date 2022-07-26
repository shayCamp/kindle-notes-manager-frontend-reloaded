import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/InvalidModal.scss';

interface InvalidModalProps {
    deleteType: string;
    modalToggle: () => void;
}

const InvalidModal = ({ deleteType, modalToggle }: InvalidModalProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    document.addEventListener('keyup', function (event) {
        //Checking whether the enter button is pressed, triggering advancement when pressed
        if (event.key === 'Enter') {
            modalToggle();
        }
    });

    return (
        <div className="invalid-modal-container" onClick={() => modalToggle()}>
            <div
                className={dark ? 'invalid-modal-container__modal bg-dark text-dark' : 'invalid-modal-container__modal bg-light'}
                onClick={(event) => event.stopPropagation()}
            >
                <p id="instruction-text">
                    {deleteType === 'Account' ? `Please type "${userInfo?.username}" to continue` : `Please Type "Clippings" to continue`}
                </p>
                <div className="cancel-button" onClick={() => modalToggle()}>
                    <p>Okay</p>
                </div>
            </div>
        </div>
    );
};

export default InvalidModal;
