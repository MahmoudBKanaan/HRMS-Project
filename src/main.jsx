import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "tailwindcss";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider} from "/src/AuthContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/hrms-project" >
      <AuthProvider>

        <App />
      
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
