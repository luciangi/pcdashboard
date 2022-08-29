import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App/App"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
import "./index.css"

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <div className="wrapper">
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </div>
    </React.StrictMode>
  )
