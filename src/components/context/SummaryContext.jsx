import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const SummaryContext = createContext()

const SummaryContextProvider = ({ children }) => {

  const [summary, setSummary] = useLocalStorageState("", "summary")

  const data = {
    summary,
    setSummary
  }

  return (
    <SummaryContext.Provider value={data}>
      {children}
    </SummaryContext.Provider>
  )
}

export default SummaryContextProvider