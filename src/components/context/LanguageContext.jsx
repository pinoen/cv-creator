import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {

  const [language, setLanguage] = useLocalStorageState(true, 'language')

  const data = {
    language,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={data} >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider