import React from 'react';
import '../../Styling/AppearanceOpt.scss';
import ThemeBlock from './ThemeBlock';
import { AiOutlineCheck } from 'react-icons/ai';

interface AppearanceProps {
    title: string;
}
const AppearanceOpt = ({ title }: AppearanceProps) => {
    return (
        <div className="AppearanceOpt-page">
            <div className="page-title">
                <p>{title}</p>
            </div>
            <div className="theme-block__title">
                <p>Theme</p>
            </div>
            <div className="theme-block">
                <ThemeBlock state={'light'} />
                <ThemeBlock state={'dark'} />
            </div>
            <div className="theme-block__names">
                <div className="name">
                    <AiOutlineCheck id="check" />
                    <p>Light</p>
                </div>
                <div className="name">
                    <p>Dark</p>
                </div>
            </div>
        </div>
    );
};

export default AppearanceOpt;
