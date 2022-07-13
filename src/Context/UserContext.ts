import React, { createContext } from 'react';
import { userInfo } from '../API/Interface';

export const UserContext = createContext<userInfo | undefined>(undefined);

export default UserContext;
