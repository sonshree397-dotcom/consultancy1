import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { SuccessStoriesProvider } from './context/SuccessStoriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SuccessStoriesProvider>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(2, 6, 23, 0.92)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.12)',
            },
          }}
        />
      </SuccessStoriesProvider>
    </BrowserRouter>
  </StrictMode>,
)
