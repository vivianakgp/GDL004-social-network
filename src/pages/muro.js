import { controler } from '../controlador/controler.js';
export default ( ) => {
   
    const viewMuro = document.createElement("div");
    viewMuro.setAttribute("class" , "container");
    viewMuro.setAttribute("id" , "viewMuro");
   
    const divMain = document.createElement("div");
    divMain.setAttribute("class","row");
    
    const divPerfil = document.createElement("div");//ESTE ES EL DIV PARA EL PERFIL
    divPerfil.setAttribute("class","col-sm perfil");

    const  divExitEdit = document.createElement("div");
    divExitEdit.setAttribute("class","img-fluid divExitEdit");

    const iconoLogOut = document.createElement("img");
    iconoLogOut.setAttribute("src","./images/exit.png");
    iconoLogOut.setAttribute("class","iconoLogOut");
    iconoLogOut.setAttribute("id","iconoLogOut");

    iconoLogOut.addEventListener('click', () => {
      controler.singOut()      
    })
     

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
    });
    

    const btnEdite = document.createElement('input');
    btnEdite.setAttribute("type","button");
    btnEdite.setAttribute("class","btn btn-warning btn-sm ntb editarPerfil");
    btnEdite.setAttribute("value","editar ✐")


    const divPost = document.createElement("form");//ESTE ES EL DIV PARA LOS POSTS
    divPost.setAttribute("class","col-sm divPost ");
    
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

    const divshowPost1 = document.createElement('div');
    divshowPost1.setAttribute("class","divShowPost1")
//<img src="..." class="img-fluid" alt="Responsive image">
/*<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div> */ 
    const divNotice = document.createElement("div");//ESTE ES EL DIV DE NOTICIAS/OTROS
    divNotice.setAttribute("class","col-sm noticeOthers");

   const divImg1father = document.createElement("div");/********************************************************************* */
   divImg1father.setAttribute("class","flip-card");

   const divImg1Cheldren = document.createElement("div");
   divImg1Cheldren.setAttribute("class","flip-card-inner");

   const divImg1Front = document.createElement("div");
   divImg1Front.setAttribute("class","flip-card-front");

     const img1 = document.createElement("img");
     img1.setAttribute("src"," ./images/yvonne-laborda.jpg");
     img1.setAttribute("class","img-fluid img-thumbnail img1");
   
   const divImg1Back = document.createElement("div");
   divImg1Back.setAttribute("class","flip-card-back");
     
     const tittle = document.createElement("h1");
      tittle.innerHTML = 'unschooling';

      const parrafoImg1 = document.createElement("p");
      parrafoImg1.innerHTML = "Nadie tira de una flor para forzar su crecimiento";

      const parrafo2img1 = document.createElement("p");
      parrafo2img1.innerHTML = "¿Que es unschooling?";

      const anchor = document.createElement("a");
      anchor.setAttribute("href","https://www.esfacilserverde.com/portal25/temas-verdes/halzo-tu-mismo/24-temas-verdes/educacion/141-del-homeschooling-al-unschooling-sin-morir-en-el-intento");
      anchor.innerHTML = 'unschooling';
      anchor.setAttribute("class","btn btn-link anchor");

    const img2 = document.createElement("img");
    img2.setAttribute("src","./images/homeschooling-blanco.jpg");
    img2.setAttribute("class","img-thumbnail img2");

    const img3 = document.createElement("img");
    img3.setAttribute("src","./images/niños-pintados-manitas.jpg");
    img3.setAttribute("class","img-thumbnail img3");

    
    //se añaden todos los divs
    viewMuro.appendChild(divMain);
    divMain.appendChild(divPerfil);
    divPerfil.appendChild(divFotoNameEdite);
    divFotoNameEdite.appendChild(divExitEdit);
    divExitEdit.appendChild(btnEdite);
    divExitEdit.appendChild(iconoLogOut);
    divFotoNameEdite.appendChild(divFotoAndName);
    divFotoAndName.appendChild(userPhoto);
    divFotoAndName.appendChild(userName);
    divMain.appendChild(divPost);
    divPost.appendChild(divForm);
    divForm.appendChild(textArea);
    divForm.appendChild(btn_post);
    divPost.appendChild(divshowPost1);

    divMain.appendChild(divNotice);
    divNotice.appendChild(divImg1father);
    divImg1father.appendChild( divImg1Cheldren)
    divImg1Cheldren.appendChild(divImg1Front);
    divImg1Front.appendChild(img1);
    divImg1Cheldren.appendChild(divImg1Back);
    divImg1Back.appendChild(tittle);
    divImg1Back.appendChild(parrafoImg1);
    divImg1Back.appendChild(parrafo2img1);
    divImg1Back.appendChild(anchor);
    divNotice.appendChild(img2);
    divNotice.appendChild(img3);

   /*************************************************************************************************************/ 
  
      
  
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
     return controler.createPost(newPostUser)
     .then(()=>{
       textArea.value = ''
       console.log(newPostUser +' '+' '+ 'promesa resuetla')
     }) //el mtodo createPost crea documentos en la coleccion post 
     
    };
    
    //btnMyPost.addEventListener('click', showMyPosts )
      //btnEdite.removeEventListener('click', showMyPosts )
      onSnapPost()
    function  onSnapPost( ){
     
          
        
        return controler.getPost((querySnapshot) => {

          divshowPost1.innerHTML = '';
          querySnapshot.forEach((doc) => {
              console.log(`${doc.data().userId} => ${doc.data().texto} => ${doc.id}`);
         
          const divShowPost = document.createElement('div');
          divShowPost.setAttribute("class","divShowPost");
    
          divshowPost1.appendChild(divShowPost);
    
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
    
             btn_post.addEventListener('click',change)
             function change (){/************ AQUI */
              var newText = textArea.value ;
             return  controler.editPost(newText,doc.id)
           .then(()=> {
             textArea.value = ' ';
             //textArea.setAttribute("placeholder", "¿Que estas pensando?? 🤔");
             btn_post.value= 'Publicar';
             btn_post.removeEventListener('click',change);
             btn_post.addEventListener('click',publicar);
            })
            .catch((error) =>{
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
             })
           }
          };
         const space = document.createElement('br');
         divshowPost1.appendChild(space);
          
          });  
        });
      
    }
     
  
    



    return viewMuro
}
 /* .then( (docRef )=>{
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
      })  */ 


      
   /* const divShowMyPosts = document.createElement("div");
    divShowMyPosts.setAttribute("class","divShowMyPosts")
   

    const btnMyPost = document.createElement("input");
    btnMyPost.setAttribute("type","button");
    btnMyPost.setAttribute("class","btn btn-dark");
    btnMyPost.setAttribute("value","Mis Posts");
   
    */
/* var washingtonRef = firebase.firestore().collection("post").doc(doc.id);
       
             return washingtonRef.update({
                 texto: newText
             }) 
             
             
             
             
             
             
            */