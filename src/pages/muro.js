import { controler } from '../controlador/controler.js';
export default ( ) => {

    const viewMuro = document.createElement("div");
    viewMuro.setAttribute("class" , "viewMuro");
    viewMuro.setAttribute("id" , "viewMuro");

    const title = document.createElement("h1");
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
   

    return viewMuro


}