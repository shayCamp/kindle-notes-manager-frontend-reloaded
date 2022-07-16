import { useEffect, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useToken from './useToken';
import { userInfo } from './Interface';

function UserInfoApi(prop: string | null) {
    const [userInfo, setUserInfo] = useState<userInfo | undefined>(undefined);

    function getUserInfo() {
        console.log('function running');
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
        }
    }

    return {
        getUserInfo,
        userInfo,
    };
}

export default UserInfoApi;

// function updateUserInfo(prop) {
//     if (prop === null) {
//         throw new Error('no token supplied');
//     } else {
//         axios({
//             method: `PUT`,
//             url: 'https://kindle-project-backend-v2.herokuapp.com/users/info',
//             headers: {
//                 'x-auth-token': prop.replace(/\"/g, ''),
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
