import { controler } from '../controlador/controler.js';
export default ( ) => {
 

    const viewMuro = document.createElement("div");
    viewMuro.setAttribute("class" , "container");
    viewMuro.setAttribute("id" , "viewMuro");
   
    const divMain = document.createElement("div");
    divMain.setAttribute("class","row");
    
    const divPerfil = document.createElement("div");//ESTE ES EL DIV PARA EL PERFIL
    divPerfil.setAttribute("class","col-sm perfil");

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

    const divShowMyPosts = document.createElement("div");
    divShowMyPosts.setAttribute("class","divShowMyPosts")
   

    const btnMyPost = document.createElement("input");
    btnMyPost.setAttribute("type","button");
    btnMyPost.setAttribute("class","btn btn-dark");
    btnMyPost.setAttribute("value","Mis Posts");
   
    

    const divPost = document.createElement("form");//ESTE ES EL DIV PARA LOS POSTS
    divPost.setAttribute("class","col-sm  main-section ");
   
     
    const divForm = document.createElement("div");
    divForm.setAttribute("class","form-group");

    const textArea = document.createElement("textarea");
    textArea.setAttribute("id" , "textArea");
    textArea.setAttribute("placeholder", "¿Que estas pensando? 🤔");
    textArea.setAttribute("class","TxtArea");
  
    const btn_post = document.createElement("input");
    btn_post.setAttribute("type", "button");
    btn_post.setAttribute("value", "Publicar");
    btn_post.setAttribute("id", "btnPost");
    btn_post.setAttribute("class", "btn btn-danger");

    const divNotice = document.createElement("div");//ESTE ES EL DIV DE NOTICIAS/OTROS
    divNotice.setAttribute("class","col-sm noticeOthers");
    
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
    btn_post.addEventListener('click',publicar);
    function publicar() {
     
      const newPostUser = textArea.value;
     //textArea.setAttribute("placeholder", "¿Que estas pensando? 🤔");
      btn_post.disabled = true;
      return controler.createPost(newPostUser) //el mtodo createPost crea documentos en la coleccion post 
      .then( (docRef )=>{
        //luego de que se guardo el texto en firestore mustrame el texto en nuevo div
        textArea.value = ' '
        console.log(newPostUser,' '+'promesa resuelta de createPost',docRef.id);
        const divShowPost = document.createElement('div');
        divShowPost.setAttribute("class","divShowPost");
  
        divPost.appendChild(divShowPost);
  
        const divUserProfile = document.createElement('div');
  
        divShowPost.appendChild(divUserProfile);
  
        const userPhoto = document.createElement('img');
        userPhoto.setAttribute("src","./images/defaultUser.png");
        userPhoto.setAttribute("class","showPostUserPhoto");
  
        divUserProfile.appendChild(userPhoto);

        const nameUser = document.createElement('a');
        controler.obUser(function(user){
          if(user){
            nameUser.innerHTML = user.displayName;
          }
        })

        divUserProfile.appendChild(nameUser);
  
        const divTextPost = document.createElement('div');
        divTextPost.setAttribute("class","divTextPost");
        divTextPost.innerHTML = newPostUser ;
  
        divShowPost.appendChild(divTextPost);
       
        const divDeleteAndEdit = document.createElement('div');
        divDeleteAndEdit.setAttribute("class","divDeleteAndEdit");
        divShowPost.appendChild(divDeleteAndEdit);
      
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
          //controler.deletePost(doc.id)
          divShowPost.remove();
      
        })
        
      })
      .catch((error )=>{
           alert(error)
      })    
    }
    //para mostror lod pots del usuario hay que dar click a un boton
    btnMyPost.addEventListener('click', showMyPosts )
    function showMyPosts() {
      //btnEdite.removeEventListener('click', showMyPosts )
      return controler.getPost((querySnapshot) => {
        divNotice.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.data().userId} => ${doc.data().texto} => ${doc.id}`);
       
        const divShowPost = document.createElement('div');
        divShowPost.setAttribute("class","divShowPost");
  
        divNotice.appendChild(divShowPost);
  
        const divUserProfile = document.createElement('div');
  
        divShowPost.appendChild(divUserProfile);
  
        const userPhoto = document.createElement('img');
        userPhoto.setAttribute("src","./images/defaultUser.png");
        userPhoto.setAttribute("class","showPostUserPhoto");
  
        divUserProfile.appendChild(userPhoto);

        const nameUser = document.createElement('a');
        controler.obUser(function(user){
          if(user){
            nameUser.innerHTML = user.displayName;
          }
        })

        divUserProfile.appendChild(nameUser);
  
        const divTextPost = document.createElement('div');
        divTextPost.setAttribute("class","divTextPost");
        divTextPost.innerHTML = doc.data().texto;
  
        divShowPost.appendChild(divTextPost);
      
        const divDeleteAndEdit = document.createElement('div');
        divDeleteAndEdit.setAttribute("class","divDeleteAndEdit");
        divShowPost.appendChild(divDeleteAndEdit);
      
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

        edit.addEventListener('click',editar);
        function editar(){
          
          textArea.value = doc.data().texto;
          btn_post.value = 'Editar';
          btn_post.removeEventListener('click',publicar);

           btn_post.addEventListener('click',()=>{
             var nweText = textArea.value ;
             var washingtonRef = firebase.firestore().collection("post").doc(doc.id);
      
            return washingtonRef.update({
                texto: nweText
            })
          .then(()=> {
            textArea.value = ' ';
            btn_post.value= 'Publicar'
            btn_post.addEventListener('click',publicar);
           })
           .catch((error) =>{
           // The document probably doesn't exist.
           console.error("Error updating document: ", error);
            })
          })
         
        }
       
        
        });  
      });
    }
      
  
    


    //se añaden todos los divs
    viewMuro.appendChild(divMain);
    divMain.appendChild(divPerfil);
    divPerfil.appendChild(divFotoNameEdite);
    divFotoNameEdite.appendChild(divFotoAndName);
    divFotoAndName.appendChild(userPhoto);
    divFotoAndName.appendChild(userName);
    divFotoNameEdite.appendChild(divBtnEdite);
    divBtnEdite.appendChild(btnEdite);
    divPerfil.appendChild(divShowMyPosts);
    divShowMyPosts.appendChild(btnMyPost);
    divMain.appendChild(divPost);
    divPost.appendChild(divForm);
    divForm.appendChild(textArea);
    divForm.appendChild(btn_post);
    divMain.appendChild(divNotice);
    
    

    return viewMuro
}
 /* .then((doc) => {docRef
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






       const edit = document.createElement('input');
        edit.setAttribute("type","button");
        edit.setAttribute("value","Editar");
        edit.setAttribute("class","btn btn-success edit");
     */
     




      /*const btnEditOnFormulario = document.createElement('input');
         btnEditOnFormulario.setAttribute('type','button');
         btnEditOnFormulario.setAttribute('value','Editar');
         btnEditOnFormulario.setAttribute('class','btn btn-danger');
         divPost.appendChild(btnEditOnFormulario);
         */