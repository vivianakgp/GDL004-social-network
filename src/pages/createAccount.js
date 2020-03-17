export default () => {
    const divNewAccount = document.createElement("div");
    divNewAccount.setAttribute("id", "_container");
    //div container of anchores
    const div_anchore = document.createElement("div");
    div_anchore.setAttribute("class", "anchors");

     //anchores of home y login 
     const anchor = document.createElement("a");
     anchor.setAttribute("href","#/");
     anchor.innerHTML = "Home";

     const anchor2=document.createElement("a");
     anchor2.setAttribute("href","#/login");
     anchor2.innerHTML="Log in";
    
    // div container of form create new account
    const div_form = document.createElement("form");
    div_form.setAttribute("class","div_form");
    div_form.setAttribute("id","formulario");

    //Input name
    const inputTextName = document.createElement("input");
    inputTextName.setAttribute("type", "text");
    inputTextName.setAttribute("placeholder", " Nombre");
    inputTextName.setAttribute("class", "item-cuenta");
    inputTextName.setAttribute("name", "nombre");

    //Input Email
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("placeholder", " Email");
    inputEmail.setAttribute("class", "item-cuenta");
    inputEmail.setAttribute("name", "email");
    //Input Password
    const inputPass = document.createElement("input");
    inputPass.setAttribute("type", "text");
    inputPass.setAttribute("placeholder", "Password");
    inputPass.setAttribute("class", "item-cuenta");
    inputPass.setAttribute("name", "password");
     //Input confirmar Password
    const input_confirmPass = document.createElement("input");
    input_confirmPass.setAttribute("type", "text");
    input_confirmPass.setAttribute("placeholder", " Confirmar Password");
    input_confirmPass.setAttribute("class", "item-cuenta");
    input_confirmPass.setAttribute("name", "confirmPass");
    //Input Boton Aceptar....este debe hacer un evento a la funcion de Signup
    const input_createAccount = document.createElement("input")
    input_createAccount.setAttribute("type", "submit");
    input_createAccount.setAttribute("value", "newAccount");
    input_createAccount.setAttribute("class", "cuenta_btn");
    input_createAccount.setAttribute("id", "boton_crearCuenta");//se le agrego el name para pruebas de funcionalidad
    
    const elemnt_a = document.createElement("a");
    elemnt_a.setAttribute("href", "#/blog");
    input_createAccount.appendChild(elemnt_a);

   
    divNewAccount.appendChild(div_anchore);
    div_anchore.appendChild(anchor);
    div_anchore.appendChild(anchor2);
   
    div_form.appendChild(inputTextName);
    div_form.appendChild(inputEmail);
    div_form.appendChild(inputPass);
    div_form.appendChild(input_confirmPass);
    div_form.appendChild( input_createAccount);

    divNewAccount.appendChild(div_form);
    
    return divNewAccount
  
}






  //crear boton para regresar a inicio     no direccionan aun!//
    //const div_btn = document.createElement("div");
    //div_btn.setAttribute("class", "div_btn");
    /*const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "inicio");
    btn.setAttribute("class", "inicio_btn");*/

    //boton de entrar
    /* const btn2=document.createElement("input");
     btn2.setAttribute("type","submit");
     btn2.setAttribute("value","entrar");
     btn2.setAttribute("class","entrar_btn");*/