export default () => {

  const divNewAccount = document.createElement("div");
  divNewAccount.setAttribute("class","modal-dialog text-center");

  const divSeccion = document.createElement("div");
  divSeccion.setAttribute("class","col-sm-8");

  const divModal = document.createElement("div");
  divModal.setAttribute("class","modal-content ");

  const divText = document.createElement("div");
  divText.setAttribute("class","col-12 divText");

  const parrafo = document.createElement("p");
  const text = document.createTextNode("Crea una cuenta en Edularity");
  const elemntParrafo = parrafo.appendChild(text);

  const divRegistro = document.createElement("form");
  divRegistro.setAttribute("class","col-12 formulario");
  divRegistro.setAttribute("id","formSingUp");

  const divName = document.createElement("div");
  divName.setAttribute("class","form-group");
  
  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("placeholder", " Nombre");
  name.setAttribute("class", "form-control form-control-lg");
  name.setAttribute("name", "name");
  
  const divEmail = document.createElement("div");
  divEmail.setAttribute("class","form-group");

  const email = document.createElement("input");
  email.setAttribute("type", "text");
  email.setAttribute("placeholder", " Email");
  email.setAttribute("class", "form-control form-control-lg");
  email.setAttribute("name", "email");

  const divPassword = document.createElement("div");
  divPassword.setAttribute("class","form-group");
  
  const pass = document.createElement("input");
    pass.setAttribute("type", "password");
    pass.setAttribute("placeholder", "Password");
    pass.setAttribute("class", "form-control form-control-lg");
    pass.setAttribute("name", "password");

   const divConfirPass = document.createElement("div");
    divConfirPass.setAttribute("class","form-group");
   
    const confirPass = document.createElement("input");
    confirPass.setAttribute("type", "password");
    confirPass.setAttribute("placeholder", " Confirmar Password");
    confirPass.setAttribute("class", "form-control form-control-lg");
    confirPass.setAttribute("name", "confirmPass");

    const btnRegistrar = document.createElement("input")
    btnRegistrar.setAttribute("type", "submit");
    btnRegistrar.setAttribute("value", "registrarse");
    btnRegistrar.setAttribute("class", "btn btn-primary btn-lg btn-block");
    btnRegistrar.setAttribute("id", "btnSignUp");

/*     const anchor = document.createElement("a");
    anchor.setAttribute("href","#/");
    anchor.setAttribute("class","btn btn-outline-success")
    anchor.innerHTML = "Home"; */

    const anchor2 = document.createElement("a");
     anchor2.setAttribute("href","#/login");
     anchor2.setAttribute("class","btn btn-outline-primary ")
     anchor2.innerHTML="Login";

  divNewAccount.appendChild(divSeccion);
  divSeccion.appendChild(divModal);
  divModal.appendChild(divRegistro);
  /* divRegistro.appendChild(anchor); */
  divRegistro.appendChild(anchor2);
  divRegistro.appendChild(divText);
  divText.appendChild(elemntParrafo);
  divRegistro.appendChild(divName);
  divName.appendChild(name);
  divRegistro.appendChild(divEmail);
  divEmail.appendChild(email);
  divRegistro.appendChild(divPassword);
  divPassword.appendChild(pass);
  divRegistro.appendChild(divConfirPass);
  divConfirPass.appendChild(confirPass);
  divRegistro.appendChild(btnRegistrar);
  
    return divNewAccount
  
}
