/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Detalle", { state: { username, password } });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "1vh",
          width: "20%", // Asegura que el contenedor ocupe todo el ancho posible
          margin: "8px", // Opcional: añade un margen alrededor del contenedor
        }}
        noValidate
        autoComplete="off"
        component="form"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Usuario"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" variant="contained" fullWidth>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
