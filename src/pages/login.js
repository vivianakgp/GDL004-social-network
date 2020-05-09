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
  img.setAttribute("src", "/images/ninño.png");
  const form = document.createElement("form");
  form.setAttribute("class", "col-12");
  form.setAttribute("id", "form");
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
  pass.setAttribute("class","form-control");
  pass.setAttribute("type","password");
  pass.setAttribute("placeholder","password");
  pass.setAttribute("name","pass");

  const btn = document.createElement("input");
  btn.setAttribute("class","btn btn-outline-success");
  btn.setAttribute("type","submit");
  btn.setAttribute("value","ingresar");
  btn.setAttribute("id","ingresar");

  const divOftext = document.createElement("div");
  divOftext.setAttribute("class","text");

  const parrafo = document.createElement("p");
  const text = document.createTextNode("o bien ingresa con...");
  const elemnParrafo = parrafo.appendChild(text);

  const divOficons = document.createElement("div");
  divOficons.setAttribute("class", "col-12");

  const imgface = document.createElement("img");
  imgface.setAttribute("src", "/images/face.png");
  imgface.setAttribute("class","icons");

  const imgGoogle = document.createElement("img");
  imgGoogle.setAttribute("src", "/images/gmail.png");
  imgGoogle.setAttribute("class","icons");

  const divLink = document.createElement("div");
  divLink.setAttribute("class", "col-12 create-account");

  const anchor = document.createElement("a");
  anchor.setAttribute("href","#/createAccount");
  anchor.innerHTML = "CrearCuenta";

  divDadLogin.appendChild(divDad1login);
  divDad1login.appendChild(divDad2login);
  divDad2login.appendChild(divDlogin);
  divDlogin.appendChild(img);
  divDad2login.appendChild(form);
  form.appendChild(divOfemail);
  divOfemail.appendChild(email);
  form.appendChild(divOfpass);
  divOfpass.appendChild(pass);
  form.appendChild(btn);
  divDad2login.appendChild(divOftext);
  divOftext.appendChild(elemnParrafo);
  divDad2login.appendChild(divOficons);
  divOficons.appendChild(imgface);
  divOficons.appendChild(imgGoogle);
  divDad2login.appendChild(divLink);
  divLink.appendChild(anchor);

  return divDadLogin
};