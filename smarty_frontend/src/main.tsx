import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main.tsx
import './index.css'        // Tailwind first
import '@/App.css'   // Custom styles second
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
