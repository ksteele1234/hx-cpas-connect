import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

console.log('🚀 Starting React app...');
console.log('Root element:', document.getElementById("root"));

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('❌ Root element not found!');
  throw new Error('Root element not found');
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
