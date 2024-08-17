//  https://openweathermap.org/          Api del Clima

let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "0eade7700ae96053767be6fec53862bc";
let difKelvin = 273.15;

document
  .getElementById("botonBusqueda")
  .addEventListener("click", obtenerCiudad);

function obtenerCiudad() {
  const ciudad = document.getElementById("ciudadEntrada").value;
  console.log(ciudad);
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
}

const fetchDatosClima = (ciudad) => {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    // .then((data) => console.log(data));
    .then((data) => mostrarDatosClima(data));
};

const mostrarDatosClima = (data) => {
  // console.log(data);
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;
  let urlIcono = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(
    temperatura - difKelvin
  )}ºC`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es: ${humedad}%`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `${urlIcono}`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
};
