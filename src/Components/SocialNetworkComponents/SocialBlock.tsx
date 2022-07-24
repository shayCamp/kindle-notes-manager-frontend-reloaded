import React from 'react';
import '../../Styling/socialBlock.scss';
import SocialCards from './SocialCards';

// interface SocialBlockProps {

// }

const SocialBlock = ({ ...props }) => {
    return (
        <div className="socialBlock">
            <span className="borderLine"></span>
            <div className="cardHolder">
                <SocialCards icon={'github'} />
                <SocialCards icon={'twitter'} />
                <SocialCards icon={'instagram'} />
                <SocialCards icon={'linkedin'} />
            </div>
        </div>
    );
};

export default SocialBlock;
