import React from "react";

const FormTarea = () => {
  return (
    <div className="formulario">
      <form>
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
