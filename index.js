require("@babel/register")({
  presets: ["@babel/preset-react"],
});

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Inicio from "./src/Pages/Inicio/Inicio";

app.use(express.static("./src/Pages/Inicio.css")); // Reemplaza "public" con la ruta a tu directorio de archivos estáticos

const app = express();
app.get("/", (req, res) => {
  const html = renderToString(<Inicio />);
  console.log("Puerto Abierto");
  res.send(html);
});
app.listen(3000);
