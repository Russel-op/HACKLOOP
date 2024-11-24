import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Split from './split.jsx'

createRoot(document.getElementById('rroots')).render(
  <StrictMode>
    <Split />
  </StrictMode>,
)