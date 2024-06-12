/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";

const DetalleUsuario = () => {
  const location = useLocation();
  const { username, password } = location.state || {};

  return (
    <div>
      <h1>
        Bienvenido {username}! Tu contraseña es {password}
      </h1>
    </div>
  );
};

export default DetalleUsuario;
