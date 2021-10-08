import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Choose Platform", estado: true, proyectoId: 1 },
      { nombre: "Choose Color", estado: false, proyectoId: 2 },
      { nombre: "Choose Pay method", estado: false, proyectoId: 3 },
      { nombre: "Choose Hosting", estado: true, proyectoId: 4 },
      { nombre: "Choose Color", estado: false, proyectoId: 1 },
      { nombre: "Choose Pay method", estado: false, proyectoId: 2 },
      { nombre: "Choose Hosting", estado: true, proyectoId: 3 },
      { nombre: "Choose Hosting", estado: true, proyectoId: 4 },
      { nombre: "Choose Color", estado: false, proyectoId: 1 },
      { nombre: "Choose Pay method", estado: false, proyectoId: 2 },
      { nombre: "Choose Hosting", estado: true, proyectoId: 3 },
    ],
    tareasproyecto: null,
    errortarea: false,
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Crear las funciones

  // Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Agregar una tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // Valida y muestra un error
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        errortarea: state.errortarea,
        tareasproyecto: state.tareasproyecto,
        obtenerTareas,
        agregarTarea,
        validarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
