import { Children, createContext } from "react";



export const SortContext = createContext();
export const SortContextProvider = ({children}) => {
    return (
        <SortContext.Provider>{children}</SortContext.Provider>
    )
}