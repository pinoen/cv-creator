import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const EducationContext = createContext()

const EducationContextProvider = ({ children }) => {

  const [education, setEducation] = useLocalStorageState([], 'education')

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


