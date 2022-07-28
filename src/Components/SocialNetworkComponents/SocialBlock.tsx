import React from 'react';
import '../../Styling/socialBlock.scss';
import { FiInstagram } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

// interface SocialBlockProps {

// }

const SocialBlock = ({ ...props }) => {
    return (
        <div className="socialBlock">
            <span className="borderLine"></span>
            <div className="cardHolder">
                <FiInstagram className="icon" />
                <FiGithub className="icon" />
                <FiLinkedin className="icon" />
                <FiTwitter className="icon" />
            </div>
        </div>
    );
};

export default SocialBlock;
