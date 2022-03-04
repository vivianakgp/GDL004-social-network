export default () => {
   const viewHome= `
   <div class = "home__contenedor">
      <h1>EDUlarity</h1>  
      <h2>LIBRES PARA APRENDER</h2>
      <p>Bienvenidos A Nuestro Espacio Social De Aprendizaje Sobre Alternativas A
      La Educacion Tradicional, Educación Alternativa Y Educación sin Escuela:
      Homeschooling, Unschooling, Worldschooling.
      </p>  
         <nav class = "menu">
            <ul>
               <li>
                  <a href = "#/login">LOGING</a>
               </li>
               <li>
                  <a href = "#/createAccount">CREAR CUENTA</a>
               </li>
               
            </ul>
         </nav>
   </div>

   `

   const divElem = document.createElement ('div');
   divElem.innerHTML = viewHome;

   return divElem
};
      /* <div class = contenedor-inicio>
         <div class = "items">
            <img src="images/boy-unschooling.jpeg" class = "logo-inicio">
         </div>
         <div class = "items">
            <h2>EDUlarity</h2>
         </div> 
         <div class = "items">

         </div>
      </div> */