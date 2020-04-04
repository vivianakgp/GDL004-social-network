import { controler } from '../controlador/controler.js';
export default ( ) => {

    const viewMuro = document.createElement("div");
    viewMuro.setAttribute("class" , "container");
    viewMuro.setAttribute("id" , "viewMuro");
   
    const divMain = document.createElement("div");
    divMain.setAttribute("class","row");

    const divPerfil = document.createElement("div");
    divPerfil.setAttribute("class","col align-self-start");
    

    const divPost = document.createElement("div");
    divPost.setAttribute("class","col align-self-center main-section");
     
    const divForm = document.createElement("form");
    divForm.setAttribute("class","form-group");

    const textArea = document.createElement("textarea");
    textArea.setAttribute("id" , "textArea");
    textArea.setAttribute("placeholder", "¿Que estas pensando? 🤔");
    textArea.setAttribute("class","TxtArea");
  
    const btn_post = document.createElement("input");
    btn_post.setAttribute("type", "submit");
    btn_post.setAttribute("value", "publicar");
    btn_post.setAttribute("id", "btn_post");
    btn_post.setAttribute("class", "btn btn-danger");
    


    const divNotice = document.createElement("div");
    divNotice.setAttribute("class","col align-self-end");
    




    btn_post.disabled = true;
    textArea.addEventListener('keyup',( ) => {
      if (textArea.value !==''){
        btn_post.disabled = false;            
      }else{
        btn_post.disabled = true; 
      }
    });

    divForm.addEventListener('submit', (e)=> {
      //console.log(textArea.value)
      e.preventDefault()

      const newPostUser = textArea.value;
      divForm.reset();
      controler.createPost(newPostUser) //luego muestrame ese post creado 
      .then( ( )=>{
          return controler.getPost()
      })
      .then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            
              console.log(`${doc.data().text} => ${doc.data().userId}`);
             // ${doc.id} 

         });
      })
      .catch( ( err) =>{
        alert(err)
      }) 


      
    });


    viewMuro.appendChild(divMain);
    divMain.appendChild(divPerfil);
    divMain.appendChild(divPost);
    divPost.appendChild(divForm);
    divForm.appendChild(textArea);
    divForm.appendChild(btn_post);
    divMain.appendChild(divNotice);
    

    return viewMuro


}