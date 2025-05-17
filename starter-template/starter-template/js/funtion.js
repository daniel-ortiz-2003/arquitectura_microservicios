// ================== INICIALIZACIÓN DE COMPONENTES ==================

// Inicializa carrusel y autoplay
$(document).ready(function () {
  $('.carousel').carousel();
  setInterval(function () {
    $('.carousel').carousel('next');
  }, 3000);

  // Inicializa parallax de Materialize
  $('.parallax').parallax();

  // Quita la clase 'oculto' al primer parallax-container si existe
  var parallaxCont = document.querySelector('.parallax-container');
  if (parallaxCont) parallaxCont.classList.remove('oculto');
});

// ================== FUNCIONES DE INTERACCIÓN ==================

// Alterna la visibilidad de un texto ocultable
function toggleText(id) {
  var text = document.getElementById(id);
  if (text) text.classList.toggle('visible');
}

// Muestra u oculta un parallax-container por ID
function mostrarParallax(id) {
  var contenedor = document.getElementById(id);
  if (contenedor) contenedor.classList.toggle('oculto');
}

// Animación para el botón "Ver más"
function animarVerMas(element) {
  element.classList.add('ver-mas-animado');
  setTimeout(function () {
    element.classList.remove('ver-mas-animado');
  }, 300);
}