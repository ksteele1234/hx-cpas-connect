
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

console.log('🚀 Starting React app...');
console.log('Root element:', document.getElementById("root"));
console.log('📄 Document scripts:', Array.from(document.scripts).map(s => ({
  src: s.src, 
  type: s.type, 
  textLength: s.textContent?.length || 0,
  isBootstrap: s.type === 'application/json' && s.textContent && s.textContent.length > 100
})));
console.log('🔍 Checking for bootstrap data...');

// Check for any window properties that might contain bootstrap data
console.log('🪟 Window properties:', Object.keys(window).filter(k => 
  k.includes('bootstrap') || k.includes('lovable') || k.includes('data')
));

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
