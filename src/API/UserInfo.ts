import { useEffect, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from './useToken';
import { userInfo } from './Interface';

function UserInfoApi() {
    const [userInfo, setUserInfo] = useState<userInfo | undefined>(undefined);
    const { authToken, setAuthToken } = useToken(); //Retrieving authToken
    const [loading, setLoading] = useState(true);

    function getUserInfo() {
        if (authToken === null) {
            throw new Error('no token supplied');
        } else {
            axios({
                method: `GET`,
                url: 'https://kindle-project-backend-v2.herokuapp.com/users/info',
                headers: {
                    'x-auth-token': authToken.replace(/\"/g, ''),
                },
            })
                .then(function (response: AxiosResponse<userInfo>) {
                    setUserInfo(response.data);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(`error:`, error);
                });
        }
    }

    // function updateUserInfo(prop) {
    //     if (authToken === null) {
    //         throw new Error('no token supplied');
    //     } else {
    //         axios({
    //             method: `PUT`,
    //             url: 'https://kindle-project-backend-v2.herokuapp.com/users/info',
    //             headers: {
    //                 'x-auth-token': authToken.replace(/\"/g, ''),
    //             },
    //             data: { dark_mode: prop },
    //         })
    //             .then(function (response: AxiosResponse<userInfo>) {
    //                 getUserInfo();
    //             })
    //             .catch(function (error) {
    //                 console.log(`error:`, error);
    //             });
    //     }
    // }

    return {
        getUserInfo,
        userInfo,
    };
}

export default UserInfoApi;
