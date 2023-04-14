import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AppSizeContextProvider } from "./contexts"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppSizeContextProvider>
      <App />
    </AppSizeContextProvider>
  </React.StrictMode>
)
