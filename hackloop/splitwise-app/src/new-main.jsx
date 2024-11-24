import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './Index.jsx'

createRoot(document.getElementById('rroot')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)