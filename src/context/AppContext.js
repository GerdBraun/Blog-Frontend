import { createContext, useContext } from "react";

const AppContext = createContext();

const useApp = () => {
    const context = useContext(AppContext);
    if (!context)
        throw new Error(
            'useNotes must be used inside of a ContextProvider'
        );
    return context;
}

export {AppContext, useApp};