// Firebase Cloud Messaging Service Worker for background notifications
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyBXFWHjDblYwgVzpSvQdeD5Lpo0G5dSCJ0",
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
    icon: payload.notification?.icon || '/vite.svg',
    data: payload.data || {},
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
