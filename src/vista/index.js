import Home from '../pages/home.js';
import Login from '../pages/login.js';
import CreateAccount from '../pages/createAccount.js';
import different from '../pages/404.js'
import { controler } from '../controlador/controler.js';
export { components , vista };

  const components = {
    home: Home,
    login: Login,
    account: CreateAccount,
    nonExistent: different

};

const  vista = {
 init: {
 signUp : () => {
 const formSignUp = document.getElementById('formSignUp');

 formSignUp.addEventListener('submit', function(event){
      event.preventDefault();
  const infUser = {
      email:formSignUp.email.value,
      pass:formSignUp.password.value
  }
  formSignUp.reset();  
if( infUser.email !== '' && infUser.pass.length >= 7 ){
    controler.authEmailAndPassword(infUser);
    
}else{
    alert('please check your email or password');
}
 
});
 }

 }

 }

