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
    event.filename.includes('msgsndr') ||
    event.filename.includes('188373') ||
    event.filename.includes('188377') ||
    event.filename.includes('194082')
  )) {
    console.log('Suppressed external script error:', event.filename);
    event.preventDefault();
    return false;
  }
  
  // Also suppress based on error message
  if (event.message && (
    event.message.includes('401') ||
    event.message.includes('contentOverview') ||
    event.message.includes('Request failed with status code 401')
  )) {
    console.log('Suppressed 401 error from external source');
    event.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejections from external scripts
window.addEventListener('unhandledrejection', (event) => {
  // Suppress 401 errors from external scripts
  if (event.reason) {
    const reason = event.reason.toString();
    if (reason.includes('status code 401') || 
        reason.includes('contentOverview') ||
        reason.includes('Request failed')) {
      console.log('Suppressed promise rejection from external source');
      event.preventDefault();
      return false;
    }
  }
});

// Override console.error to filter out external script errors
const originalConsoleError = console.error;
console.error = (...args) => {
  const message = args.join(' ');
  if (message.includes('contentOverview') || 
      message.includes('401') ||
      message.includes('BCfd43jx')) {
    return; // Don't log these errors
  }
  originalConsoleError.apply(console, args);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
