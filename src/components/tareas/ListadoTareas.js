import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Choose Platform", estado: true },
    { nombre: "Choose Color", estado: false },
    { nombre: "Choose Pay method", estado: false },
    { nombre: "Choose Hosting", estado: true },
  ];
  return (
    <Fragment>
      <h2>Project: Virtual Shop</h2>
      <ul className="listado-tareas">
         {tareasProyecto.length === 0 ? (<li className="tarea"><p>No tasks yet</p></li>) : (tareasProyecto.map(tarea => (
             <Tarea 
                 tarea={tarea}
             />
         )))
         } 
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
