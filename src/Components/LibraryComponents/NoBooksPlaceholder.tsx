import React from 'react';
import '../../Styling/NoBooksPlaceholder.scss';

interface NoBooksPlaceholderProps {
    modalToggle: () => void;
}

const NoBooksPlaceholder = ({ modalToggle }: NoBooksPlaceholderProps) => {
    return (
        <div className="placeholder-page">
            <h1 onClick={modalToggle}>Currently Have No Books, Head To Settings To Import</h1>
            {/* <img src={require('../../Assests/bookshelve.svg').default} alt="mySvgImage" /> */}
        </div>
    );
};

export default NoBooksPlaceholder;
