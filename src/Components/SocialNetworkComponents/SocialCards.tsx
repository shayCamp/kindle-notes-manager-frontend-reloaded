import React from 'react';
import '../../Styling/socialCards.scss';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import instagram from 'react-useanimations/lib/instagram';
import twitter from 'react-useanimations/lib/twitter';
import linkedin from 'react-useanimations/lib/linkedin';
import loading from 'react-useanimations/lib/loading';

interface SocialCardsProps {
    icon: string;
}

const SocialCards = ({ icon }: SocialCardsProps) => {
    return (
        <div className="card">
            <UseAnimations
                id="icon"
                strokeColor="white"
                size={28}
                animation={
                    icon === 'github'
                        ? github
                        : icon === 'instagram'
                        ? instagram
                        : icon === 'twitter'
                        ? twitter
                        : icon === 'linkedin'
                        ? linkedin
                        : loading
                }
            />
        </div>
    );
};

export default SocialCards;
