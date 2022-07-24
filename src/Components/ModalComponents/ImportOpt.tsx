import React, { useContext, useState, useEffect } from 'react';
import '../../Styling/ImportOpt.scss';
import { io } from 'socket.io-client';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/darkTheme.scss';
import { BsArrowRight } from 'react-icons/bs';
import ImportBooksApi from '../../API/ImportBooksApi';

interface ImportOptProps {
    title: string;
    newUser?: boolean;
    updateHasBooks?: () => void;
}

const ImportOpt = ({ title, newUser, updateHasBooks }: ImportOptProps) => {
    const { uploadBooks, successful } = ImportBooksApi();
    const [incomingFile, setIncomingFile] = useState<File | null>(null);
    const userInfo = useContext(UserContext); //allows the current page/component to access the variables stored within he userContext
    const dark = newUser ? true : userInfo?.dark_mode;

    const uploadFile = () => {
        if (incomingFile === null) {
            console.log('Please Select File');
        } else {
            const formData = new FormData(); // needed for uploading a file
            formData.append('clippingsFile', incomingFile); // adds the uploaded file under the name "clippingsFile" to the formData variable
            uploadBooks(incomingFile);
        }
    };

    /**
     * Next Function -- If its a new user (i.e passed from login), on books import success we need to call updateHasBooks in order to update the APP.tsx and say that the user now has books and can be passed into the main application
     */

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod tellus erat, eget condimentum neque
    ullamcorper eget. Sed sodales lacus id lectus congue cursus. Praesent porttitor felis in mattis scelerisque. Ut
    feugiat in nibh sit amet commodo. Duis vel bibendum tortor, eget pharetra risus`;

    return (
        <form className={newUser ? 'ImportOpt-page new-width' : 'ImportOpt-page'}>
            <div className="page-title">
                <p>{title}</p>
            </div>
            <input
                type="file"
                id="input"
                onChange={(event) => {
                    if (event.target.files !== null) {
                        if (event.target.files[0].type !== 'text/plain') {
                            console.log('file type not supported');
                        } else {
                            setIncomingFile(event.target.files[0]);
                        }
                    }
                }}
            ></input>
            <label htmlFor="input" className={newUser ? 'input-label new-width' : 'input-label'}>
                <div className="diagram-sect">
                    <div className={dark ? 'kindle-container bg-dark' : 'kindle-container bg-light'}>
                        <div className="kindle">
                            <div className="screen">
                                <p>{lorem}</p>
                            </div>
                            <p>Kindle</p>
                        </div>
                    </div>
                    <BsArrowRight id="arrow" />
                    <div className={dark ? 'highlight-container bg-dark' : 'highlight-container bg-light'}>
                        <div className={dark ? 'highlight hover-dark' : 'highlight hover-light'}>
                            <p>{lorem}</p>
                        </div>
                        <div className={dark ? 'highlight hover-dark' : 'highlight hover-light'}>
                            <p>{lorem}</p>
                        </div>
                        <div className={dark ? 'highlight hover-dark' : 'highlight hover-light'}>
                            <p>{lorem}</p>
                        </div>
                    </div>
                </div>
                <div className="description-sect">
                    <p>{incomingFile === null ? `Drag Clippings.txt here or upload using the button` : `Selected File: ${incomingFile.name}`}</p>
                </div>
                <div className="upload-sect">
                    <div
                        className={incomingFile === null ? 'upload-block' : 'upload-block active'}
                        onClick={
                            incomingFile === null
                                ? undefined
                                : (event) => {
                                      event.preventDefault();
                                      uploadFile();
                                  }
                        }
                    >
                        <p>{incomingFile === null ? `Select File` : `Upload`}</p>
                    </div>
                </div>
            </label>
        </form>
    );
};

export default ImportOpt;
