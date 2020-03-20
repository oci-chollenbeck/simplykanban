// importing 7.6.0 version links.
/* eslint-disable */

importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyDOxci98SH4NLJmaCobh8w3DT986meZ8Gs',
  authDomain: 'simplykanban.firebaseapp.com',
  databaseURL: 'https://simplykanban.firebaseio.com',
  projectId: 'simplykanban',
  storageBucket: 'simplykanban.appspot.com',
  messagingSenderId: '103097300308',
  appId: '1:103097300308:web:ab73b4bcf79cfca5f804c1',
  measurementId: 'G-TWPFRYYT5N'
});
const messaging = firebase.messaging();
