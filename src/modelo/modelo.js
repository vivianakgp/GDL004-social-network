import { controler } from '../controlador/controler.js';


 export const modelo = {
  authEmailAndPassword: function authUser(infoUser ){
    firebase.auth().createUserWithEmailAndPassword(infoUser.email , infoUser.pass)
    .then(( ) => {
      //pasara al blog
      controler.changeTmp('#/');

     })
     .catch((error)=> {
       alert(error);
       })
     }
   
   
         
 }





  











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