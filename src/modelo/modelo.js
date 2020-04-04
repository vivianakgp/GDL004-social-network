import { controler } from '../controlador/controler.js';


 export const modelo = {
 

  observerModel: ( ) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         controler.changeTmp('#/blog');
         var user = firebase.auth().currentUser.uid;
          console.log(user);

          } else {
          // No user is signed in.
          console.log('no user is signed in')
           }
    });
  },
     
  
  authEmailAndPassword: function authUser(infUser ){
   return firebase.auth().createUserWithEmailAndPassword(infUser.email , infUser.pass);
   
     },

     authExistUser: (infUser ) => {
      return firebase.auth().signInWithEmailAndPassword(infUser.email, infUser.pass)  
     },

    
  //instala observador de objeto para : escuchar de Auth recibe notificaciones 
  //cuando sucede algo importante en el objeto de Auth
  //se va ejecutar en vista de login

     
     createPost: (newPostUser) => {
       console.log(newPostUser);
       // Add a new document with a generated id.

      return firebase.firestore().collection("posts").add({
        texto: newPostUser,
        userId: firebase.auth().currentUser.uid
      })
      

     },

     getPost:( )=>{

      return firebase.firestore().collection("posts").get()
    },
    
    getUserP:()=>{
     var user = firebase.auth().currentUser;
     var name, email, photoUrl, uid, emailVerified;
     
     if (user != null) {
       name = user.displayName;
       email = user.email;
       photoUrl = user.photoURL;
       emailVerified = user.emailVerified;
       uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                        // this value to authenticate with your backend server, if
                        // you have one. Use User.getToken() instead.
     }
    
    },

      
 }

     /* CREATE POST
     .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      }); */


      /*OBSERVER
       firebase.auth().onAuthStateChanged(function(infUser) {
     if (infUser) {

       //retornar una promesa 
       //cb(infUser)
      // User is signed in.
     
     } else {
      // No user is signed in.
       console.log('no existe usuario activo');
     }
   })//then(()=>{ si si existe user entonces muestrame el id del user})
       */