// Firebase Cloud Messaging Service Worker for background notifications
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const getSwApiKey = () => {
  try {
    return atob('QUl6YVN5QlhGV0hqRGJsWXdnVnpwU3ZRZGVENUxwbzBHNWRTQ0ow');
  } catch {
    return '';
  }
};

// Initialize Firebase in the service worker
try {
  firebase.initializeApp({
    apiKey: getSwApiKey(),
    authDomain: "hayzo-talkha.firebaseapp.com",
    projectId: "hayzo-talkha",
    storageBucket: "hayzo-talkha.firebasestorage.app",
    messagingSenderId: "360958434319",
    appId: "1:360958434319:web:d8a4d30a58a7c77ae9977a"
  });

  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message:', payload);
    const notificationTitle = payload.notification?.title || payload.data?.title || 'إشعار جديد من تطبيق Hayzo';
    const notificationOptions = {
      body: payload.notification?.body || payload.data?.body || payload.data?.message || '',
      icon: './photo/photo3.png',
      badge: './photo/photo3.png',
      dir: 'rtl',
      lang: 'ar',
      vibrate: [200, 100, 200],
      data: payload.data || {},
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
} catch (e) {
  console.warn('Firebase SW init notice:', e);
}

// Raw push event fallback for standard Web Push
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

// Focus or open window on notification click
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
