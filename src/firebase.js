import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAuCt9ThQKgVXn9ZD515NPVhNEOHt2ONS4",
    authDomain: "data-stock-app.firebaseapp.com",
    databaseURL: "https://data-stock-app.firebaseio.com",
    projectId: "data-stock-app",
    storageBucket: "data-stock-app.appspot.com",
    messagingSenderId: "692773553782"
  };
  firebase.initializeApp(config);