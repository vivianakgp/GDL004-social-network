import { components ,vista } from '../vista/index.js';
import { modelo } from '../modelo/modelo.js';

export const controler = {
    changeTmp: (hash) => {
        const sectionMain = document.getElementById ('container');
        sectionMain.innerHTML = ' ';
        switch (hash) {
            case '#/':
                sectionMain.appendChild(components.home());
                
                break;
            case '#/login':
                sectionMain.appendChild(components.login());
                controler.start.signIn();
                 controler.observerUser();
               break;
            case '#/createAccount':
                sectionMain.appendChild(components.cerateAccount());
                controler.start.signUp();
                break;
            case '#/blog':
                 sectionMain.appendChild(components.blog());
                
                   
                break;
                default:
                 
                 sectionMain.appendChild(components.nonExistent());
                  
       }
    },

     //inicializa las vistas login y registro
     start: {
         signUp: ( ) => vista.signUp(),
         signIn: ( ) => vista.signIn(), 
         
         
    },
     
    singOut: ()=>{
      controler.changeTmp('#/');
    },
     
     observerUser:( )=>{
          modelo.observerModel((user)=>{
            if(user){
              controler.changeTmp('#/blog');
              //window.location.hash = '#/blog';
              console.log(`${user.uid} ESTE ES EL ID DEL USUARIO DESDE CONTROLER`)
            }else{
            
              controler.changeTmp('#/login');
            }
          });
       },

     obUser:(user)=>{
         return modelo.observerUser(user);
     },

     authEmailAndPassword: (infUser ) => {
        return modelo.authEmailAndPassword(infUser); 
      },

     authExistUser: (infUser) => { 
        return modelo.authExistUser(infUser);
      },

     createPost: (newPostUser)=> {
        return modelo.createPost(newPostUser);
      },
     
     getPost:(cb)=>{
         return modelo.getPost(cb)
      },

      deletePost:( id) =>{
          modelo.deletePost(id );
      },
      editPost:( newText,id )=> {
        return modelo.editPostModelo(newText,id ) 
      },
      /*logOut:( )=>{
       return modelo.LogOutModelo();
      }
*/


    }
    