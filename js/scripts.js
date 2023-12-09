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


  /*Funcion para los productos*/
  document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const cantidadInputs = document.querySelectorAll("input[type='number']");
    const vaciarCarritoButton = document.querySelector("#carrito input[value='Vaciar carrito']");
    const pagarButton = document.querySelector("#carrito input[value='Pagar']");
    const carritoTotal = document.createElement("p");
    let total = 0;

    function actualizarTotal() {
      total = 0;
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          total += parseInt(cantidadInputs[i].value) * parseInt(cantidadInputs[i].getAttribute("data-precio"));
        }
      }
      carritoTotal.textContent = "Costo total: $" + total;
    }

    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("change", () => {
        actualizarTotal();
      });
    });

    cantidadInputs.forEach((input) => {
      input.addEventListener("input", () => {
        actualizarTotal();
      });
    });

    vaciarCarritoButton.addEventListener("click", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      cantidadInputs.forEach((input) => {
        input.value = 0;
      });
      total = 0;
      carritoTotal.textContent = "Costo total: $" + total;
    });

    pagarButton.addEventListener("click", () => {
      // Aquí puedes agregar la lógica para el proceso de pago si es necesario.
      // Por ejemplo, redirigir a una página de pago.
    });

    const carritoSection = document.querySelector("#carrito");
    carritoSection.appendChild(carritoTotal);
  });

/*Función para el botón Pagar*/
document.addEventListener("DOMContentLoaded", function () {
  const pagarButton = document.querySelector("#carrito input[value='Pagar']");
  
  pagarButton.addEventListener("click", function () {
    alert("Compra exitosa");
  });
});