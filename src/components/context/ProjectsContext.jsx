import { createContext, useState } from 'react'

export const ProjectsContext = createContext()

const ProjectsContextProvider = ({ children }) => {

  const [projects, setProjects] = useState([])

  const data = {
    projects,
    setProjects
  }

  return (
    <ProjectsContext.Provider value={data}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsContextProvider