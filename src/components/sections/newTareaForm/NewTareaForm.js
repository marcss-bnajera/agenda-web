import { saveTareasToStorage } from "../../common/localStorage/Storage.js";
import { TaskList } from "./../tareas/dbTareas.js";

let FormularioTarea = () => {

    let sectionFormulario = document.createElement("section");
    sectionFormulario.className = "formulario";

    let h2 = document.createElement("h2");
    h2.textContent = "Nueva tarea";

    let form = document.createElement("form");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Tarea";
    inputNombre.required = true;

    let inputDescripcion = document.createElement("input");
    inputDescripcion.type = "text";
    inputDescripcion.placeholder = "Descripción";
    inputDescripcion.required = true;

    let inputPrioridad = document.createElement("input");
    inputPrioridad.type = "text";
    inputPrioridad.placeholder = "Prioridad";
    inputPrioridad.required = true;

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Guardar";

    let buttonC = document.createElement("button");
    buttonC.type = "button";
    buttonC.textContent = "Cancelar";

    buttonC.addEventListener("click", () => {
        form.reset();
    });

    form.appendChild(inputNombre);
    form.appendChild(inputDescripcion);
    form.appendChild(inputPrioridad);
    form.appendChild(button);
    form.appendChild(buttonC);

    sectionFormulario.appendChild(h2);
    sectionFormulario.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tarea = {
            estado: false,
            tarea: inputNombre.value,
            descripcion: inputDescripcion.value,
            prioridad: inputPrioridad.value
        };

        console.log(TaskList);
        TaskList.push(tarea);

        saveTareasToStorage(TaskList);

        form.reset();
    });

    return sectionFormulario;
};

export { FormularioTarea };