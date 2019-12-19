import React , {createContext,useReducer} from 'react';
import {AuthReducer} from '../reducers/AuthReducer';

export const AuthContext = createContext();

export function AuthProvider(props){
    const [loginId,setLoginId] = useReducer(AuthReducer,[])

    return(
        <AuthContext.Provider value={{loginId,setLoginId}}>
            {props.children}
        </AuthContext.Provider>
    )
}