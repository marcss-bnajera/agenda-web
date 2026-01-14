import { ContactList } from "../contactos/db.js";

let FormularioContacto = () => {
    let sectionFormulario = document.createElement("section");
    sectionFormulario.className = "formulario";

    let h2 = document.createElement("h2");
    h2.textContent = "Nuevo contacto";

    let form = document.createElement("form");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.required = true;

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Guardar";

    let buttonC = document.createElement("button");
    buttonC.type = "submit";
    buttonC.textContent = "Cancelar";

    form.appendChild(inputNombre);
    form.appendChild(inputTelefono);
    form.appendChild(button);
    form.appendChild(buttonC);

    sectionFormulario.appendChild(h2);
    sectionFormulario.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let contacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };

        console.log(contacto);
        ContactList.push(contacto);

    });

    return sectionFormulario;
}

export { FormularioContacto };
