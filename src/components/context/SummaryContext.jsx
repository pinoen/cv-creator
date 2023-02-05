import { createContext, useState } from "react";

export const SummaryContext = createContext()

const SummaryContextProvider = ({ children }) => {

  const [summary, setSummary] = useState('')

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