import React, { useContext } from 'react';
import '../Styling/IntermediateImportPage.scss';
import { UserContext } from '../Context/UserContext';
import UserInfoApi from '../API/UserInfo';
import ImportOpt from '../Components/ModalComponents/ImportOpt';

interface IntermediateImportPageProps {
    updateHasBooks: () => void;
}

const IntermediateImportPage = ({ updateHasBooks }: IntermediateImportPageProps) => {
    const userInfo = useContext(UserContext);
    const dark = userInfo?.dark_mode;

    return (
        <div className="intermediateImportPage">
            <div className="modal cd-dark text-dark">
                <ImportOpt title={'First Time Importing?'} newUser={true} updateHasBooks={updateHasBooks} />
            </div>
        </div>
    );
};

export default IntermediateImportPage;
