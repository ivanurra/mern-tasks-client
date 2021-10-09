import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  // Extraer si el proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;

  // Extraer el proyecto
  const [proyectoAtual] = proyecto;

  // Se ejecuta al pulsar el botón de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoAtual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Done
          </button>
        ) : (
          <button type="button" className="incompleto">
            Pending
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Tarea;
