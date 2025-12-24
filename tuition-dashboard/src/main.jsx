import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//tailwind import
import './index.css'

//Main App import
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
