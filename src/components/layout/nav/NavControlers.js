import { Contactos } from "./../../sections/contactos/Contactos.js"
import { NewContactForm } from "./../../sections/newContactForm/NewContactForm.js"

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(NewContactForm());
}

export { viewContacts, viewNewContacts};