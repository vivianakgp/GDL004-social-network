import Home from '../pages/home.js';
import Login from '../pages/login.js';
import CreateAccount from '../pages/createAccount.js';
import Blog  from '../pages/muro.js';
import different from '../pages/404.js'
import { controler } from '../controlador/controler.js';
export { components , vista };

  const components = {
    home: Home,
    login: Login,
    cerateAccount: CreateAccount,
    blog : Blog,
    nonExistent: different

};

const  vista = {
    
  signUp : () => {
    const formSignUp = document.getElementById('formSingUp');
     formSignUp.addEventListener('submit' , (event) => {
       event.preventDefault();
       const infUser = {
         name:formSignUp.name.value,
         email:formSignUp.email.value,
         pass:formSignUp.password.value,
         confirmPass:formSignUp.confirmPass.value
         
       }
       formSignUp.reset();
       
       if( infUser.name == '' ){
        alert('please fill out all a fields');       
       }else if(infUser.confirmPass !== infUser.pass){
         alert('please ckeck your password')
       }else{
        controler.authEmailAndPassword(infUser);
       }
        
       

     })
  },
  signIn : () => {
  const formSignIn = document.getElementById('formSignIn');
  
  formSignIn .addEventListener('submit', function(event){
  event.preventDefault();
  const infUser = {
  email:formSignIn.email.value,
  pass:formSignIn.password.value
  }
  formSignIn.reset();
  if ( infUser.email !== '' && infUser.pass.length >= 7 ){
  controler.authExistUser(infUser);
  }else{
  alert('please check your email or password');
  
  }
  
  });
  
  }



  
 



 }



 


 /*createPost: () => {
  const divPost = document.getElementById('divPost');
 divPost.addEventListener("submit" ,( ) => {
    const yourPost = {
      post: divPost.textArea.value,
    }
      controler.createPost(yourPost);
  })

}

 */   