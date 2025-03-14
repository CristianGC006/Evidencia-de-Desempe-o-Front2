import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrincipalPage from './PrincipalPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrincipalPage />
  </StrictMode>,
)
