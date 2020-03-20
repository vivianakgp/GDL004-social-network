export default ( ) => {

    const viewMuro = document.createElement("div");
    viewMuro.setAttribute("class" , "viewMuro");
    viewMuro.setAttribute("id" , "viewMuro");

    const divPost = document.createElement("form");
    divPost.setAttribute("id" , "divPost")
   
    const textArea = document.createElement("textarea");
    textArea.setAttribute("name" , "textArea");
      
    const btn_post = document.createElement("input");
    btn_post.setAttribute("type", "submit");
    btn_post.setAttribute("value", "post");
    
    
    divPost.appendChild(textArea);
    divPost.appendChild(btn_post);
    viewMuro.appendChild(divPost);
    




    return viewMuro


}