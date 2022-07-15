import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { AiOutlineCheck } from 'react-icons/ai';
import '../../Styling/StructureBlock.scss';

interface StructureBlockProps {
    blockName: string;
}

const StructureBlock = ({ blockName }: StructureBlockProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    return (
        <div className="structure-example-container">
            <div className={dark ? 'structure-example dark' : 'structure-example light'}>
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
                <AiOutlineCheck id="check" />
                {blockName}
                {blockName === 'Four' ? `${' '} (Recommended)` : null}
            </div>
        </div>
    );
};

export default StructureBlock;
