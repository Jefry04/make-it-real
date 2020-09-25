const express = require("express");
const app = express(); // instancia de express
const dotenv= require('dotenv').config();
const config = require("./config");
const api = require ("./api");

app.use(express.json());  //recibir info en formato JSON
app.use("/api",api);
app.use("/api/v1",api);


app.listen(config.port, () => {
  console.log("servidor iniciado...");
});