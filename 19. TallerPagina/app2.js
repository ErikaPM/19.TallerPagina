const contenedor = document.querySelector("#contenedor");
const usuarioSaludo = document.querySelector("#usuarioSaludo");
const listasTareas = document.querySelector("#listasTareas");
const tareas = document.querySelector("#tareas");
const boton = document.querySelector("#boton2");
const tareasImpresas = document.querySelector("#tareasImpresas");
const misTareas = document.querySelector("#misTareas");
const boton2 = document.querySelector("#boton2");
const nuevasListas = document.querySelector("#nuevasListas");
const boton1 = document.querySelector("#boton");
const form = document.querySelector("#form");

const tareasPendientes = [];
form.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.id === "boton2") {
    if (tareas.value != " ") {
      tareasPendientes.push(tareas.value);
    }

    if (tareasPendientes.length != 0) {
      tareasImpresas.innerHTML = tareasPendientes.join("<br>");
      // document.body.appendChild(elemento);
    }
  }
});
