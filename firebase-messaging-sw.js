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
  const notificationTitle = payload.notification?.title || 'إشعار جديد من مجتمع طلخا';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || '',
    icon: payload.notification?.icon || '/photo/photo3.png',
    data: payload.data || {},
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
