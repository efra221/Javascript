const tarea = document.getElementById('tarea')
const fecha = document.getElementById('fecha')
const tareas = document.getElementById('tareas')
let boton = document.getElementById("miBoton");
let caja = document.getElementById("contenedor");


// caja.addEventListener("mouseover", function() {
//     caja.style.backgroundColor = "blue";
// });

// caja.addEventListener("mouseout", function() {
//     caja.style.backgroundColor = "white";
// });

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}



document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
    if (evento.key == "Enter") {
        guardarTarea()
    }
});

let listaTareas = [];
function guardarTarea() {
    let txtTarea = tarea.value;
    let dateFecha = fecha.value;

    console.log(txtTarea);
    console.log(dateFecha);

    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = "<h6>" + txtTarea + "</h6><p>" + dateFecha + "</p>";
    tareas.appendChild(nuevaTarea)
    let tareasGuardar = {"tarea":txtTarea, "fecha":dateFecha}
    listaTareas.push(tareasGuardar)
    localStorage.setItem('tareas', JSON.stringify(listaTareas));

    // Crear botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.addEventListener('click', function() {
        tareas.removeChild(nuevaTarea);
    });

    // Agregar el botón al elemento de la tarea
    nuevaTarea.appendChild(botonEliminar);

    // Agregar la tarea completa (con el botón) a la lista
    tareas.appendChild(nuevaTarea)  ;

    localStorage.setItem('nombre', 'Juan');
    let nombre = localStorage.getItem('nombre');
    console.log(nombre); // Muestra "Juan"

    
}


function cargarTareas() {
    let listaTareas = JSON.parse(localStorage.getItem('tareas'))
    console.log(listaTareas)

    for (let i = 0; i < listaTareas.length; i++) {
        const nuevaTarea = document.createElement["li"];
        nuevaTarea.innerHTML = "<h1>" +  listaTareas[i].tarea + "</h1><p>" + listaTareas[i].dateFecha + "</p>"
        tareas.appendChild(nuevaTarea)
    }
}