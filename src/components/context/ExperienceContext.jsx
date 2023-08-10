import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const ExperienceContext = createContext()

const ExperienceContextProvider = ({ children }) => {

  const [experience, setExperience] = useLocalStorageState([], 'experience')

  const data = {
    experience,
    setExperience
  }

  return (
    <ExperienceContext.Provider value={data}>
      {children}
    </ExperienceContext.Provider>
  )
}

export default ExperienceContextProvider