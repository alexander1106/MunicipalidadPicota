
const botonMostrarOcultar = document.querySelector(".menu");
const mensaje = document.querySelector(".ul");


// Agregar evento de clic al botón
botonMostrarOcultar.addEventListener('click', function() {
    // Si el mensaje está visible, ocultarlo; si está oculto, mostrarlo
    if (mensaje.style.display === 'none') {
        mensaje.style.display = 'block'; // Mostrar el mensaje
    } else {
        mensaje.style.display = 'none'; // Ocultar el mensaje
    }
});

// Asignar eventos
botonMenuResponsive.addEventListener("click", () => mostrarElemento(mostrarMenuResponsive));

