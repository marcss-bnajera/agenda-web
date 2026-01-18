import { Contactos } from "./../../sections/contactos/Contactos.js"
import { FormularioContacto } from "./../../sections/newContactForm/NewContactForm.js"
import { Tareas } from "./../../sections/tareas/Tareas.js";
import { FormularioTarea } from "./../../sections/newTareaForm/NewTareaForm.js";

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(FormularioContacto());
}

let viewTareas = function () {
    container.innerHTML = "";
    container.appendChild(Tareas());
}

let viewNewTarea = function () {
    container.innerHTML = "";
    container.appendChild(FormularioTarea());
}

export { viewContacts, viewNewContacts, viewTareas, viewNewTarea };