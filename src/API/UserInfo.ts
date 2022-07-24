import { useEffect, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from './useToken';
import { userInfo } from './Interface';
import { dbBook } from './Interface';

function UserInfoApi(prop: string | null) {
    const { authToken, setAuthToken } = useToken(); //On page load we get authToken from local storage

    const [userInfo, setUserInfo] = useState<userInfo | undefined>(undefined);
    const [hasBooks, setHasBooks] = useState<boolean>(true);

    function getUserInfo() {
        if (prop === null) {
            setUserInfo(undefined);
        } else {
            axios({
                method: `GET`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/users/info',
                headers: {
                    'x-auth-token': prop.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<userInfo>) {
                    setUserInfo(response.data);
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });

            axios({
                method: `GET`,
                url: `${process.env.REACT_APP_BACKENDURL}/books`,
                headers: {
                    'x-auth-token': prop.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<dbBook[]>) {
                    setHasBooks(response.data.length ? true : false);
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    const updateHasBooks = () => {
        setHasBooks(true);
    };

    function updateUserInfo(type: boolean | number) {
        setUserInfo(
            userInfo === undefined
                ? undefined
                : typeof type === 'boolean'
                ? { ...userInfo, dark_mode: type }
                : typeof type === 'string'
                ? { ...userInfo, username: type }
                : typeof type === 'number'
                ? { ...userInfo, column_count: type }
                : undefined,
        );

        if (prop === null) {
            throw new Error('no token supplied');
        } else {
            console.log('working');
            // console.log('mode', dark_mode);
            // console.log('auth', prop);
            let dataProp;

            if (typeof type === 'boolean') {
                dataProp = { dark_mode: type };
            } else {
                dataProp = { column_count: type };
            }

            axios({
                method: `PUT`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/users/info',
                headers: {
                    'x-auth-token': prop.replace(/\"/g, ''),
                },
                data: dataProp,
            })
                .then(function (response: any) {
                    console.log(response);
                    // getUserInfo();
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    return {
        getUserInfo,
        userInfo,
        updateUserInfo,
        hasBooks,
        updateHasBooks,
    };
}

export default UserInfoApi;
