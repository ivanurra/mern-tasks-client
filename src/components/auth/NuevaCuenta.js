import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // Extraemos de usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // El usuario pulsa para iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    // Validación

    // Password mínimo 6 caracteres

    // Dos passwords iguales

    // Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
      <h1>
          MERN<span>Tasks</span>
        </h1>
        <h2>Sign up</h2>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Your name."
              value={nombre}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email."
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password (At least 6 characters)."
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Repeat Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repeat password."
              value={confirmar}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Register"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Back to home.
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
