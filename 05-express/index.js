const express = require("express");
const fs = require("fs");
const app = express(); // instancia de express
const port = 3000;

const logMiddleware = (req, res, next) => {
  console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);
  next();
}

const logMiddlewareUser = (req, res, next) => {
  const fecha = new Date(Date.now()).toTimeString();
  const metodo = req.method;
  const path = req.path;
  const ip = req.ip;
  const archivos = fs.createWriteStream("./files/acces.log", { flags: 'a' });
  archivos.once("open", (f) => {
    archivos.write(`\nLa fecha es ${fecha} \nLa IP de la consulta es ${ip} \nel metodo es ${metodo}\n La ruta es${path} `)
  });
  next();
}

// inicializa el servidor
app.listen(port, () => {
  console.log("servidor iniciado...");
}); // se convierte en servidor de aplicacion y escucha por un puerto

// definir rutas
app.get("/", logMiddleware, (req, res) => {
  res.send("HOME");
});

app.get("/users", logMiddlewareUser, (req, res) => {
  res.send("Esta es la ruta de usuarios");
});

app.get("/users/:id", logMiddleware, (req, res) => {
  res.send(`Esta es la pagina del usuario ${req.params.id}`);
});

app.get("/tweets", logMiddleware, (req, res) => {
  //const id = req.query.id;
  //const username =req.query.username;
  const { id, username } = req.query;
  res.send(`Este es el Tweet ${id} y el usuario es ${username}`);
});
