import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  // Extraer si el proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para extraer el proyecto actual
  // eslint-disable-next-line no-unused-vars
  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar

    // pasar la validación

    // agregar la nueva tarea al state de tareas

    // reiniciar el form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name Task..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            placeholder="Name Task..."
            name="nombre"
            value="Add task"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
