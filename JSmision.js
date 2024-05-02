const botonVerMasMision = document.querySelector("#ver_mas_mision");
const botonVerMasVision = document.querySelector("#ver_mas_vision");
const expandirVision = document.querySelector("#ver_mas_cuadro_vision");
const expandirMision = document.querySelector("#ver_mas_cuadro_mision");
const botonCerrarCuadroVision = document.querySelector("#cerrar_vision");
const botonCerrarCuadroMision = document.querySelector("#cerrar_mision");



const mostrarElemento = (elemento) => {
    elemento.style.display = "block";
};


const ocultarElemento = (elemento) => {
    elemento.style.display = "none";
};
// Asignar eventos

botonVerMasMision.addEventListener("click", () => mostrarElemento(expandirMision));
botonVerMasVision.addEventListener("click", () => {
    mostrarElemento(expandirVision);
    // Aquí puedes añadir cualquier otra lógica que necesites al abrir la visión
});
botonCerrarCuadroVision.addEventListener("click", () => ocultarElemento(expandirVision));
botonCerrarCuadroMision.addEventListener("click", () => ocultarElemento(expandirMision));

