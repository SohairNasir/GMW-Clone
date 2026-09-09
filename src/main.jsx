import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { ThemePorvider } from './Context/ThemeContext.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



createRoot(document.getElementById('root')).render(
   
  <StrictMode>
    <BrowserRouter>
        <ThemePorvider>
          < LocalizationProvider dateAdapter={AdapterDayjs}>
                  <App />
          </ LocalizationProvider>
        </ThemePorvider>
    </BrowserRouter>
   </StrictMode>,

)
