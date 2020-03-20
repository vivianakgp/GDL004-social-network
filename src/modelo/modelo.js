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
        console.log('si existe user')
      })
      .catch(( ) => {
        console.log('no existe user')
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





  //  createPost: (infoPost ) => {
  //      //mandar la infPost algun maldito lugar en firebase
  //      //peroooo dentro de la sesion de algun ususario

  //  }
   