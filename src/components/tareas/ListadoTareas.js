import React, { useContext, Fragment } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  // Obtener el State de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Select a project</h2>;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [];

  // Elimina un proyecto
const onClickEliminar = () => {
  eliminarProyecto(proyectoActual.id)
}

  return (
    <Fragment>
      <h2>Project: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>
        Delete project &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
