import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const HeaderContext = createContext()

const HeaderContextProvider = ({ children }) => {


  const [user, setUser] = useLocalStorageState([], 'header')

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