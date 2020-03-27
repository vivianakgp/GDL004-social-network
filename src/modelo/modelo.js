import { controler } from '../controlador/controler.js';


 export const modelo = {

  authEmailAndPassword: function authUser(infUser ){
    //console.log(infUser.pass ,infUser.confirmPass);
    firebase.auth().createUserWithEmailAndPassword(infUser.email , infUser.pass)
    .then(( ) => {
       
      controler.changeTmp('#/login');
  
     })
     .catch((error)=> {
       alert(error);
       })
     },

     authExistUser: (infUser ) => {
      firebase.auth().signInWithEmailAndPassword(infUser.email, infUser.pass)
      .then(() => { 
        controler.changeTmp('#/blog')
      })
      .catch(( ) => {
        alert('no tienes cuenta aun')
      });
           
   
        
     },

    
  //instala observador de objeto para : escuchar de Auth recibe notificaciones 
  //cuando sucede algo importante en el objeto de Auth
  //se va ejecutar en vista de login
  observer:( ) => {
    firebase.auth().onAuthStateChanged(function(infUser) {
     if (infUser) {
      // User is signed in.
      console.log('existe usuario activo');
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

     }

    

         
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

   