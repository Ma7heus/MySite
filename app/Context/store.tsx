'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    theme: string
}

interface ContextProps { 
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<ContextProps>({
    theme: '',
    setTheme: (): string => ''
})

export const GlobalContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    
    return (
        <GlobalContext.Provider value={{ theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);