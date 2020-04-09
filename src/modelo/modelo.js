import { controler } from '../controlador/controler.js';


 export const modelo = {
 
  //detectar que usuario esta activo
  observerModel: ( ) => {
     firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         // controler.changeTmp('#/blog');
        // var user = firebase.auth().currentUser.uid;
          } else {
          // No user is signed in.
          controler.changeTmp('#/login')
           }
     });
   },
     observerUser:(user)=>{
     return firebase.auth().onAuthStateChanged(user)
     },
     //registra nuevos usuarios
     authEmailAndPassword: function authUser(infUser ){
       return firebase.auth().createUserWithEmailAndPassword(infUser.email , infUser.pass)
       .then((res) => {

         res.user.updateProfile({ displayName: infUser.name})
         return res;
       });
   
     },
    //autentifica si el usuario esta registrado
     authExistUser: (infUser ) => {
      return firebase.auth().signInWithEmailAndPassword(infUser.email, infUser.pass)  
     },
    //crea documentos en la coleccion post
     createPost: (newPostUser) => {
        //console.log(newPostUser);
       return firebase.firestore().collection("post").add({
        texto: newPostUser,
        userId: firebase.auth().currentUser.uid
      });
     
     /* return firebase.firestore().doc("posts/useId").set({
        texto: newPostUser,
        userId: firebase.auth().currentUser.uid
      })*/

     },
     //obtiene de la coleccion post los documentos de usuario actual
     getPost:(cb)=>{
     // return firebase.firestore().doc("posts/useId").get()
     var user = firebase.auth().currentUser.uid;
     console.log('***************'+' '+user+' '+'**************************');
     return firebase.firestore().collection("post").where( 'userId', '==', user).onSnapshot(cb)
     },
    //borra los documentos
    deletePost: (id) => {
      
      firebase.firestore().collection("post").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    },
    
    /*editPostModelo:( id) => {
     
      var washingtonRef = firebase.firestore().collection("post").doc(id);
      var nweText = document.getElementById('textArea').value 
      // Set the "capital" field of the city 'DC'
      return washingtonRef.update({
          text: nweText
      })
     
    },*/
    getUser:()=>{
      var user = firebase.auth().currentUser;
       var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          uid = user.uid;
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




      /*
      .then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    }); */