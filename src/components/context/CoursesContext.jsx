import { createContext, useState } from "react";

export const CoursesContext = createContext()

const CoursesContextProvider = ({ children }) => {

  const [courses, setCourses] = useState([])

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