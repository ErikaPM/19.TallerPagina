const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#correo");
const celular = document.querySelector("#celular");
const contrasena = document.querySelector("#contrasena");
const form = document.querySelector("#form");
const errores = document.querySelector("#errores");

form.addEventListener("click", e => {
  e.preventDefault();
  let mensajes = [];
  if (e.target.id === "boton") {
    if (nombre.value === "" || nombre.value === null) {
      mensajes.push("Diligenciar campo nombre");
    }
    if (apellido.value === "" || apellido.value === null) {
      mensajes.push("Diligenciar campo apellido");
    }
    if (correo.value === "" || correo.value === null) {
      mensajes.push("Diligenciar campo correo");
    }
    if (correo.value != "@") {
      mensajes.push("Correo no es válido");
    }

    if (celular.value === "" || celular.value === null) {
      mensajes.push("Diligenciar campo celular");
    }

    if (contrasena.value === "" || contrasena.value === null) {
      mensajes.push("Diligenciar campo contrasena");
    }
    if (parseInt(celular.value) != celular.value) {
      mensajes.push("Sólo puedes usar números");
    }

    if (contrasena.value < 6 || contrasena.value > 10) {
      mensajes.push("Contraseña debe ser mayor de 6 caracteres y menor de 10");
    }
    if (mensajes.length != 0) {
      errores.innerHTML = mensajes.join(" ,");
    }
    if (mensajes.length === 0) {
      e.preventDefault();
      direccionar();
    }
  }
});

function direccionar() {
  ("location.href='http://127.0.0.1:5500/AM/19.%20TallerPagina/index2.html'");
}

errores.setAttribute("align", "center");
