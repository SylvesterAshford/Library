import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeContextProvider } from './Contexts/ThemeContext'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
)
