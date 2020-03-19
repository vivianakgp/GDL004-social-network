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
                   controler.init.contolerAuthEmailAndPassword();                    
               break;
            case '#/createAccount':
                sectionMain.appendChild(components.account());
                break;
            case '#/blog':
               // sectionMain.appendChild(components.blog());
                break;
                default:
                 sectionMain.appendChild(components.nonExistent());
                   //sectionMain.appendChild(components.login());
       }
    },

//mandar llamar al modelo con su metodo authEmailAndPassword 
    //esto es necesrio para enlasar el modelo con la vista 
     init : {
        contolerAuthEmailAndPassword: ( ) => vista.init.signUp(),
       

     },

     authEmailAndPassword: (infoUser ) => {
        //mandar info a modelo para hacer peticion a firebase
        modelo.authEmailAndPassword(infoUser);
        //promesa.then (muestra #/blog)
      }

};