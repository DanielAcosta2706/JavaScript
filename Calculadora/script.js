// Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `value` que representa el valor que se debe agregar. Utiliza `document.querySelector('.pantalla')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `value` concatenando el nuevo valor.

const agregar = (value) => {
  document.querySelector(".pantalla").value += value;
  // document.getElementById("pantalla").value += value;
};

// La función `calcular()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.querySelector('.pantalla').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. El resultado se almacena en la variable `result`. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

const calcular = () => {
  const valorPantalla = document.querySelector(".pantalla").value;
  const result = eval(valorPantalla);
  document.querySelector(".pantalla").value = result;
};

// La función `limpiarPantalla()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

const borrar = () => {
  document.querySelector(".pantalla").value = "";
};
