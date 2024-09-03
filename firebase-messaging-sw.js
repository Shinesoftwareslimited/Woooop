importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDcGQ5cdIPDRFz-85rFjlJ3lfsyJhPJ9YE",
  authDomain: "newseepie.firebaseapp.com",
  projectId: "newseepie",
  storageBucket: "newseepie.appspot.com",
  messagingSenderId: "626517872097",
  appId: "1:626517872097:web:392aca77d1769e0aae96a0",
  measurementId: "G-CXXBF7LYL9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
