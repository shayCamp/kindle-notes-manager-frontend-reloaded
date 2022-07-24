import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/NavBar.scss';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { BsToggles } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import settings from 'react-useanimations/lib/settings';
import '../../Styling/darkTheme.scss';

interface NavBarProps {
    show: boolean; //Triggers when to show or hide bar
    toggle: (args: boolean) => void;
    scroll: (args: string) => void;
    libraryActive: boolean;
    modalToggle: () => void;
    modalActive: boolean;
}

const NavBar = ({ show, toggle, scroll, libraryActive, modalToggle, modalActive }: NavBarProps) => {
    const username = sessionStorage.getItem('username');
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    return (
        <div
            className={dark ? (show ? 'show navBar cd-dark' : 'navBar cd-dark') : show ? 'show navBar cd-light' : 'navBar cd-light'}
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
        >
            <div className={dark ? 'toggleTag cd-dark text-dark' : 'toggleTag cd-light'} onClick={() => modalToggle()}>
                <IoSettingsOutline id="icon" />
            </div>
            <div className={dark ? 'circleOpt text-dark' : 'circleOpt'}>
                <div className="circle" onClick={() => modalToggle()}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGk3-BmeIKmTg/profile-displayphoto-shrink_200_200/0/1581169413950?e=1662595200&v=beta&t=PiI6Mel3reQpPjsQfQepv-dXxKpoRHt2qQYyb16a85s" />
                </div>
                <p>{username?.toLocaleUpperCase()}</p>
            </div>
            <div className={dark ? 'navOpt icon-dark' : 'navOpt icon-light'}>
                <MdSpaceDashboard className={libraryActive ? 'icon' : 'active icon'} onClick={() => scroll('scrollTo')} />
            </div>
            <div className={dark ? 'navOpt icon-dark' : 'navOpt icon-light'}>
                <ImBooks className={libraryActive ? 'active icon' : 'icon'} onClick={() => scroll('bottom__library')} />
            </div>
            <div className={dark ? 'navOpt icon-dark' : 'navOpt icon-light'}>
                <IoAnalyticsSharp className="icon" />
            </div>
            <div className={dark ? 'navOpt icon-dark' : 'navOpt icon-light'}>
                <BsToggles className={modalActive ? 'active icon' : 'icon'} onClick={() => modalToggle()} />
            </div>
        </div>
    );
};

export default NavBar;
