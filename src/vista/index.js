import Home from '../pages/home.js';
import Login from '../pages/login.js';
import CreateAccount from '../pages/createAccount.js';
import Blog  from '../pages/muro.js';
import different from '../pages/404.js';
import { controler } from '../controlador/controler.js';
//import { modelo } from '../modelo/modelo.js';
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
     formSignUp.addEventListener('submit' , (e ) => {
       e.preventDefault();
      const infUser = {
        name:formSignUp.name.value,
        email:formSignUp.email.value,
        pass:formSignUp.password.value,
        confirmPass:formSignUp.confirmPass.value
        
      }
      formSignUp.reset();
      console.log(infUser.name);
      if( infUser.name == '' ){
        alert('please fill out all a fields');       
      }else if(infUser.confirmPass !== infUser.pass){
        alert(' Revisa tu email  o contraseña');
      } else {
        return controler.authEmailAndPassword(infUser)
        .then(( ) => {
          controler.changeTmp('#/login');
          console.log(' se creo nueva cuenta  ')
           //window.location.hash = '#/login';        
        })
        .catch((error)=> {
          alert(error);
          }) 
      }
      });
  },

  signIn : () => {
      const formSignIn = document.getElementById('form');
      formSignIn.addEventListener("submit",( e)=> {
        e.preventDefault();
        const infUser = {
          email : formSignIn.email.value,
          pass : formSignIn.pass.value
        }
        formSignIn.reset();
        if( infUser.email !== '' && infUser.pass.length < 6 ){
          alert('La contraseña debe ser mayor a 6 digitos')
        } else if ( infUser.email !== '' && infUser.pass.length >= 6 ){
          return controler.authExistUser(infUser)
          .then(() => { 
            location.hash = '#/blog'
            controler.changeTmp('#/blog');
          
          })
          .catch(( )=>{
            alert('Verifica que tu Email o Password sean correctos Si no tienes cuenta crea una  para acceder');
          })  
        }
      })
  },
}

