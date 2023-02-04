import { createContext, useState } from "react";

export const EducationContext = createContext()

const EducationContextProvider = ({ children }) => {

  const [education, setEducation] = useState([])

  const data = {
    education,
    setEducation
  }

  return (
    <EducationContext.Provider value={data}>
      {children}
    </EducationContext.Provider>
  )
}

export default EducationContextProvider


