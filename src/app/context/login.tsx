'use client'

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"


interface IUser {
    usuario: string,
    setUsuario: Dispatch<SetStateAction<string>>

}

const user : IUser ={
    usuario: "",
    setUsuario: (): string => '',

}

const GlobalContext = createContext<IUser>(user)
 
export const GlobalContextProvider : React.FC<PropsWithChildren> = ({ children }) => {
    const [usuario, setUsuario] = useState('')

    return(
        <GlobalContext.Provider value={{usuario, setUsuario}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)