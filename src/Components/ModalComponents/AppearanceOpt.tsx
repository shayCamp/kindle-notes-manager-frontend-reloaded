import React, { useContext } from 'react';
import '../../Styling/AppearanceOpt.scss';
import ThemeBlock from './ThemeBlock';
import { UserContext } from '../../Context/UserContext';
import StructureBlock from './StructureBlock';

interface AppearanceProps {
    title: string;
}
const AppearanceOpt = ({ title }: AppearanceProps) => {
    const userInfo = useContext(UserContext); //allows the current page/component to access the variables stored within the userContext
    console.log('userInfo: ', userInfo);

    return (
        <div className="AppearanceOpt-page">
            <div className="page-title">
                <p>{title}</p>
            </div>
            <div className="option-title">
                <p>Theme</p>
            </div>
            <div className="option-container">
                <ThemeBlock state={'light'} active={!userInfo?.dark_mode} blockName="Light" />
                <ThemeBlock state={'dark'} active={userInfo?.dark_mode} blockName="Dark" />
            </div>
            <div className="option-title">
                <p>Book Layout</p>
            </div>
            <div className="option-container">
                <StructureBlock blockName="Three" />
                <StructureBlock blockName="Four" />
                <StructureBlock blockName="Five" />
            </div>
        </div>
    );
};

export default AppearanceOpt;

// <div className="option-title">
//                 <p>Theme</p>
//             </div>
//             <div className="option-block">
//                 <ThemeBlock state={'light'} active={!userInfo?.dark_mode} />
//                 <ThemeBlock state={'dark'} active={userInfo?.dark_mode} />
//             </div>
//             <div className="option-block-desc">
//                 <div className="desc-theme">
//                     {!userInfo?.dark_mode ? <AiOutlineCheck id="check" /> : null}
//                     <p>Light</p>
//                 </div>
//                 <div className="desc-theme">
//                     {userInfo?.dark_mode ? <AiOutlineCheck id="check" /> : null}
//                     <p>Dark</p>
//                 </div>
//             </div>
//             <div className="option-title">
//                 <p>Structure</p>
//             </div>
//             <div className="option-block">
//                 <ThemeBlock state={'light'} active={!userInfo?.dark_mode} />
//                 <ThemeBlock state={'dark'} active={userInfo?.dark_mode} />
//             </div>
//             <div className="option-block-desc">
//                 <div className="desc">
//                     <p>3</p>
//                 </div>
//                 <div className="desc">
//                     <p>4</p>
//                 </div>
//                 <div className="desc">
//                     <p>5</p>
//                 </div>
//             </div>
