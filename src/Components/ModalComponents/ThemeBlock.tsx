import React from 'react';
import '../../Styling/ThemeBlock.scss';
import { AiOutlineCheck } from 'react-icons/ai';

interface ThemeBlockProps {
    state: string;
    active: boolean | undefined;
    blockName: string;
}

const ThemeBlock = ({ state, active, blockName }: ThemeBlockProps) => {
    console.log('active: ', active);
    return (
        <div className="theme-example-container">
            <div className={active ? `theme-example ${state} active-mode` : `theme-example ${state}`}>
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
            <div className="block-name">
                {active ? <AiOutlineCheck id="check" /> : null}
                {blockName}
            </div>
        </div>
    );
};

export default ThemeBlock;
