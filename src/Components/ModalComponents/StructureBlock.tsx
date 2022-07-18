import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { AiOutlineCheck } from 'react-icons/ai';
import '../../Styling/StructureBlock.scss';

interface StructureBlockProps {
    blockName: string;
    updateUserInfo: (prop: boolean | number) => void;
    number: number;
    active: boolean;
}

const StructureBlock = ({ blockName, updateUserInfo, number, active }: StructureBlockProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;
    const active_mode = active ? `active-mode` : null;

    return (
        <div className="structure-example-container">
            <div
                className={dark ? `structure-example dark ${active_mode}` : `structure-example light ${active_mode}`}
                onClick={() => updateUserInfo(number)}
            >
                {blockName === 'Three'
                    ? [...Array(3)].map((eachElement, i) => (
                          <div className={dark ? 'bookContainer dark' : 'bookContainer light'} key={i}>
                              <div className={dark ? 'upper dark' : 'upper light'}></div>
                          </div>
                      ))
                    : blockName === 'Four'
                    ? [...Array(4)].map((eachElement, i) => (
                          <div className={dark ? 'bookContainer dark' : 'bookContainer light'} key={i}>
                              <div className={dark ? 'upper dark' : 'upper light'}></div>
                          </div>
                      ))
                    : blockName === 'Five'
                    ? [...Array(5)].map((eachElement, i) => (
                          <div className={dark ? 'bookContainer dark' : 'bookContainer light'} key={i}>
                              <div className={dark ? 'upper dark' : 'upper light'}></div>
                          </div>
                      ))
                    : null}
            </div>
            <div className="block-name">
                {active ? <AiOutlineCheck id="check" /> : null}
                {blockName}
                {blockName === 'Four' ? `${' '} (Recommended)` : null}
            </div>
        </div>
    );
};

export default StructureBlock;
