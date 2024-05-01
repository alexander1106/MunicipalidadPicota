// Seleccionar elementos
const botonVerMasMision = document.querySelector("#ver_mas_mision");
const botonVerMasVision = document.querySelector("#ver_mas_vision");
const expandirVision = document.querySelector("#ver_mas_cuadro_vision");
const expandirMision = document.querySelector("#ver_mas_cuadro_mision");
const botonCerrarCuadroVision = document.querySelector("#cerrar_vision");
const botonCerrarCuadroMision = document.querySelector("#cerrar_mision");
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

botonVerMasMision.addEventListener("click", () => mostrarElemento(expandirMision));
botonCerrarCuadroMision.addEventListener("click", () => ocultarElemento(expandirMision));
botonVerMasVision.addEventListener("click", () => {
    mostrarElemento(expandirVision);
    // Aquí puedes añadir cualquier otra lógica que necesites al abrir la visión
});
botonCerrarCuadroVision.addEventListener("click", () => ocultarElemento(expandirVision));
