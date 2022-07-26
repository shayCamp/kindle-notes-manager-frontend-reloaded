import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/AccountOpt.scss';
import { BsFillPencilFill } from 'react-icons/bs';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import instagram from 'react-useanimations/lib/instagram';
import twitter from 'react-useanimations/lib/twitter';
import linkedin from 'react-useanimations/lib/linkedin';
import Info_row from './Info_row';
import DeleteModal from './DeleteModal';

interface MyAccountProps {
    title: string;
    updateUserInfo: (prop: boolean | number | string) => void;
}

const AccountOpt = ({ title, updateUserInfo }: MyAccountProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [newUsername, setNewUsername] = useState<string>(userInfo ? userInfo.username : '');
    const [newPassword, setNewPassword] = useState<string>('');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [viewModal, setViewModal] = useState(false);
    const [deleteType, setDeleteType] = useState('');
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    const iconSize = () => {
        if (screenWidth < 1366) {
            return 25;
        } else if (screenWidth < 1800) {
            return 32;
        } else if (screenWidth >= 1800) {
            return 34;
        } else {
            return 28;
        }
    };

    const modalToggle = () => {
        setViewModal(!viewModal);
    };

    return (
        <div className="AccountOpt-page">
            <div className="page-title">
                <p>{title}</p>
            </div>
            <div className="circle-section">
                <div className="circle">
                    <input
                        type="file"
                        id="input"
                        onChange={(event) => {
                            if (event.target.files !== null) {
                                if (event.target.files[0].type !== 'image/jpeg') {
                                    console.log('file type not supported');
                                } else {
                                    setProfileImage(event.target.files[0]);
                                }
                            }
                        }}
                    ></input>
                    <label htmlFor="input" className="circle__edit">
                        <BsFillPencilFill id="edit-icon" />
                    </label>
                </div>
            </div>
            <div className={dark ? 'info-block bg-dark' : 'info-block bg-light'}>
                <Info_row title={'Username'} updateUserInfo={(prop: boolean | number | string) => updateUserInfo(prop)} />
                <Info_row title={'Password'} />
                <Info_row title={'Registration Date'} />
                <Info_row title={'Book Count'} />
                <Info_row title={'Highlight Count'} />
            </div>
            <div className={dark ? 'linked-block bg-dark' : 'linked-block bg-light'}>
                <div className="linked-block__title">
                    <p className="title">Link Socials</p>
                </div>
                <div className="linked-block__content">
                    <UseAnimations id="icon" strokeColor={dark ? 'white' : 'black'} size={iconSize()} animation={instagram} />
                    <UseAnimations id="icon" strokeColor={dark ? 'white' : 'black'} size={iconSize()} animation={github} />
                    <UseAnimations id="icon" strokeColor={dark ? 'white' : 'black'} size={iconSize()} animation={linkedin} />
                    <UseAnimations id="icon" strokeColor={dark ? 'white' : 'black'} size={iconSize()} animation={twitter} />
                </div>
            </div>
            <div className={dark ? 'linked-block bg-dark' : 'linked-block bg-light'}>
                <div className="linked-block__title">
                    <p className="title">Danger Zone</p>
                </div>
                <div className="linked-block__content">
                    <div
                        className="delete-btn"
                        onClick={() => {
                            setViewModal(!viewModal);
                            setDeleteType('Account');
                        }}
                    >
                        Delete Account
                    </div>
                    <div
                        className="delete-btn"
                        onClick={() => {
                            setViewModal(!viewModal);
                            setDeleteType('Books');
                        }}
                    >
                        Delete All Books
                    </div>
                </div>
            </div>
            <div
                className={dark ? 'signOut-block bg-dark' : 'signOut-block bg-light'}
                onClick={() => {
                    sessionStorage.clear();
                    history.go(0);
                }}
            >
                <p>Sign Out</p>
            </div>
            {viewModal ? <DeleteModal modalToggle={modalToggle} deleteType={deleteType} /> : null}
        </div>
    );
};

export default AccountOpt;
