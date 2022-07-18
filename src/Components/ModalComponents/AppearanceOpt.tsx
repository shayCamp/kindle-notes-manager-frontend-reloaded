import React, { useContext } from 'react';
import '../../Styling/AppearanceOpt.scss';
import ThemeBlock from './ThemeBlock';
import { UserContext } from '../../Context/UserContext';
import StructureBlock from './StructureBlock';

interface AppearanceProps {
    title: string;
    updateUserInfo: (prop: boolean | number) => void;
}
const AppearanceOpt = ({ title, updateUserInfo }: AppearanceProps) => {
    console.log('updateUserInfo: ', updateUserInfo);
    const userInfo = useContext(UserContext); //allows the current page/component to access the variables stored within the userContext
    const dark = userInfo?.dark_mode;

    return (
        <div className="AppearanceOpt-page">
            <div className="page-title">
                <p>{title}</p>
            </div>
            <div className="option-title">
                <p>Theme</p>
            </div>
            <div className="option-container">
                <ThemeBlock active={!dark} blockName="Light" updateUserInfo={(prop) => updateUserInfo(prop)} />
                <ThemeBlock active={dark} blockName="Dark" updateUserInfo={(prop) => updateUserInfo(prop)} />
            </div>
            <div className="option-title">
                <p>Book Layout</p>
            </div>
            <div className="option-container">
                <StructureBlock blockName="Three" active={userInfo?.column_count === 3} number={3} updateUserInfo={(prop) => updateUserInfo(prop)} />
                <StructureBlock blockName="Four" active={userInfo?.column_count === 4} number={4} updateUserInfo={(prop) => updateUserInfo(prop)} />
                <StructureBlock blockName="Five" active={userInfo?.column_count === 5} number={5} updateUserInfo={(prop) => updateUserInfo(prop)} />
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
