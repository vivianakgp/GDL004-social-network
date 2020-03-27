export default () => {
  

  const divDadLogin = document.createElement("div");
  divDadLogin.setAttribute("class","modal-dialog text-center");
  
  
  const divDad1login = document.createElement("div");
  divDad1login.setAttribute("class","col-sm-8 main-section");
 

  const divDad2login = document.createElement("div");
  divDad2login.setAttribute("class","modal-content");
 


  const divDlogin = document.createElement("div");
  divDlogin.setAttribute("class","col-12 user-img");

  const img = document.createElement("img");
  img.setAttribute("src", "/images/avatar.png");
 // img.setAttribute("class","avatar");

 
  
  const form = document.createElement("form");
  form.setAttribute("class", "col-12");
  form.setAttribute("id", "form")

  const divOfemail = document.createElement("div");
  divOfemail.setAttribute("class","form-group");
  divOfemail.setAttribute("id","divEmail");

  const email = document.createElement("input");
  email.setAttribute("class", "form-control");
  email.setAttribute("type","text");
  email.setAttribute("placeholder","Email@gmail.com");
  email.setAttribute("name","email");

  const divOfpass = document.createElement("div");
  divOfpass.setAttribute("class","form-group");

  const pass = document.createElement("input");
  pass.setAttribute("class", "form-control");
  pass.setAttribute("type","password");
  pass.setAttribute("placeholder", "password");
  pass.setAttribute("name", "pass");

  const btn = document.createElement("input");
  btn.setAttribute("class", "btn btn-primary");
  btn.setAttribute("type","submit");
  btn.setAttribute("value","ingresar");
  btn.setAttribute("id","ingresar");

  const divOftext = document.createElement("div");
  divOftext.setAttribute("class", "col-12");

  const parrafo = document.createElement("p");
  const text= document.createTextNode("o bien ingresa con...");
  const elemnParrafo = parrafo.appendChild(text);

  const divOficons = document.createElement("div");
  divOficons.setAttribute("class", "col-12");

  const imgface = document.createElement("img");
  imgface.setAttribute("src", "/images/face.png");
  imgface.setAttribute("class","icons");

  const imgGoogle = document.createElement("img");
  imgGoogle.setAttribute("src", "/images/google.png");
  imgGoogle.setAttribute("class","icons");

  const divLink= document.createElement("div");
  divLink.setAttribute("class", "col-12 create-account");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", "#/createAccount");
  anchor.innerHTML = "Crear Cuenta";
 


 


  

  divDadLogin.appendChild(divDad1login );
  divDad1login.appendChild(divDad2login);
  divDad2login.appendChild(divDlogin);
  divDlogin.appendChild(img);
  divDad2login.appendChild(form);
  form.appendChild(divOfemail );
  divOfemail.appendChild(email);
  form.appendChild(divOfpass);
  divOfpass.appendChild(pass);
  form.appendChild(btn );
  divDad2login.appendChild(divOftext);
  divOftext.appendChild(elemnParrafo);
  divDad2login.appendChild(divOficons);
  divOficons.appendChild(imgface);
  divOficons.appendChild(imgGoogle);
  divDad2login.appendChild(divLink);
  divLink.appendChild(anchor);


      //crear el div padre para paguina de login//
   /*const divLogin = document.createElement("div");
   divLogin.setAttribute("id","_container");
   divLogin.setAttribute("class","container-sm");

   // creo div con elemento p..... y lo agredo a div padre//
   const div1 = document.createElement("div");
   div1.setAttribute("class","item-login");
   const p = document.createElement("p");
   const t = document.createTextNode("inicia sesion en tu cuenta de EDUlarity");
   const p_texto=p.appendChild(t);
   divLogin.appendChild(div1);
   div1.appendChild(p_texto);

  //crear un div nuevo que contenga los input email y contraseña y btn de submit y aderirl o al div padre divElementos
  const divSignIn = document.createElement("form");
 divSignIn.setAttribute("class","item-login");
 divSignIn.setAttribute("id","formSignIn");


 
 const inputEmail = document.createElement("input");
 inputEmail.setAttribute("type","text");
 inputEmail.setAttribute("placeholder","Email");
 inputEmail.setAttribute("name","email");
 inputEmail.setAttribute("class", "form-control");
divSignIn.appendChild(inputEmail);
 
 const inputPass = document.createElement("input");
 inputPass.setAttribute("type","password");
 inputPass.setAttribute("placeholder","PassWord");
 inputPass.setAttribute("name","password");
 inputPass.setAttribute("class", "form-control");
 divSignIn.appendChild(inputPass);
 

const btnSignIn = document.createElement("input");
btnSignIn.setAttribute("class","form-login--submit");
btnSignIn.setAttribute("type","submit");
btnSignIn.setAttribute("id","btnSignIn");
btnSignIn.setAttribute("value","Acceder");
btnSignIn.setAttribute("class", "btn btn-outline-success")
divSignIn.appendChild(btnSignIn);

divLogin.appendChild(divSignIn);

//crear div con elemento parrafo y agredarlo a div padre//
const div5_p = document.createElement("div");
 div5_p.setAttribute("class","item-login");
   const p_2 = document.createElement("p");
   const t_2 = document.createTextNode("o bien ingresa con...");
   const elemt_p = p_2.appendChild(t_2);
  // div5_p.appendChild(elemt_p);
   divLogin.appendChild(elemt_p);
 
//crear div con elementos img f y g y agregarlos a div padre//
const div6_logo = document.createElement("div");
div6_logo.setAttribute("class", "item-login");

const logo_f = document.createElement("img");
logo_f.setAttribute("class", "pequeña");
logo_f.setAttribute("src", "images/iconFacebook.png");
logo_f.setAttribute("id", "btn_face");
    //logo de gopgle// 
const logo_g = document.createElement("img");
logo_g.setAttribute("class", "pequeña");
logo_g.setAttribute("src", "images/googleCircle.png");
logo_g.setAttribute("id", "btn_google");

divLogin.appendChild(logo_f);
divLogin.appendChild(logo_g);
// div6_logo.appendChild(logo_f);
// div6_logo.appendChild(logo_g);
// divLogin.appendChild(div6_logo);
//crear div con elemento p y dentro del p un <a> y agregarlos al div padre//
const div7_parrafo = document.createElement("div");
div7_parrafo.setAttribute("class", "item-login");
const p_3 = document.createElement("p");
p_3.innerHTML = "no tienes cuenta aun?";
const anchor = document.createElement("a");
anchor.setAttribute("href", "#/createAccount");
anchor.innerHTML = "crear cuenta";
div7_parrafo.appendChild(p_3);
div7_parrafo.appendChild(anchor);

divLogin.appendChild(div7_parrafo);
*/


 return divDadLogin

};