import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { ThemePorvider } from './Context/ThemeContext.jsx'



createRoot(document.getElementById('root')).render(
   
  <StrictMode>
    <BrowserRouter>
        <ThemePorvider>
                  <App />
        </ThemePorvider>
    </BrowserRouter>
   </StrictMode>,

)
