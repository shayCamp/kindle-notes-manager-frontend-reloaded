import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import '../../Styling/Info_row.scss';

interface Info_rowProps {
    title: string;
    updateUserInfo?: (prop: boolean | number | string) => void;
}

const Info_row = ({ title, updateUserInfo }: Info_rowProps) => {
    const userInfo = useContext(UserContext);
    if (userInfo) {
        console.log('userInfo: ', new Date(userInfo?.registration_date).getFullYear());
    }
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dark = userInfo?.dark_mode;
    const [newUsername, setNewUsername] = useState<string>(userInfo ? userInfo.username : '');
    const [newPassword, setNewPassword] = useState<string>('');
    const [displayText, setDisplayText] = useState<string | number | undefined>();

    const changeUsername = () => {
        if (newUsername.replace(/\s/g, '') && updateUserInfo) {
            updateUserInfo(newUsername);
        } else {
            console.log('Username unavailable');
        }
    };

    const nth = function (d: number) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    };

    const dateText = () => {
        let sentence = '';
        if (userInfo) {
            sentence = sentence.concat(
                ' ',
                week[new Date(userInfo?.registration_date).getDay()],
                ' ',
                new Date(userInfo?.registration_date).getDate().toString(),
                nth(new Date(userInfo?.registration_date).getDate()),
                ' ',
                month[new Date(userInfo?.registration_date).getMonth()],
                ' ',
                new Date(userInfo?.registration_date).getFullYear().toString(),
            );
        }

        return sentence;
    };

    useEffect(() => {
        switch (title) {
            case 'Registration Date':
                setDisplayText(dateText());
                break;
            case 'Book Count':
                setDisplayText(userInfo ? userInfo?.book_count : undefined);
                break;
            case 'Highlight Count':
                setDisplayText(userInfo ? userInfo?.book_count : undefined);
                break;
        }
    }, [title]);

    return (
        <div className="info-div">
            <div className="info-div__title">
                <p className="title">{title}</p>
            </div>
            <div className="info-div__content">
                {title === 'Password' || title === 'Username' ? (
                    <>
                        <input
                            value={title === 'Username' ? newUsername : undefined}
                            onChange={title === 'Username' ? (event) => setNewUsername(event.target.value.replace(/\s/g, '')) : undefined}
                            type={title}
                            id="info-input"
                            placeholder={title}
                            className={dark ? 'cd-dark text-dark' : 'cd-light text-light'}
                        ></input>
                        <div
                            className={
                                title === 'Username'
                                    ? newUsername !== userInfo?.username
                                        ? dark
                                            ? 'editButton hover-dark'
                                            : 'editButton hover-light'
                                        : undefined
                                    : undefined
                            }
                            onClick={title === 'Username' ? (newUsername !== userInfo?.username ? changeUsername : undefined) : undefined}
                        >
                            {title === 'Username' ? newUsername !== userInfo?.username ? <p>Upload</p> : null : null}
                        </div>
                    </>
                ) : (
                    <p className="content-text">{displayText}</p>
                )}
            </div>
        </div>
    );
};

export default Info_row;
