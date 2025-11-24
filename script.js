//VARIABLES GLOBALES

let btnAbriModal = document.getElementById("abrirModal"); //Boton de abrir el modal de confirmación
let btnEliminaTodo = document.getElementById("borrarTodo"); //Boton de confirmación para borrar todo
let modalBorrar = document.getElementById("modalBorrar"); //Modal
let btnCancelar = document.getElementById("cancelar-modal");
let contenidoTarea = document.getElementById("taskContainer");

//Abrir modal
btnAbriModal.addEventListener("click", function () {
  modalBorrar.style.display = "flex";
});

//Funcionalidad para cerrar modal, opción: Cancelar
btnCancelar.addEventListener("click", function () {
  modalBorrar.style.display = "none";
});

//Funcionalidad del boton de confirmación para borrar todo
btnEliminaTodo.addEventListener("click", function () {
  contenidoTarea.innerHTML = ""; //Vacear las tareas
  modalBorrar.style.display = "none";
  btnAbriModal.style.display = "none";
});

//Agregar tarea
document.getElementById("addTaskBtn").addEventListener("click", function () {
  let entradaTarea = document.getElementById("newTask").value;
  if (!entradaTarea) {
    //Entrada vacía
    alert("Asegúrese de ingresar una tarea primero");
    console.log("Ingrese una tarea primero");
  } else {
    //Agregando tareas

    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = entradaTarea;
    contenidoTarea.appendChild(nuevaTarea);

    //La tarea se ingresó correctamente
    console.log(`la tarea es: ${nuevaTarea.textContent}`);

    //Limpiar la entrada después de agregar
    //document.getElementById("newTask").value = "";

    //Botón de eliminado
    let btn_eliminar = document.createElement("button");
    btn_eliminar.textContent = "Eliminado";
    nuevaTarea.appendChild(btn_eliminar);
    btn_eliminar.classList.add("btn-eliminar");
    //Evento de click al eliminar
    btn_eliminar.addEventListener("click", function () {
      contenidoTarea.removeChild(nuevaTarea);
      if (contenidoTarea.children.length >= 2) {
        btnAbriModal.style.display = "block";
      } else {
        btnAbriModal.style.display = "none";
      }
    });

    if (contenidoTarea.children.length >= 2) {
      btnAbriModal.style.display = "block";
    } else {
      btnAbriModal.style.display = "none";
    }
  }
});
