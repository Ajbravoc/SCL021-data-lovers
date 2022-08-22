import data from "./data/pokemon/pokemon.js";

//Interacción del toggle dentro del menú//
let toggles = document.querySelector(".toggle"); 
let menu = document.querySelector(".menu");
toggles.onclick = function () {
  menu.classList.toggle("active");
};

//Interacción de la clase de cada elemento de la ruleta a través de un click//
var Btns = document.querySelectorAll(".Btn");

Btns.forEach((link) => {
  link.addEventListener("click", () => {
  
let moveTo = link.getAttribute("moveTo");
    document.getElementById(moveTo).scrollIntoView(true);
  });
});

//Interacción elemento pokemon toggle con seccion título de cada elemento imprimiendo id//
window.onload = function () 
{
    var btnType =document.querySelectorAll('.Btn');
    let titleType=document.querySelector("#types");
	
    for(var i=0;i<btnType.length;i++)
    {
        btnType[i].addEventListener("click", function()
        {
            titleType.innerText=this.id;
        }); 
    }
}   


//Crea pop Up//
document.querySelectorAll(".Btn").forEach((e) => {
    e.addEventListener("click", (event) => {
      const cardType = document.getElementById("container-pokemoncard");
      const id = event.target.id;
      console.log(id);
      cardType.textContent = "";
  
      //Llamar a la data e incluir los elementos "extras" que hayan dentro de un array en la data//
      const dataPokemon = data.pokemon;
      for (let i = 0; i < dataPokemon.length; i++) {
        if (dataPokemon[i].type.includes(id)) {
          //Crear un div para cada pokemon
          const cardPokemon = document.createElement("div");
          cardPokemon.classList.add("pokemon-card");
  
          //Crear un div para nombre
          const namePokemon = document.createElement("div");
          namePokemon.classList.add("pokemon-name");
  
          //Crear etiqueta p para nombres
          const div = document.createElement("p");
          div.textContent = `${dataPokemon[i].name}`;
          cardType.appendChild(div);
  
          //Crear etiqueta img para agregar imagenes
          const img = document.createElement("img");
          img.src = `${dataPokemon[i].img}`;
          cardType.appendChild(cardPokemon);
  
         
          //Hay que hacer un appendChild por cada información que yo quiera extraer
          cardPokemon.appendChild(img);
          cardPokemon.appendChild(div);
      
          //Boton open pop up
          cardPokemon.addEventListener("click", function () {
            console.log("click");

          //Funcionalidad boton open pop up//
            let popUpInfo = createPopUp(dataPokemon[i]);
            document.getElementById("contentPopUp").innerHTML = "";
            document.getElementById("contentPopUp").innerHTML = popUpInfo;
            document.getElementById("popUp").open = true;
          });
        }
      }
    });
  });

  //Imprime informacion en el pop Up//
function createPopUp(dataPokemon) {
    return `<div class="infoType">
    <img src="${dataPokemon.img}" alt="Type Pokemon">
      </div>
      <div class="info">
      <h2>${dataPokemon.name}</h2>
       <h3>${dataPokemon.type}</h3>
       <p>${dataPokemon.about}</p>
      </div>`;
  }

  //Funcionalidad boton close pop up//
  document.getElementById("btnClosePopUp").addEventListener("click", closePopUp);
  function closePopUp() {
    console.log("click close");
    document.getElementById("popUp").open = false;
  }

  //Botones antes del footer//
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 18;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".pokemon-card")];
  for (var i = currentItem; i < currentItem + 25; i++) {
    boxes[i].style.display = "inline-block";

  //Interacción back//**** preguntar */
    if (i === boxes.length) {
      document.querySelector("#back").style.display = "inline-block";
      console.log(boxes);   
      return (currentItem += 7); //**preguntar  */ Eso retorna para que muestre los pokemones
    }
    }
  }

//Retorno de scroll //
  let btn = document.querySelector("#back");
  let header = document.querySelector(".container-header");

  btn.addEventListener("click", function () {
    header.scrollIntoView(true);
  });
