import { TaskList } from "./../../sections/tareas/dbTareas.js";
import { saveTareasToStorage } from "./../localStorage/Storage.js";

let ItemTarea = (estado, tarea, prioridad, descripcion) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    let etiquetaEstado = document.createElement("input");
    etiquetaEstado.type = "checkbox";
    etiquetaEstado.checked = estado;

    let etiquetaTarea = document.createElement("p");
    etiquetaTarea.textContent = tarea;

    let etiquetaVerMas = document.createElement("button");
    etiquetaVerMas.textContent = "Ver más";

    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.className = "prioridad-tarea";
    etiquetaPrioridad.textContent = prioridad;

    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar";
    btnEliminar.innerHTML = `<img src="./assets/icons/eliminar.svg" alt="Eliminar">`;

    div.appendChild(etiquetaEstado);
    div.appendChild(etiquetaTarea);
    div.appendChild(etiquetaVerMas);
    div.appendChild(etiquetaPrioridad);
    div.appendChild(btnEliminar);

    etiquetaVerMas.addEventListener("click", () => {
        alert(`Descripcion: ${descripcion}`);
    });

    etiquetaEstado.addEventListener("change", () => {
        const index = TaskList.findIndex(t => t.tarea === tarea);
        if (index > -1) {
            TaskList[index].estado = etiquetaEstado.checked;
            saveTareasToStorage(TaskList);
        }
    });
    
    btnEliminar.addEventListener("click", () => {
        const index = TaskList.findIndex(t => t.tarea === tarea);
        
        if (index > -1) {
            TaskList.splice(index, 1);
            saveTareasToStorage(TaskList);
            div.remove();
        }
    });

    return div;
}

export { ItemTarea };