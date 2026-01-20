import { viewContacts } from "./../../layout/nav/NavControlers.js";

let DetalleContacto = (contactData) => {
    let div = document.createElement("div");
    div.className = "detalle-contacto";

    let btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";

    let img = document.createElement("img");
    img.src = `./assets/icons/${contactData.imgContacto}`;

    let nombre = document.createElement("p");
    nombre.textContent = contactData.nombre;

    let telefono = document.createElement("p");
    telefono.textContent = contactData.telefono;

    div.appendChild(btnVolver);
    div.appendChild(img);
    div.appendChild(nombre);
    div.appendChild(telefono);

    btnVolver.addEventListener("click", () => {
        viewContacts();
    });

    return div;
}

export { DetalleContacto };
