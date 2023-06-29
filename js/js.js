function validateform() {
  var tel = document.getElementById("phonenum").value;

  if (tel.length < 10) {
    alert("Phone number must be of atleast 10 digits!");
    return false;
  } else if (isNaN(tel)) {
    alert("Phone number should not include character!");
    return false;
  }
  return true;
}




const d = new Date();
document.getElementById("demo").innerHTML = d;




function typeWriter() {
  var x = document.createElement("VAR");
  var t = document.createTextNode("la exploración de montañas puede ser una experiencia gratificante que te desafía, te coneFsfcta con la naturaleza y te proporciona momentos de belleza y tranquilidad. Sin embargo, es importante estar preparado y tener en cuenta los riesgos asociados con la exploración de montañas, como cambios climáticos, terrenos peligrosos o desafíos físicos.");
  x.appendChild(t);
  document.body.appendChild(x);
}


//////////image
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselImg = document.getElementById('carousel-img');

const images = [
  'imagen1.jpg',
  'imagen2.jpg',
  'imagen3.jpg'
];

let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }
  updateCarouselImage();
});

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

