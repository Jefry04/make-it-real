const express = require("express");
const fs = require("fs");
const app = express(); // instancia de express
const dotenv= require('dotenv').config();
const config = require("./config");


app.use(express.json());  //recibir info en formato JSON



app.listen(config.port, () => {
  console.log("servidor iniciado...");
});