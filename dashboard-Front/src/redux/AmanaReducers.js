export const initialState = {
    userData : [],
    authInfo : {}
}

export function AmanaReducers(state = initialState,action){
    switch(action.type){
        case "SET_USER_DATA" :
            return {
                ...state,
                userData  : action.payload
            }
        case 'SET_AUTH_INFO' : 
        return {
            ...state,
            authInfo : action.payload
        }
        default : 
            return state
    }
}