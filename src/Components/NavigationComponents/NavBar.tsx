import React from 'react';
import '../../Styling/NavBar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

interface NavBarProps {
    show: boolean;
    toggle: (args: boolean) => void;
    scroll: (args: string) => void;
    libraryActive: boolean;
}

const NavBar = ({ show, toggle, scroll, libraryActive }: NavBarProps) => {
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
                <DashboardIcon className={libraryActive ? 'icon' : 'active icon'} onClick={() => scroll('dashboard')} />
            </div>
            <div className="navOpt">
                <MenuBookIcon className={libraryActive ? 'active icon' : 'icon'} onClick={() => scroll('library')} />
            </div>
            <div className="navOpt">
                <BarChartIcon className="icon" />
            </div>

            <div className="navOpt">
                <SettingsIcon className="icon" />
            </div>
        </div>
    );
};

export default NavBar;
