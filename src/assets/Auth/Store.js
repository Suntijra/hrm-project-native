import { useReducer, useContext, createContext } from "react";

const StoreContext = createContext()
function StoreReducer(state, action) {
    switch (action) {
        case 'login': {
            return {
                ...state,
                isLogin: true,
                email: log
            }
        }
        default: return state
    }
}

export function StoreContext({ children }) {
    let initialStore = {
        isLogin: false,
        token: '',
        email: ''
    }
    const [getStore, StoreDitpatch] = useReducer(StoreReducer, initialStore)

    return (
        <StoreContext.Provider value={{ getStore, StoreDitpatch }} >
            {children}
        </StoreContext.Provider>
    )
}

export function useStoreApp() {
    return useContext(StoreContext)
}