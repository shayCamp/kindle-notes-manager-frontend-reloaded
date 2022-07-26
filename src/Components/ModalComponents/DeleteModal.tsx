import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/DeleteModal.scss';
import InvalidModal from './InvalidModal';

interface DeleteModalProps {
    modalToggle: () => void;
    deleteType: string;
}

const DeleteModal = ({ modalToggle, deleteType }: DeleteModalProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;
    const [viewInvalidModal, setViewInvalidModal] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');

    const deleteFunc = () => {
        if (deleteType === 'Account') {
            if (input === userInfo?.username) {
                console.log('can delete account');
            } else {
                setViewInvalidModal(true);
            }
        } else {
            if (input === 'Clippings') {
                console.log('can delete account');
            } else {
                setViewInvalidModal(true);
            }
        }
    };

    const invalidModalToggle = () => {
        setViewInvalidModal(false);
    };

    document.addEventListener('keyup', function (event) {
        //Checking whether the enter button is pressed, triggering advancement when pressed
        if (event.key === 'Enter') {
            deleteFunc();
        }
    });

    return (
        <div className="delete-modal-container" onClick={viewInvalidModal ? undefined : () => modalToggle()}>
            <div
                className={dark ? 'delete-modal-container__modal bg-dark text-dark' : 'delete-modal-container__modal bg-light'}
                onClick={(event) => event.stopPropagation()}
            >
                <p id="warning-text">
                    {deleteType === 'Account'
                        ? `This action cannot be undone. This will permanently delete your entire account, including all books associated to it. Please type the name of the account to confirm.`
                        : `This action cannot be undone. This will permanently delete all books associated to your acccount. Please type “Clippings” to confirm.`}
                </p>
                {deleteType === 'Account' ? <p id="username">{userInfo?.username}</p> : null}
                <input
                    id={deleteType === 'Account' ? 'delete-input' : 'delete-input-margin-top'}
                    className={dark ? 'cd-dark text-dark' : 'cd-light text-light'}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={deleteType === 'Account' ? userInfo?.username : 'Clippings'}
                />
                <div className="modal-button delete-btn" onClick={() => deleteFunc()}>
                    <p>{deleteType === 'Account' ? `Permanently delete account` : `Permanently delete books`}</p>
                </div>
                <div className="modal-button cancel-btn" onClick={() => modalToggle()}>
                    <p>Cancel</p>
                </div>
            </div>
            {viewInvalidModal ? <InvalidModal deleteType={deleteType} modalToggle={invalidModalToggle} /> : null}
        </div>
    );
};

export default DeleteModal;
