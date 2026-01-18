import { TaskList } from './dbTareas.js';
import { ItemTarea } from '../../common/itemTarea/ItemTarea.js';

let Tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    sectionTareas.appendChild(h2);

    TaskList.forEach((task) => {
        sectionTareas.appendChild(ItemTarea(task.estado,
            task.tarea, task.prioridad, task.descripcion));
    });

    return sectionTareas;
};

export { Tareas };