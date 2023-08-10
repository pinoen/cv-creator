import { createContext } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

export const ProjectsContext = createContext()

const ProjectsContextProvider = ({ children }) => {

  const [projects, setProjects] = useLocalStorageState([], 'projects')

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