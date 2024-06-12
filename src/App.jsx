/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Inicio from "./components/Inicio";
import Comidas from "./components/Comidas";
import DetalleUsuario from "./components/DetalleUsuario";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Comidas" element={<Comidas />} />
        <Route path="/Detalle" element={<DetalleUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
