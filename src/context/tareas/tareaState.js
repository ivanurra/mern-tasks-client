import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Choose Platform", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Choose Color", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Choose Pay method", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Choose Hosting", estado: true, proyectoId: 4 },
      { id: 5, nombre: "Choose Color", estado: false, proyectoId: 1 },
      { id: 6, nombre: "Choose Pay method", estado: false, proyectoId: 2 },
      { id: 7, nombre: "Choose Hosting", estado: true, proyectoId: 3 },
      { id: 8, nombre: "Choose Hosting", estado: true, proyectoId: 4 },
      { id: 9, nombre: "Choose Color", estado: false, proyectoId: 1 },
      { id: 10, nombre: "Choose Pay method", estado: false, proyectoId: 2 },
      { id: 11, nombre: "Choose Hosting", estado: true, proyectoId: 3 },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
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

  // Eliminar tarea por su id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Cambia el estado de cada tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // Extrae una tarea para edición
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
