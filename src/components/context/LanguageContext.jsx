import { createContext, useState } from "react";

export const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {

  const [language, setLanguage] = useState(true)

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