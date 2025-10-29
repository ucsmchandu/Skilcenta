import ReactGA from "react-ga4"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactGA.initialize("G-PJT34JBFN4");

ReactGA.send("pageview");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
