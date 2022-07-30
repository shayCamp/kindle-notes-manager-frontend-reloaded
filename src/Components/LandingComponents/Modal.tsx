import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/Modal.scss';
import { BiImport } from 'react-icons/bi';
import { BiExport } from 'react-icons/bi';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import { IoBookOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import AccountOpt from '../ModalComponents/AccountOpt';
import AppearanceOpt from '../ModalComponents/AppearanceOpt';
import ImportOpt from '../ModalComponents/ImportOpt';
import MyBooksOpt from '../ModalComponents/MyBooksOpt';

interface ModalProps {
    modalToggle: () => void;
    updateUserInfo: (prop: boolean | number | string) => void;
}

const Modal = ({ modalToggle, updateUserInfo }: ModalProps) => {
    const [setting_opt, setSetting_opt] = useState('Account');
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    return (
        <div className="modal-container" onClick={() => modalToggle()}>
            <div
                className={dark ? 'modal-container__modal cd-dark text-dark' : 'modal-container__modal cd-light'}
                onClick={(event) => event.stopPropagation()}
            >
                <div className={dark ? 'modal__navbar bg-dark ' : 'modal__navbar bg-light'}>
                    <div className="modal__navbar__title">
                        <AiOutlineClose className="icon" onClick={() => modalToggle()} />
                        <p>{userInfo?.username}</p>
                    </div>
                    <div
                        className={setting_opt === 'Account' ? 'modal__navbar__option active' : 'modal__navbar__option'}
                        onClick={(event) => {
                            event.stopPropagation();
                            setSetting_opt('Account');
                        }}
                    >
                        <VscAccount className="icon" />
                        <p>My Account</p>
                    </div>
                    <div
                        className={setting_opt === 'Appearance' ? 'modal__navbar__option active' : 'modal__navbar__option'}
                        onClick={(event) => {
                            event.stopPropagation();
                            setSetting_opt('Appearance');
                        }}
                    >
                        <AiOutlineFormatPainter className="icon" />
                        <p>Appearance</p>
                    </div>
                    <div
                        className={setting_opt === 'My Books' ? 'modal__navbar__option active' : 'modal__navbar__option'}
                        onClick={(event) => {
                            event.stopPropagation();
                            setSetting_opt('My Books');
                        }}
                    >
                        <IoBookOutline className="icon" />
                        <p>My Books</p>
                    </div>
                    <div
                        className={setting_opt === 'Import' ? 'modal__navbar__option active' : 'modal__navbar__option'}
                        onClick={(event) => {
                            event.stopPropagation();
                            setSetting_opt('Import');
                        }}
                    >
                        <BiImport className="icon" />
                        <p>Import</p>
                    </div>
                </div>
                <div className="modal__content">
                    {setting_opt === 'Account' ? (
                        <AccountOpt title={setting_opt} updateUserInfo={(prop: boolean | number | string) => updateUserInfo(prop)} />
                    ) : setting_opt === 'Appearance' ? (
                        <AppearanceOpt title={setting_opt} updateUserInfo={(prop: boolean | number) => updateUserInfo(prop)} />
                    ) : setting_opt === 'Import' ? (
                        <ImportOpt title={setting_opt} />
                    ) : setting_opt === 'My Books' ? (
                        <MyBooksOpt title={setting_opt} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Modal;
