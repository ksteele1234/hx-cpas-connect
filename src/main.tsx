import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

// Global error handling for external script errors
window.addEventListener('error', (event) => {
  // Suppress errors from external scripts that we don't control
  if (event.filename && (
    event.filename.includes('contentOverview') ||
    event.filename.includes('BCfd43jx') ||
    event.filename.includes('leadconnectorhq') ||
    event.filename.includes('msgsndr')
  )) {
    event.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejections from external scripts
window.addEventListener('unhandledrejection', (event) => {
  // Suppress 401 errors from external scripts
  if (event.reason && event.reason.message && 
      event.reason.message.includes('status code 401')) {
    event.preventDefault();
    return false;
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
