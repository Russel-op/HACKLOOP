import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Resent from './Resent.jsx'

createRoot(document.getElementById('rrroot')).render(
  <StrictMode>
    <Resent />
  </StrictMode>,
)