import { useReducer, useContext, createContext } from "react";

const StoreContext = createContext()
function StoreReducer(state, action) {
    switch (action.type) {
        case 'login': {
            return {
                ...state,
                isLogin: true,
                email: log
            }
        }
        case 'setSignPage' :{
            return {
                ...state,
                usePage : "LoginScreen"
            }
        }
        case 'SetPage' : {
            let page = action.payload.usePage
            return {
                ...state,
                usePage : page
            }
        }
        case "LoginSuccess" : {
            return {
                ...state,
                isLogin : true,
                token : action.payload.token,
                email : action.payload.email,
                role : action.payload.role,
                status : action.payload.status,
                isLoading : false
            }
        }
        case "LoginFail" : {
            return {
                ...state,
                isLogin : true,
                token : '',
                email : '',
                role : '',
                status : ''
            }
        }
        case "SetLoading" : {
            return {
                ...state,
                isLoading : action.payload.isLoading
            }
        }
        default: return state
    }
}

export function StoreProvider({ children }) {
    let initialStore = {
        isLogin: false,
        token: '',
        email: '',
        usePage: 'intro',
        isLoading : false
    }
    const [getStore, StoreDispatch] = useReducer(StoreReducer, initialStore)

    return (
        <StoreContext.Provider value={{ getStore, StoreDispatch }} >
            {children}
        </StoreContext.Provider>
    )
}

export function useStoreApp() {
    return useContext(StoreContext)
}