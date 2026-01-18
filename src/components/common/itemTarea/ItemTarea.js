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

    //esto es para poder cambiar el estado de la tarea, cambiar de true a false y de false a true :)
    etiquetaEstado.addEventListener("change", () => {
        if (etiquetaEstado.checked) {
            console.log("La tarea está completada");
        } else {
            console.log("La tarea está incompleta");
        }

        estado = etiquetaEstado.checked;
        console.log("Estado actualizado:", estado);
    });


    return div;
}

export { ItemTarea };