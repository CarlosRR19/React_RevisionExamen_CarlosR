/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Comidas = () => {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setComidas(data.categories));
  }, []);

  return (
    <div className="character-list">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: 8,
        }}
      >
        {comidas.map((comida) => (
          <React.Fragment key={comida.idCategory}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={comida.strCategory}
                  src={comida.strCategoryThumb}
                />
              </ListItemAvatar>
              <ListItemText primary={comida.strCategory} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Comidas;
