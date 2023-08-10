import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const SkillContext = createContext()

const SkillContextProvider = ({ children }) => {

  const [skills, setSkills] = useLocalStorageState([], 'skills')

  const data = {
    skills,
    setSkills
  }

  return (
    <SkillContext.Provider value={data}>
      {children}
    </SkillContext.Provider>
  )
}

export default SkillContextProvider