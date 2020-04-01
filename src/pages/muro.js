import { controler } from '../controlador/controler.js';
export default ( ) => {

 /* <div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
*/
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
      controler.createPost(newPostUser)
      .then()
      
    });


    viewMuro.appendChild(divMain);
    divMain.appendChild(divPerfil);
    divMain.appendChild(divPost);
    divPost.appendChild(divForm);
    divForm.appendChild(textArea);
    divForm.appendChild(btn_post);
    divMain.appendChild(divNotice);







    /*const title = document.createElement("h1");
    title.innerHTML="🚥 en construccion 🚧 ";
    viewMuro.appendChild(title);

    const divPost = document.createElement("form");
    divPost.setAttribute("id" , "divPost")
   
    const textArea = document.createElement("textarea");
    textArea.setAttribute("id" , "textArea");
    textArea.setAttribute("placeholder", "¿Que estas pensando? 🤔")
      
    const btn_post = document.createElement("input");
    btn_post.setAttribute("type", "submit");
    btn_post.setAttribute("value", "publicar");
    btn_post.setAttribute("id", "btn_post");
    
    
    divPost.appendChild(textArea);
    divPost.appendChild(btn_post);
    viewMuro.appendChild(divPost);
    
    
    btn_post.disabled = true;
    textArea.addEventListener('keyup',( ) => {
      if (textArea.value !==''){
        btn_post.disabled = false;            
      }else{
        btn_post.disabled = true; 
      }
    });

    divPost.addEventListener('submit', (e)=> {
        //console.log(textArea.value)
        e.preventDefault()

        const newPostUser = textArea.value;
        controler.createPost(newPostUser);
        divPost.reset();
      });
   */

    return viewMuro


}