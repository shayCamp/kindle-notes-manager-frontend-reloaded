import React from 'react';
import '../../Styling/ThemeBlock.scss';

interface ThemeBlockProps {
    state: string;
}

const ThemeBlock = ({ state }: ThemeBlockProps) => {
    return (
        <div className={`theme-example ${state}`}>
            <div className={`bar bar-top-${state}`}></div>
            <div className={`bar ${state}`}>
                <div className="square"></div>
                <div className="rectangle"></div>
            </div>
            <div className={`bar ${state}`}>
                <div className="square"></div>
                <div className="rectangle"></div>
            </div>
            <div className={`bar ${state}`}>
                <div className="square"></div>
                <div className="rectangle"></div>
            </div>
        </div>
    );
};

export default ThemeBlock;
