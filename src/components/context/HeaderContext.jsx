import { createContext, useState } from "react";

export const HeaderContext = createContext()

const HeaderContextProvider = ({ children }) => {

  const [user, setUser] = useState([])

  const data = {
    user,
    setUser
  }

  return (
    <HeaderContext.Provider value={data}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContextProvider