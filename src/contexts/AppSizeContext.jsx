import { createContext, useContext, useState } from "react"

export const AppSizeContext = createContext({})

const userPreferenceIsLarge = JSON.parse(
  localStorage.getItem("USER_PREFERENCE_IS_LARGE")
)

export const AppSizeContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(userPreferenceIsLarge || false)

  return (
    <AppSizeContext.Provider value={{ isLarge, setIsLarge }}>
      {children}
    </AppSizeContext.Provider>
  )
}

export const useAppSizeContext = () => useContext(AppSizeContext)
