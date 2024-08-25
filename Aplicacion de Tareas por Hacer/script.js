const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listContainer = document.querySelector(".list-container");

form.addEventListener("submit", handleSubmit);

message();

function message() {
  const h3 = document.createElement("h3");
  h3.classList.add("task-message");
  h3.textContent = listContainer.firstElementChild
    ? "Tareas por Hacer"
    : "No hay tareas por Hacer";
  const prevMessage = document.querySelector(".task-message");
  if (prevMessage) {
    prevMessage.replaceWith(h3);
    return;
  }
  listContainer.before(h3);
}

function handleSubmit(e) {
  e.preventDefault();
  const inputValue = input.value;
  // console.log(inputValue);
  createTask(inputValue);
  this.reset();
  message();
}

function createTask(value) {
  const newTask = document.createElement("li");
  newTask.textContent = value;
  // console.log(newTask);
  listContainer.prepend(newTask);
  addEvents(newTask);
}

function addEvents(element) {
  element.addEventListener("dblclick", () => {
    element.remove();
    message();
  });
}
