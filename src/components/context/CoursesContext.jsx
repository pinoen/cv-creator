import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const CoursesContext = createContext()

const CoursesContextProvider = ({ children }) => {

  const [courses, setCourses] = useLocalStorageState([], 'courses')

  const data = {
    courses,
    setCourses
  }

  return (
    <CoursesContext.Provider value={data}>
      {children}
    </CoursesContext.Provider>
  )
}

export default CoursesContextProvider