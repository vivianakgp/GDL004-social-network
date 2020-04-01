import { controler } from '../controlador/controler.js';


 export const modelo = {

  authEmailAndPassword: function authUser(infUser ){
   return firebase.auth().createUserWithEmailAndPassword(infUser.email , infUser.pass)
     },

     authExistUser: (infUser ) => {
      return firebase.auth().signInWithEmailAndPassword(infUser.email, infUser.pass)  
     },

    
  //instala observador de objeto para : escuchar de Auth recibe notificaciones 
  //cuando sucede algo importante en el objeto de Auth
  //se va ejecutar en vista de login
  observer:( ) => {
    firebase.auth().onAuthStateChanged(function(infUser) {
     if (infUser) {
       //retornar una promesa 

      // User is signed in.
      console.log('existe usuario "activo"');
     } else {
      // No user is signed in.
      console.log('no existe usuario activo');
     }
   });
  },
     
     
     createPost: (newPostUser) => {
       console.log(newPostUser);
       // Add a new document with a generated id.
       firebase.firestore().collection("posts").add({
        texto: newPostUser,
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

     },
    createUserColletion:(infUser )=> {
      // Add a new document with a generated id.
      firebase.firestore().collection("users").add({
        name:infUser.name,
        email:infUser.email,
        password:infUser.pass,
        id:"aqui id"
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

     },
    creatuser:( )=> {
    } 

      // Add a second document with a generated ID.
     /* db.collection("post").add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      })
      .then(function(docRef) {
         console.log("Document written with ID: ", docRef.id);
      })
       .catch(function(error) {
        console.error("Error adding document: ", error);
      });




    //visor
      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
    */
     
     


    

         
 }





  


 /*
firebase.auth().onAuthStateChanged(function(infUser ) {
          if (infUser ) {
            // User is signed in.
            console.log('existe el usuario')
          } else {
            // No user is signed in.
            console.log('no existe el usuario')
          }
        });

  */






          /* authEmailAndPassword: async function authUser(infoUser){
     
    try {
    await firebase.auth().createUserWithEmailAndPassword(infoUser.email , infoUser.pass);
    controler.changeTmp('#/');
    //console.log('pasara al blog')
    }
    catch(error) {
        // Handle Errors here.
        var errorCode = error.code;
        alert(errorCode);
        var errorMessage = error.message;
        // ...
     }
     
   
   } */


/*
 observerUser: ( infoUser) => {
      firebase.auth().onAuthStateChanged(function(infUser) {
        if (user) {
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });

     }
 */

   