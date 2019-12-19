import React , {useState,createContext} from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
    const [loadingState,setLoadingState] = useState(false);
    return(
        <LoadingContext.Provider  value={[loadingState,setLoadingState]}>
            {props.children}
        </LoadingContext.Provider>
    )
}
