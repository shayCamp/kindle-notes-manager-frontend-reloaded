import React from 'react';
import '../../Styling/InvisibleBar.scss';

interface InvisibleBarProps {
    toggleTrue: () => void;
    toggleFalse: () => void;
}

const InvisibleBar = ({ toggleTrue, toggleFalse }: InvisibleBarProps) => {
    return <div className="invisibleBar" onMouseEnter={() => toggleTrue()} onMouseLeave={() => toggleFalse()}></div>;
};

export default InvisibleBar;
