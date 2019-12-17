import React , {createContext,useReducer} from 'react';
import {AuthReducer} from '../reducers/AuthReducer';

export const AuthContext = createContext();

export function AuthProvider(props){
    const [isLogin,dispatch] = useReducer(AuthReducer,[])

    return(
        <AuthContext.Provider value={{isLogin,dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}