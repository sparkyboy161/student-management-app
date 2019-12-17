export const AuthReducer = (state,action) =>{
    switch(action.type){
        case 'LOGIN_SUCCESS': console.log(state.isLogin);return state;
        case 'LOGIN_FAIL': console.log(state);return state;
        default: return state;
    }
}