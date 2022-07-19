import React from 'react';
import '../../Styling/InvisibleBar.scss';

interface InvisibleBarProps {
    toggleTrue: () => void; //sets the nav appearance to true
    toggleFalse: () => void; //sets the anv appearance to false
}

const InvisibleBar = ({ toggleTrue, toggleFalse }: InvisibleBarProps) => {
    return <div className="invisibleBar" onMouseEnter={() => toggleTrue()} onMouseLeave={() => toggleFalse()}></div>;
};

export default InvisibleBar;
