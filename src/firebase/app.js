//este achivo va contener la inicializacion de firebase y el observador 
//exportarla a  main?


export const firebase={
      // Your web app's Firebase configuration
  initFirebase:() =>{ 
    var firebaseConfig = {
    apiKey: "AIzaSyB5YV6BR61oHUh-0TIlkDg1n88ls7B34-M",
    authDomain: "educa-7cd01.firebaseapp.com",
    databaseURL: "https://educa-7cd01.firebaseio.com",
    projectId: "educa-7cd01",
    storageBucket: "educa-7cd01.appspot.com",
    messagingSenderId: "343958493042",
    appId: "1:343958493042:web:c7c1310f30dc34968b2feb",
    measurementId: "G-SBMYS2C1FJ"
  };
  // Initialize Firebase
  let data = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
},


  // Initialize Cloud Firestore through Firebase
 //firebase.initializeApp({
//  apiKey: '### FIREBASE API KEY ###',
//    authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: '### CLOUD FIRESTORE PROJECT ID ###'
//  });

// var db = firebase.firestore();
}