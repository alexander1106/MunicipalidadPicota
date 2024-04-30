// Seleccionar elementos
const botonVerMasMision = document.querySelector("#ver_mas_mision");
const botonVerMasVision = document.querySelector("#ver_mas_vision");
const expandirVision = document.querySelector("#ver_mas_cuadro_vision");
const expandirMision = document.querySelector("#ver_mas_cuadro_mision");
const botonCerrarCuadroVision = document.querySelector("#cerrar_vision");
const botonCerrarCuadroMision = document.querySelector("#cerrar_mision");
const botonMenuResponsive = document.querySelector(".menu");
const mostrarMenuResponsive = document.querySelector(".ul");


// Funciones de manejo de eventos
const mostrarElemento = (elemento) => {
    elemento.style.display = "block";
};

const ocultarElemento = (elemento) => {
    elemento.style.display = "none";
};

// Asignar eventos
botonMenuResponsive.addEventListener("click", () => mostrarElemento(mostrarMenuResponsive));

botonVerMasMision.addEventListener("click", () => mostrarElemento(expandirMision));
botonCerrarCuadroMision.addEventListener("click", () => ocultarElemento(expandirMision));
botonVerMasVision.addEventListener("click", () => {
    mostrarElemento(expandirVision);
    // Aquí puedes añadir cualquier otra lógica que necesites al abrir la visión
});
botonCerrarCuadroVision.addEventListener("click", () => ocultarElemento(expandirVision));
