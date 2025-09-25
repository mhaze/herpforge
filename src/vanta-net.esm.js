// src/vanta-net.esm.js
// Vanta.NET with ES Module THREE to avoid deprecation warnings.
//
// What this does:
// - Imports THREE as an ES module from esm.sh (no deprecated build/three.min.js)
// - Exposes it to VANTA via window.THREE
// - Dynamically loads VANTA.NET (UMD) and initializes on #front-hero
// - Same settings you provided; HMR-safe for Vite

const VANTA_SETTINGS = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff2d00,
  backgroundColor: 0x0
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

let vantaInstance = null;

async function initVanta() {
  // Import THREE as ESM and expose globally for Vanta
  const THREE = await import('https://esm.sh/three@0.155.0');
  // Some CDNs serve a default export; normalize
  const THREE_NS = THREE.default ?? THREE;
  // Bind to global for Vanta UMD
  window.THREE = THREE_NS;

  // Load Vanta UMD (expects window.THREE)
  if (!window.VANTA || !window.VANTA.NET) {
    await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
  }

  const el = document.querySelector('#front-hero') || document.body;
  if (vantaInstance || !el) return;

  vantaInstance = window.VANTA.NET({
    el,
    ...VANTA_SETTINGS
  });

  // Resize hook
  window.addEventListener('resize', () => {
    try { vantaInstance && vantaInstance.resize(); } catch (e) { }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVanta);
} else {
  initVanta();
}

// HMR safety
if (import.meta && import.meta.hot) {
  import.meta.hot.dispose(() => {
    try { vantaInstance && vantaInstance.destroy && vantaInstance.destroy(); } catch (e) { }
    vantaInstance = null;
  });
}
