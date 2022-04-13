import React from 'react';
import '../../Styling/socialBlock.scss';
import SocialCards from './SocialCards';

// interface SocialBlockProps {

// }

const SocialBlock = ({ ...props }) => {
    console.log(props);
    return (
        <div className="socialBlock">
            <span className="borderLine"></span>
            <div className="cardHolder">
                <SocialCards />
                <SocialCards />
                <SocialCards />
                <SocialCards />
            </div>
        </div>
    );
};

export default SocialBlock;
