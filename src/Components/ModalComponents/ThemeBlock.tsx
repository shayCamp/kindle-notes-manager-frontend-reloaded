import React from 'react';
import '../../Styling/ThemeBlock.scss';
import { AiOutlineCheck } from 'react-icons/ai';

interface ThemeBlockProps {
    active: boolean | undefined;
    blockName: string;
    updateUserInfo: (prop: boolean) => void;
}

const ThemeBlock = ({ active, blockName, updateUserInfo }: ThemeBlockProps) => {
    return (
        <div className="theme-example-container" onClick={() => updateUserInfo(blockName === 'Light' ? false : true)}>
            <div className={active ? `theme-example ${blockName} active-mode` : `theme-example ${blockName}`}>
                <div className={`bar bar-top-${blockName}`}></div>
                <div className={`bar ${blockName}`}>
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <div className={`bar ${blockName}`}>
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <div className={`bar ${blockName}`}>
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
