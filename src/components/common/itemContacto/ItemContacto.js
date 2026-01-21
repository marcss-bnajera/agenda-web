import { viewDetalleContacto } from "../../layout/nav/NavControlers.js";

let ItemContacto = (contactData) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let img = document.createElement("img");
    img.src = `./assets/icons/${contactData.imgContacto || 'user.svg'}`;
    img.style.width = "40px";

    let nombre = document.createElement("p");
    nombre.textContent = contactData.nombre;

    let telefono = document.createElement("p");
    telefono.textContent = contactData.telefono;

    div.appendChild(img);
    div.appendChild(nombre);
    div.appendChild(telefono);

    div.addEventListener("click", () => {
        viewDetalleContacto(contactData);
    });

    div.style.cursor = "pointer";

    return div;
}

export { ItemContacto };