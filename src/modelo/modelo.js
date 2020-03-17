//conecta con la base de datos
//aqui mandar los datos a firebase

 export const modelo = {

  authEmailAndPassword: function authUser(infoUser){
      //console.log('sii soy modelo')
    firebase.auth().createUserWithEmailAndPassword(infoUser.email , infoUser.pass)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        alert(errorCode);
        var errorMessage = error.message;
        // ...
      })
      

   }
 }