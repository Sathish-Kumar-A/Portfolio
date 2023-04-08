import { createContext, useContext, useReducer } from "react";

const ApplicationContext = createContext(null);

export const ContextProvider = ({ state, reducers,children }) => {
    return (
        <ApplicationContext.Provider value={useReducer(reducers,state)}>{children}</ApplicationContext.Provider>
    )
    
}

export const useStore = () => useContext(ApplicationContext);