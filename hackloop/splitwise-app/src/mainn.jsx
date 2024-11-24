import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './dashboard.jsx'

createRoot(document.getElementById('roots')).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)