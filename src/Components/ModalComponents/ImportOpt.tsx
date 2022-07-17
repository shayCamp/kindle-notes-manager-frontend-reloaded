import React, { useContext, useState } from 'react';
import '../../Styling/ImportOpt.scss';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/darkTheme.scss';
import { BsArrowRight } from 'react-icons/bs';

interface ImportOptProps {
    title: string;
}

const ImportOpt = ({ title }: ImportOptProps) => {
    const [incomingFile, setIncomingFile] = useState<File | null>(null);
    console.log('incomingFile: ', incomingFile);
    const userInfo = useContext(UserContext); //allows the current page/component to access the variables stored within he userContext
    const dark = userInfo?.dark_mode;

    const uploadFile = () => {
        if (incomingFile === null) {
            console.log('Please Select File');
        } else {
            const formData = new FormData(); // needed for uploading a file
            formData.append('clippingsFile', incomingFile); // adds the uploaded file under the name "clippingsFile" to the formData variable
            console.log(formData);
            // console.log('formData: ', typeof formData);
            // axios({
            //     method: `POST`,
            //     url: `http://localhost:3000/upload`,
            //     headers: { 'x-auth-token': `${authToken}` },
            //     data: formData,
            // })
            //     .then(function (response) {
            //         console.log('success');
            //     })
            //     .catch(function (error) {
            //         console.log(`error:`, error);
            //     });
        }
    };

    return (
        <form className="ImportOpt-page">
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
            <label htmlFor="input" id="input-label">
                <div className="diagram-sect">
                    <div className={dark ? 'kindle-container bg-dark' : 'kindle-container bg-light'}>
                        <div className="kindle">
                            <div className="screen">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod tellus erat, eget condimentum neque
                                    ullamcorper eget. Sed sodales lacus id lectus congue cursus. Praesent porttitor felis in mattis scelerisque. Ut
                                    feugiat in nibh sit amet commodo. Duis vel bibendum tortor, eget pharetra risus
                                </p>
                            </div>
                            <p>Kindle</p>
                        </div>
                    </div>
                    <BsArrowRight id="arrow" />
                    <div className={dark ? 'highlight-container bg-dark' : 'highlight-container bg-light'}>
                        <div className={dark ? 'highlight hover-dark' : 'highlight hover-light'}>
                            <p>
                                Donec quis varius odio. Suspendisse vel tortor ac dui varius venenatis et sed lorem. Sed nec lectus et nulla euismod
                                ullamcorper. Donec a felis a ipsum mattis tincidunt at consequat quam. In hac habitasse platea dictumst. Ut vehicula,
                                lacus quis faucibus ultrices, urna diam pretium elit, a pharetra felis elit et mauris.{' '}
                            </p>
                        </div>
                        <div className={dark ? 'highlight hover-dark' : 'highlight hover-light'}>
                            <p>
                                Donec quis varius odio. Suspendisse vel tortor ac dui varius venenatis et sed lorem. Sed nec lectus et nulla euismod
                                ullamcorper. Donec a felis a ipsum mattis tincidunt at consequat quam. In hac habitasse platea dictumst. Ut vehicula,
                                lacus quis faucibus ultrices, urna diam pretium elit, a pharetra felis elit et mauris.{' '}
                            </p>
                        </div>
                        <div className={dark ? 'highlight hover-dark' : 'highlight hover-light'}>
                            <p>
                                Donec quis varius odio. Suspendisse vel tortor ac dui varius venenatis et sed lorem. Sed nec lectus et nulla euismod
                                ullamcorper. Donec a felis a ipsum mattis tincidunt at consequat quam. In hac habitasse platea dictumst. Ut vehicula,
                                lacus quis faucibus ultrices, urna diam pretium elit, a pharetra felis elit et mauris.{' '}
                            </p>
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
