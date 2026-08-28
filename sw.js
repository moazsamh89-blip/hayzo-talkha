// Service Worker with Cache-Busting and Auto-Cleanup
const CACHE_NAME = 'hayzo-app-v3';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Always fetch directly from network for JS/CSS/module assets
  if (event.request.url.includes('/assets/')) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// Push Notification Handler
self.addEventListener('push', (event) => {
  if (!event.data) return;
  try {
    const payload = event.data.json();
    const notificationTitle = payload.notification?.title || payload.data?.title || 'إشعار جديد من تطبيق Hayzo';
    const notificationOptions = {
      body: payload.notification?.body || payload.data?.body || payload.data?.message || '',
      icon: './photo/photo3.png',
      badge: './photo/photo3.png',
      dir: 'rtl',
      lang: 'ar',
      vibrate: [200, 100, 200],
      data: payload.data || {}
    };
    event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
  } catch (e) {
    const text = event.data.text();
    event.waitUntil(self.registration.showNotification('إشعار من تطبيق Hayzo', {
      body: text,
      icon: './photo/photo3.png',
      badge: './photo/photo3.png'
    }));
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || './';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
