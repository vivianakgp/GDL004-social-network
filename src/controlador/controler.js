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


     start: {
         signUp: ( ) => vista.signUp(),
         signIn: ( ) => vista.signIn(),        
         
    },
     
     observerUser:( )=>{
         modelo.observerModel();
       },

     authEmailAndPassword: (infUser ) => {
        //mandar info a modelo para hacer peticion a firebase
        return modelo.authEmailAndPassword(infUser);
        
      },
      authExistUser: (infUser) => {
        
       return modelo.authExistUser(infUser);
       

      },
     

      createPost: (newPostUser)=> {
        
         return modelo.createPost(newPostUser);
      },
     
      getPost:( )=>{
          return modelo.getPost()
      }



    }