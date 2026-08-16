// Service Worker with Cache-Busting and Auto-Cleanup
const CACHE_NAME = 'community-app-v2';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Always fetch fresh network response during dev & active use
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
