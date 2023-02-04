import { createContext, useState } from "react";

export const ExperienceContext = createContext()

const ExperienceContextProvider = ({ children }) => {

  const [experience, setExperience] = useState([])

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