import { createContext, useState } from "react";

export const SkillContext = createContext()

const SkillContextProvider = ({ children }) => {

  const [skills, setSkills] = useState([])

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