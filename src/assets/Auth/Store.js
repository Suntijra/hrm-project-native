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
        case "LoginSuccess" : {
            return {
                ...state,
                isLogin : true,
                token : action.payload.token,
                email : action.payload.email,
                role : action.payload.role,
                status : action.payload.status
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
        usePage: 'intro'
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