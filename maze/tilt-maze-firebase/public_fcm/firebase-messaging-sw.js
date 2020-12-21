importScripts('/__/firebase/8.2.0/firebase-app.js');
importScripts('/__/firebase/8.2.0/firebase-messaging.js');
importScripts('/__/firebase/init.js');

const messaging = firebase.messaging();
// firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
                                     notificationOptions);
});
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon
//   };
//   return self.registration.showNotification(notificationTitle,notificationOptions);
// });
