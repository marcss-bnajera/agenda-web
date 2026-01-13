import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("user.svg", "Marcos Beteta", "12345678"));
    sectionContactos.appendChild(ItemContacto("user.svg", "Sebastian Cho", "87654321"));
    sectionContactos.appendChild(ItemContacto("user.svg", "Andy Heroico", "14725836"));
    sectionContactos.appendChild(ItemContacto("user.svg", "Bradley Oliva ", "36925814"));
    sectionContactos.appendChild(ItemContacto("user.svg", "Toñito ", "48261597"));

    return sectionContactos;
}

export { Contactos };