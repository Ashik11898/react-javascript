import React,{useContext, useState} from 'react'
import { createContext } from "react";


export const Authcontext = createContext(null)

const AuthProvider = ({children}) => {
  const [user]=useState(true)    
  return <Authcontext.Provider value={user}>{children}</Authcontext.Provider>
}


export const useAuth =()=>{
    const context = useContext(Authcontext)
    if(context === null) throw new Error("please login ")
    return context    
}

export default AuthProvider