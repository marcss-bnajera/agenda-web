import { viewContacts } from "./../../layout/nav/NavControlers.js";

let DetalleContacto = (contactData) => {
    let section = document.createElement("section");
    section.className = "contenedor-detalle";

    // Botón Volver (con clase propia)
    let btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver a la Agenda";
    btnVolver.className = "btn-volver-detalle";

    let h2 = document.createElement("h2");
    h2.textContent = "Detalles del Contacto";

    let avatar = document.createElement("img");
    avatar.src = `./assets/icons/${contactData.imgContacto || 'user.svg'}`;
    avatar.className = "avatar-detalle";

    let nombre = document.createElement("h3");
    nombre.textContent = contactData.nombre || "Sin Nombre";

    let infoContainer = document.createElement("div");
    infoContainer.className = "info-detalle";

    let telefono = document.createElement("p");
    telefono.innerHTML = `<span>Teléfono:</span> ${contactData.telefono || 'No registrado'}`;

    infoContainer.appendChild(nombre);
    infoContainer.appendChild(telefono);
    
    section.appendChild(h2);
    section.appendChild(avatar);
    section.appendChild(infoContainer);
    section.appendChild(btnVolver);

    btnVolver.addEventListener("click", () => {
        viewContacts();
    });

    return section;
}

export { DetalleContacto };