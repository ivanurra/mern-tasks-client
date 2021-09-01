import React from "react";

const Login = () => {
  const onChange = () => {};

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log In</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Log in"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
