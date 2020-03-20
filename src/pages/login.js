export default () => {
      //crear el div padre para paguina de login//
   const divLogin = document.createElement("div");
   divLogin.setAttribute("id","_container");

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
divSignIn.appendChild(inputEmail);
 
 const inputPass = document.createElement("input");
 inputPass.setAttribute("type","password");
 inputPass.setAttribute("placeholder","PassWord");
 inputPass.setAttribute("name","password");
 divSignIn.appendChild(inputPass);
 

const btnSignIn = document.createElement("input");
btnSignIn.setAttribute("class","form-login--submit");
btnSignIn.setAttribute("type","submit");
btnSignIn.setAttribute("id","btnSignIn");
btnSignIn.setAttribute("value","Acceder");
divSignIn.appendChild(btnSignIn);

divLogin.appendChild(divSignIn);

//crear div con elemento parrafo y agredarlo a div padre//
const div5_p = document.createElement("div");
 div5_p.setAttribute("class","item-login");
   const p_2 = document.createElement("p");
   const t_2 = document.createTextNode("o bien ingresa con...");
   const elemt_p = p_2.appendChild(t_2);
   divLogin.appendChild(div5_p);
   div5_p.appendChild(elemt_p);
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

divLogin.appendChild(div6_logo);
div6_logo.appendChild(logo_f);
div6_logo.appendChild(logo_g);
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



 return divLogin

};