// Ultra-simple test - no imports, just basic JavaScript
console.log('BASIC TEST: Script is running');

document.addEventListener('DOMContentLoaded', () => {
  console.log('BASIC TEST: DOM loaded');
  
  const root = document.getElementById('root');
  if (root) {
    console.log('BASIC TEST: Root found');
    root.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif; background: #f0f0f0; min-height: 100vh;">
        <h1 style="color: #333;">🟢 BASIC TEST SUCCESS</h1>
        <p style="color: #666;">This proves JavaScript is working!</p>
        <p style="color: #666;">Time: ${new Date().toLocaleString()}</p>
      </div>
    `;
  } else {
    console.error('BASIC TEST: Root not found');
  }
});

// Fallback if DOM is already loaded
if (document.readyState === 'loading') {
  console.log('BASIC TEST: Waiting for DOM...');
} else {
  console.log('BASIC TEST: DOM already ready, executing immediately');
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif; background: #e8f4f8;">
        <h1 style="color: #2563eb;">🔵 IMMEDIATE TEST SUCCESS</h1>
        <p>JavaScript executed immediately!</p>
      </div>
    `;
  }
}
