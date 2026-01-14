import { Contactos } from "./../../sections/contactos/Contactos.js"
import { FormularioContacto } from "./../../sections/newContactForm/NewContactForm.js"

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(FormularioContacto());
}

export { viewContacts, viewNewContacts};