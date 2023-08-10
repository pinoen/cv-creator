import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const TaskContext = createContext()

const TaskContextProvider = ({ children }) => {

  const [task, setTask] = useLocalStorageState([], 'tasks')

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