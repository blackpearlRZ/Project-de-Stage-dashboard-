const dateActuelle = new Date().toISOString().split("T")[0]
export const initialState = {
    userData : [],
    authInfo : {},
    filters: {
        codeEnvoi: '',
        tele: '',
        dateDepotD: '2024-01-02',
        dateDepotA: dateActuelle,
        statusVal: 'Tout statut',
        distination: 'all',
        dateStatusD: '2024-01-03',
        dateStatusA: dateActuelle,
        paiement: 'all',
        Vir: 'CRBT',
        datepaiementD: '',
        datepaiementA: ''
    },
    token : ''
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
        case 'SET_FILTERS':
            return {
                ...state,
                filters : {
                    ...state.filters,...action.payload
                }
            } 
        case 'RESET_FILTERS':
            return {
                ...state,
                filters: {
                    codeEnvoi: '',
                    tele: '',
                    dateDepotD: dateActuelle,
                    dateDepotA: '',
                    statusVal: 'Tout statut',
                    distination: 'all',
                    dateStatusD: '',
                    dateStatusA: dateActuelle,
                    paiement: 'all',
                    Vir: 'CRBT',
                    datepaiementD: '',
                    datepaiementA: ''
                }
            }
            case 'SET_TOKEN':
                return {
                    ...state,
                    token : action.payload
                }
        default : 
            return state
    }
}