import React, { useState } from 'react';
import '../../Styling/Modal.scss';
import { BiImport } from 'react-icons/bi';
import { BiExport } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import { VscAccount } from 'react-icons/vsc';
import AccountOpt from '../ModalComponents/AccountOpt';
import AppearanceOpt from '../ModalComponents/AppearanceOpt';
import ImportOpt from '../ModalComponents/ImportOpt';
import ExportOpt from '../ModalComponents/ExportOpt';

interface ModalProps {
    modalToggle: () => void;
}

const Modal = ({ modalToggle }: ModalProps) => {
    const username = sessionStorage.getItem('username');
    const [setting_opt, setSetting_opt] = useState('Account');

    return (
        <div className="modal-container" onClick={() => modalToggle()}>
            <div className="modal-container__modal" onClick={(event) => event.stopPropagation()}>
                <div className="modal__navbar">
                    <div className="modal__navbar__title">
                        <p id="title">{username}</p>
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
                        <GrView className="icon" />
                        <p>Appearance</p>
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
                    <div
                        className={setting_opt === 'Export' ? 'modal__navbar__option active' : 'modal__navbar__option'}
                        onClick={(event) => {
                            event.stopPropagation();
                            setSetting_opt('Export');
                        }}
                    >
                        <BiExport className="icon" />
                        <p>Export</p>
                    </div>
                </div>
                <div className="modal__content">
                    {setting_opt === 'Account' ? (
                        <AccountOpt title={setting_opt} />
                    ) : setting_opt === 'Appearance' ? (
                        <AppearanceOpt title={setting_opt} />
                    ) : setting_opt === 'Import' ? (
                        <ImportOpt title={setting_opt} />
                    ) : setting_opt === 'Export' ? (
                        <ExportOpt title={setting_opt} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Modal;
