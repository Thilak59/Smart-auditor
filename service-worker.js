// Simple service worker for Smart Auditor
// No caching logic – just activates and does nothing else.

self.addEventListener("install", (event) => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Take control of pages
  event.waitUntil(self.clients.claim());
});

// No fetch handler => browser uses normal network behavior.