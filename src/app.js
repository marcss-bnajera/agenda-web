import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";

//App
let app = document.getElementById("app");

//section menu
let nav = document.getElementById("nav");

//Agregar Botones
nav.appendChild(Button("Agenda", "agenda", "user.svg"));
nav.appendChild(Button("Crear Contacto", "plus", "plus.svg"));
nav.appendChild(Button("ToDoList", "todoList", "list.svg"));
nav.appendChild(Button("Crear Tarea", "crearTarea", "plus.svg"))

//section container
let container = document.getElementById("container");
container.appendChild(Contactos());
