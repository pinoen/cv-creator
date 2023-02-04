import { createContext, useState } from "react";

export const TaskContext = createContext()

const TaskContextProvider = ({ children }) => {

  const [task, setTask] = useState([])

  const data = {
    task,
    setTask
  }

  return (
    <TaskContext.Provider value={data}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider