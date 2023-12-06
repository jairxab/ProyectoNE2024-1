/*Función que permite el deslizamiento de las imágenes*/
function imageSlider() {
    var imageSlider = document.getElementById('image-slider');
    var images = imageSlider.getElementsByTagName('img');
    var currentIndex = 0;
  
    // Función para cambiar a la siguiente imagen
    function changeImage() {
      images[currentIndex].style.display = 'none'; // Oculta la imagen actual
      currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
      images[currentIndex].style.display = 'block'; // Muestra la nueva imagen
    }
  
    // Oculta todas las imágenes excepto la primera al cargar la página
    for (var i = 1; i < images.length; i++) {
      images[i].style.display = 'none';
    }
  
    // Configura un temporizador para cambiar la imagen después de 5 segundos (5000 ms)
    setInterval(changeImage, 5000);
  }
  
  // Llama a la función "imageSlider" para iniciar el slider
  document.addEventListener('DOMContentLoaded', function() {
    imageSlider();
  });


  /*Función que permite ver la ultima actualizacion del sitio web*/
  document.addEventListener("DOMContentLoaded", function() {
    var fechaActualizacion = new Date(document.lastModified);
    var dia = fechaActualizacion.getDate();
    var mes = fechaActualizacion.getMonth() + 1;
    var anio = fechaActualizacion.getFullYear();
    var ultimaFecha = document.createElement("ultimaFecha");
    ultimaFecha.innerHTML = "Última actualización: " + dia + 
    "/" + mes + "/" + anio;
    document.body.appendChild(ultimaFecha);
  });