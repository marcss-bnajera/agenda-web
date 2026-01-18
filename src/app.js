import { Button } from "./components/common/button/Button.js";
import { viewContacts, viewNewContacts, viewNewTarea, viewTareas } from "./components/layout/nav/NavControlers.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";

//App
let app = document.getElementById("app");

//section menu
let nav = document.getElementById("nav");

//Agregar Botones
nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "user.svg",
    viewContacts
));
nav.appendChild(Button(
    "Crear Contacto", 
    "plus", 
    "plus.svg",
    viewNewContacts
));
nav.appendChild(Button(
    "Lista de Tareas", 
    "todoList", 
    "list.svg", 
    viewTareas
));

nav.appendChild(Button("Crear Tarea", 
    "crearTarea", 
    "tarea.svg",
    viewNewTarea
));


//section container
let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

//container.appendChild(FormularioContacto());
