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

    let btnEditar = document.createElement("button");
    btnEditar.className = "btn-eliminar";
    btnEditar.innerHTML = '<img src="./assets/icons/editar.svg" alt="Editar">';
    btnEditar.style.marginRight = "10px";

    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar";
    btnEliminar.innerHTML = `<img src="./assets/icons/eliminar.svg" alt="Eliminar">`;

    div.appendChild(etiquetaEstado);
    div.appendChild(etiquetaTarea);
    div.appendChild(etiquetaVerMas);
    div.appendChild(etiquetaPrioridad);
    div.appendChild(btnEditar);
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

    btnEditar.addEventListener("click", () => {
        const index = TaskList.findIndex(t => t.tarea === tarea);

        if (index > -1) {
            let nuevoNombre = prompt("Editar nombre de la tarea:", TaskList[index].tarea);
            let nuevaDesc = prompt("Editar descripción:", TaskList[index].descripcion);
            
            if (nuevoNombre && nuevaDesc) {
                TaskList[index].tarea = nuevoNombre;
                TaskList[index].descripcion = nuevaDesc;
                
                saveTareasToStorage(TaskList);
                
                etiquetaTarea.textContent = nuevoNombre;
                tarea = nuevoNombre;
                descripcion = nuevaDesc;
            }
        }
    })
    
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