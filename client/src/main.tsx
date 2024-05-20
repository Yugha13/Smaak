import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider >
    <BrowserRouter>
    <div >
      <App />
    </div>
      <Toaster></Toaster>
    </BrowserRouter>
  </ThemeProvider>
)
