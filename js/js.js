
///Mover el titulo
const title = document.getElementById("title");

const originalTitle = title.textContent;

// un array de frases para animar el title
var animWords = [
  "Explorando la dicha en cada paso en Marruecos",
  "Dejando huellas de felicidad en Marruecos",
  "Descubriendo la felicidad en cada rincón de Marruecos",
  "Pisando sonrisas en tierras marroquíes",
  "Siguiendo el camino de la felicidad en Marruecos",
  "Encontrando la felicidad a cada paso en Marruecos",
  "Dejando atrás la tristeza y caminando hacia la felicidad en Marruecos",
  "Descubriendo la felicidad bajo el sol de Marruecos",
  "Sintiendo la felicidad en cada pisada en Marruecos"
];

// Definir la velocidad de animación en milisegundos
let animSpeed = 3000; // 3 segundos

// Función para cambiar dinámicamente el título
function animateTitle() {
  var currentIndex = 0;
  setInterval(function () {
    title.textContent = animWords[currentIndex];
    currentIndex = (currentIndex + 1) % animWords.length;
  }, animSpeed);
}

// Iniciar la animación después de que la página se haya cargado completamente
window.addEventListener("load", animateTitle);








//------------------ menu hamburguesa******************//


document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.querySelector('.toggle-btn');
  var menuList = document.querySelector('.menu-list');

  toggleBtn.addEventListener('click', function() {
    menuList.classList.toggle('active');
  });
});








//// ----------------------------------------------------- ////

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselImg = document.getElementById('carousel-img');
const correoUsuario = document.querySelector("#mail");
const nombreUsuario = document.querySelector("#name");
const btnSubmit = document.querySelector(".submitbtn");
const usuario= document.querySelector(".button");
const pHora= document.querySelector("#demo");

let images = [
  'imagen1.jpg',
  'imagen2.jpg',
  'imagen3.jpg'
];

let slideIndex = 0;
let userLocal=[];


if(pHora)
addEventListener('load', () => {
  const d = new Date();
pHora.innerHTML=d;
if(localStorage.getItem('user')===null){
  usuario.innerHTML='Register Now!'
}
else{
  ponerNombreUsuario()
}

})


window.BeforeUnloadEvent = function() {
  localStorage.removeItem('user');
}



function validateform() {
  let tel = document.getElementById("phonenum").value;

  if (tel.length < 10) {
    alert("Phone number must be of atleast 10 digits!");
    return false;
  } else if (isNaN(tel)) {
    alert("Phone number should not include character!");
    return false;
  }
  return true;
}









// -------------- btn leer mas index.html ---------------------------------------//


let i = 0;
let txt = 'la exploración de montañas puede ser una experiencia gratificante que te desafía, te coneFsfcta con la naturaleza y te proporciona momentos de belleza y tranquilidad. Sin embargo, es importante estar preparado y tener en cuenta los riesgos asociados con la exploración de montañas, como cambios climáticos, terrenos peligrosos o desafíos físicos.';
let speed = 50;

console.log(txt.length);
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demoa").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}





//--------------------------------------------------------------------//


//////////image

if(prevButton)
prevButton.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }
  updateCarouselImage();
});

if(nextButton)
nextButton.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
  updateCarouselImage();
});

function updateCarouselImage() {
  carouselImg.src = images[slideIndex];
}


if(btnSubmit)
btnSubmit.addEventListener('click', () => {
  userLocal.push({nombre:nombreUsuario.value,correo:correoUsuario.value})
  localStorage.setItem("user",JSON.stringify(userLocal))
  traerUsuarioLocal()
  ponerNombreUsuario()
})

function traerUsuarioLocal(){
  let traerLocal = JSON.parse(localStorage.getItem("user"))
  let nombre=traerLocal.map(element => element.nombre)
localStorage.setItem("nombre",JSON.stringify(nombre))
}

function ponerNombreUsuario(){
    let nombreLocal=JSON.parse(localStorage.getItem("nombre"))
    usuario.innerHTML='Bienvenido/a '+ nombreLocal
 
  
}






//----------CIUDADES LIST CON ARRAY DE OBJETOS------------------//
let ciudadesList = document.getElementById('ciudades-list');

let ciudades = [
  { nombre: 'Amsafran', país: 'Marruecos', población: 40526 },
  { nombre: 'Akchour', país: 'Marruecos', población: 37673 },
  { nombre: 'Kazira', país: 'Marruecos', población: 9286 },
  { nombre: 'aglmam', país: 'Marruecos', población: 12000 },
  { nombre: 'les gorges tislit', país: 'Marruecos', población: 2800 },
  { nombre: 'rio Ifrtan', país: 'Marruecos', población: 3682 }
];


ciudades.forEach(function(ciudad) {
  let li = document.createElement('li');
  li.textContent = 'Nombre: ' + ciudad.nombre + ', País: ' + ciudad.país + ', Población: ' + ciudad.población;
  ciudadesList.appendChild(li);
});








//-----------btn de suscribe cuando hacemos clic en el ------------//
// Obtener el modal
let modal = document.getElementById("myModal");

// Obtener el botón de cierre
let closeButton = document.getElementsByClassName("close")[0];

// Obtener el botón de suscripción
let subscribeButton = document.getElementById("subscribeButton");

// Cuando se haga clic en el botón de suscripción, mostrar el modal
subscribeButton.onclick = function() {
    modal.style.display = "block";
};

// Cuando se haga clic en el botón de cierre, ocultar el modal
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Cuando el usuario haga clic en cualquier parte fuera del modal, ocultarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Evitar que se envíe el formulario
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
});
