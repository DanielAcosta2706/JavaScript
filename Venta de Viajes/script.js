// Las variables `barcelona`, `roma`, `paris` y `londres` se importan desde el archivo `ciudades.js`, que contiene la información de cada ciudad. Asegúrate de que este archivo esté disponible en el repositorio junto con el código JavaScript.

import { barcelona, roma, paris, londres } from "./ciudades.js";

// El código utiliza el método `document.querySelectorAll` y `document.getElementById` para obtener los elementos del DOM necesarios para actualizar la información de la página. Estos elementos se asignan a las siguientes variables:
// -   `enlaces`: una colección de todos los elementos de ancla (`<a>`) en la página.
// -   `tituloElemento`: el elemento de título (`<h1>`) donde se mostrará el título de la ciudad seleccionada.
// -   `subTituloElemento`: el elemento de subtítulo (`<h2>`) donde se mostrará el subtítulo de la ciudad seleccionada.
// -   `parrafoElemento`: el elemento de párrafo (`<p>`) donde se mostrará la descripción de la ciudad seleccionada.
// -   `precioElemento`: el elemento donde se mostrará el precio de la ciudad seleccionada.

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

console.log(enlaces);

// Se agrega un evento `click` a cada enlace mediante un bucle `forEach`. Cuando se hace clic en un enlace, se ejecuta la función de devolución de llamada proporcionada. El código dentro de esta función realiza las siguientes acciones:
// -   Remueve la clase `active` de todos los enlaces utilizando otro bucle `forEach`.
// -   Agrega la clase `active` al enlace actual (`this`).
// -   Obtiene el contenido correspondiente a la ciudad seleccionada utilizando la función `obtenerContenido` y el texto del enlace actual.
// -   Actualiza los elementos del DOM con la información de la ciudad seleccionada.

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function () {
    // Remover la clase "active" de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    // Agregar la clase "active" al enlace actual
    this.classList.add("active");

    // Obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent);
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

// La función `obtenerContenido` toma el texto del enlace como parámetro y devuelve el contenido correspondiente de la ciudad desde el archivo `ciudades.js`. Utiliza un objeto `contenido` para mapear el texto del enlace con el contenido de la ciudad.

const obtenerContenido = (enlace) => {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    Paris: paris,
    Londres: londres,
  };
  return contenido[enlace];
};
