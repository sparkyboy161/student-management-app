import React , {createContext,useState} from 'react';

export const AuthContext = createContext();

export function AuthProvider(props){
    const [loginId,setLoginId] = useState(0);

    return(
        <AuthContext.Provider value={[loginId,setLoginId]}>
            {props.children}
        </AuthContext.Provider>
    )
}