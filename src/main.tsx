
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

// Wait for DOM to be ready
function initializeApp() {
  console.log('🚀 Initializing React app...');
  console.log('Document ready state:', document.readyState);
  
  const rootElement = document.getElementById("root");
  console.log('Root element found:', !!rootElement);
  console.log('Root element:', rootElement);
  
  if (!rootElement) {
    console.error('❌ Root element not found!');
    // Try to create the root element if it doesn't exist
    const newRoot = document.createElement('div');
    newRoot.id = 'root';
    document.body.appendChild(newRoot);
    console.log('✅ Created new root element');
    return initializeApp(); // Try again
  }

  console.log('✅ Root element found, creating React root...');
  const root = createRoot(rootElement);

  console.log('🎯 Rendering React app...');
  root.render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );

  console.log('🎉 React app rendered successfully!');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
