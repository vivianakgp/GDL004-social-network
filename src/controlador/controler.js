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
                                 
               break;
            case '#/createAccount':
                sectionMain.appendChild(components.cerateAccount());
                controler.start.signUp();
                break;
            case '#/blog':
                 sectionMain.appendChild(components.blog());
                 //vista.createPost();
                break;
                default:
                    
                 sectionMain.appendChild(components.nonExistent());
                  
       }
    },

//mandar llamar al modelo con su metodo authEmailAndPassword 
    //esto es necesrio para enlasar el modelo con la vista 


     start: {
         signUp: ( ) => vista.signUp(),
         signIn: ( ) => vista.signIn()
    },

     authEmailAndPassword: (infUser ) => {
        //mandar info a modelo para hacer peticion a firebase
        modelo.authEmailAndPassword(infUser);
        
      },
      authExistUser: (infUser) => {
       modelo.authExistUser(infUser);
      }

    //   createPost: (infPost)=> {
    //       modelo.cratePost(infPost);
    //   }

};