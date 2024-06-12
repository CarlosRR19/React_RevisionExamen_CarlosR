/* eslint-disable no-unused-vars */
import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Inicio.css";

export default function Inicio() {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setComidas(data.categories));
      //then((data) => setComidas(data.categories[0]));
  }, []);

  const firstComida = comidas.length > 0 ? comidas[0] : null;
  // const firstThreeComidas = comidas.slice(0, 3);

  return (
    <div className="character-list">
      {firstComida && (
        <Card
          sx={{ maxWidth: 300, margin: "8px" }}
          key={firstComida.idCategory}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image={firstComida.strCategoryThumb}
              alt={firstComida.strCategory}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {firstComida.strCategory}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {firstComida.strCategoryDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}
