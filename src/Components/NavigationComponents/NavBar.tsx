import React from 'react';
import '../../Styling/NavBar.scss';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { BsToggles } from 'react-icons/bs';

interface NavBarProps {
    show: boolean;
    toggle: (args: boolean) => void;
    scroll: (args: string) => void;
    libraryActive: boolean;
    modalToggle: () => void;
    modalActive: boolean;
}

const NavBar = ({ show, toggle, scroll, libraryActive, modalToggle, modalActive }: NavBarProps) => {
    const username = sessionStorage.getItem('username');
    return (
        <div className={show ? 'show navBar' : 'navBar'} onMouseEnter={() => toggle(true)} onMouseLeave={() => toggle(false)}>
            <div className="circleOpt">
                <div className="circle">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGk3-BmeIKmTg/profile-displayphoto-shrink_200_200/0/1581169413950?e=1662595200&v=beta&t=PiI6Mel3reQpPjsQfQepv-dXxKpoRHt2qQYyb16a85s" />
                </div>
                <p>{username?.toLocaleUpperCase()}</p>
            </div>
            <div className="navOpt">
                <MdSpaceDashboard className={libraryActive ? 'icon' : 'active icon'} onClick={() => scroll('scrollTo')} />
            </div>
            <div className="navOpt">
                <ImBooks className={libraryActive ? 'active icon' : 'icon'} onClick={() => scroll('bottom__library')} />
            </div>
            <div className="navOpt">
                <IoAnalyticsSharp className="icon" />
            </div>

            <div className="navOpt">
                <BsToggles className={modalActive ? 'active icon' : 'icon'} onClick={() => modalToggle()} />
            </div>
        </div>
    );
};

export default NavBar;
