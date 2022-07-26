import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/DeleteModal.scss';

interface DeleteModalProps {
    modalToggle: () => void;
    deleteType: string;
}

const DeleteModal = ({ modalToggle, deleteType }: DeleteModalProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;
    const [input, setInput] = useState<string>('');
    return (
        <div className="delete-modal-container" onClick={() => modalToggle()}>
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
                <div className="modal-button delete-btn">
                    <p>{deleteType === 'Account' ? `Permanently delete account` : `Permanently delete books`}</p>
                </div>
                <div className="modal-button cancel-btn">
                    <p>Cancel</p>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
