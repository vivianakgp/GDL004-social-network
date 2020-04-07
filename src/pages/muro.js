import { controler } from '../controlador/controler.js';
export default ( ) => {

    const viewMuro = document.createElement("div");
    viewMuro.setAttribute("class" , "container");
    viewMuro.setAttribute("id" , "viewMuro");
   
    const divMain = document.createElement("div");
    divMain.setAttribute("class","row");
    
    const divPerfil = document.createElement("div");//ESTE ES EL DIV PARA EL PERFIL
    divPerfil.setAttribute("class","col align-self-start perfil");

    const divFotoNameEdite = document.createElement('div');
    divFotoNameEdite.setAttribute("class","divFotoNameEdite")

    const divFotoAndName = document.createElement('div');
    divFotoAndName.setAttribute("class","divFotoAndName");

    const userPhoto = document.createElement('img');
    userPhoto.setAttribute("src","./images/defaultUser.png");
    userPhoto.setAttribute("class","userFoto");

    const userName = document.createElement('a');
    controler.obUser(function(user){
      if(user){
        userName.innerHTML = user.displayName;
      }
    } )
    

    const divBtnEdite = document.createElement('div');
    divBtnEdite.setAttribute("class","divBtnEdite")

    const btnEdite = document.createElement('input');
    btnEdite.setAttribute("type","button");
    btnEdite.setAttribute("class","btn btn-warning btn-sm");
    btnEdite.setAttribute("value","... ✐")

    

    const divPost = document.createElement("div");//ESTE ES EL DIV PARA LOS POSTS
    divPost.setAttribute("class","col align-self-center main-section ");
     
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

    const divNotice = document.createElement("div");//ESTE ES EL DIV DE NOTICIAS/OTROS
    divNotice.setAttribute("class","col align-self-end noticeOthers");
    
    //desabilitar el btn publicar
    btn_post.disabled = true;
    textArea.addEventListener('keyup',( ) => {
      if (textArea.value !==''){
        btn_post.disabled = false;            
      }else{
        btn_post.disabled = true; 
      }
    });
    //se añade funcionalidad al  btn publicar 
    divForm.addEventListener('submit', (e)=> {
      //console.log(textArea.value)
      e.preventDefault();
      const newPostUser = textArea.value;
      divForm.reset();
      btn_post.disabled = true;
      return controler.createPost(newPostUser) //el mtodo createPost crea documentos en la coleccion post 
      .then( (docRef )=>{
        //luego de que se guardo el texto en firestore mustrame el texto en nuevo div
        console.log(newPostUser,' '+'promesa resuelta de createPost',docRef.id);
        
      }).then(( )=>{
        return controler.getPost()
      })
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.data().userId} => ${doc.data().texto} => ${doc.id}`);
       
        const divShowPost = document.createElement('div');
        divShowPost.setAttribute("class","divShowPost");

        divPost.appendChild(divShowPost);

        const divUserPhoto = document.createElement('div');

        divShowPost.appendChild(divUserPhoto);

        const userPhoto = document.createElement('img');
        userPhoto.setAttribute("src","./images/defaultUser.png");
        userPhoto.setAttribute("class","showPostUserPhoto");

        divUserPhoto.appendChild(userPhoto);

        const divTextPost = document.createElement('div');
        divTextPost.setAttribute("class","divTextPost");
        divTextPost.innerHTML = ` ${doc.data().texto}`;

        divShowPost.appendChild(divTextPost);
       

        /*controler.obUser(function(user){
          if(user){
            userPhoto.innerHTML = user.displayName;
          }
        } )*/
        
        const divDeleteAndEdit = document.createElement('div');
        divDeleteAndEdit.setAttribute("class","divDeleteAndEdit");
        divShowPost.appendChild(divDeleteAndEdit);
        const P = document.createElement('p');//este elemento por el momento no lo estoy usando
        //P.innerHTML = 'aqui el post'
        divTextPost.appendChild(P);
        const trash = document.createElement('input');
        trash.setAttribute("type","button");
        trash.setAttribute("value","Eliminar");
        trash.setAttribute("class","btn btn-info trash");
        divDeleteAndEdit.appendChild(trash);
        const edit = document.createElement('input');
        edit.setAttribute("type","button");
        edit.setAttribute("value","Editar");
        edit.setAttribute("class","btn btn-success edit");
        divDeleteAndEdit.appendChild(edit);
        trash.addEventListener('click',()=>{
          controler.deletePost(doc.id)
          divShowPost.remove();
        })
        
        });  
      });    
    });
  





    //se añaden todos los divs
    viewMuro.appendChild(divMain);
    divMain.appendChild(divPerfil);
    divPerfil.appendChild(divFotoNameEdite);
    divFotoNameEdite.appendChild(divFotoAndName);
    divFotoAndName.appendChild(userPhoto);
    divFotoAndName.appendChild(userName);
    divFotoNameEdite.appendChild(divBtnEdite);
    divBtnEdite.appendChild(btnEdite);
    divMain.appendChild(divPost);
    divPost.appendChild(divForm);
    divForm.appendChild(textArea);
    divForm.appendChild(btn_post);
    divMain.appendChild(divNotice);
    
    

    return viewMuro
}
 /* .then((doc) => {
        const myData= doc.data().texto;
        const user = doc.data().userId;
        console.log(`${myData}++++${user}`);
        
        const divShowPost = document.createElement('div');
        divShowPost.setAttribute("class","divShowPost");
        divShowPost.value ='';
    
        const content = document.createElement('p');
        content.innerHTML +=myData;
        divPost.appendChild(divShowPost);
        divShowPost.appendChild(content);
         
      })
      .catch( ( err) =>{
        alert(err)
      }) 
     */
     