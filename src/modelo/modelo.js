import { controler } from '../controlador/controler.js';


 export const modelo = {
 
  //detectar que usuario esta activo
   observerModel: (user ) => {
     return firebase.auth().onAuthStateChanged(user);
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
    
    },

     //obtiene de la coleccion post los documentos de usuario actual
   getPost:(cb)=>{
     var user = firebase.auth().currentUser.uid;
     //console.log('****MODELO***********'+' '+user+' '+'**************************');
     return firebase.firestore().collection("post").where( 'userId', '==', user).onSnapshot(cb)
    },

    //borra los documentos
   deletePost: (id) => {
      
      firebase.firestore().collection("post").doc(id).delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
    },

    //editar  documentos
    editPostModelo:(newText ,id) => {
      var washingtonRef = firebase.firestore().collection("post").doc(id)
        return washingtonRef.update({
                 texto: newText
             })
     
    },
    //cerrar sesion
   /* iconoLogOut:( )=>{
      return firebase.auth().signOut()
    },*/


   
      
 }








      /*
      .then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    }); */





    
    /*

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
     */