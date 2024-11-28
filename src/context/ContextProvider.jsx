import { useState } from "react"
import { AppContext, useApp } from "./AppContext"
const ContextProvider = ({children}) => {
    const [appUser, setAppUser] = useState(null);
  return (
    <AppContext.Provider value={{appUser, setAppUser}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider