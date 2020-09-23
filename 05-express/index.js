const express = require("express");
const fs = require("fs");
const app = express(); // instancia de express
const port = 3000;
let users = [];

const logMiddleware = (req, res, next) => {
  console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);
  next();
}
app.use(logMiddleware); // Toda la aplicacion (app) usa el objeto middleware
app.use(express.json());  //recibir info en formato JSON

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

app.listen(port, () => {
  console.log("servidor iniciado...");
});


app.get("/", logMiddleware, (req, res) => {
  res.send("HOME");
});


app.route("/users")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    const user = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };

    const findUser = users.find(u => u.username === user.username);
    if (findUser === undefined) {
      users.push(user);
      res.send(`El usuario creado es: ${user.name}`)
    } else {
      res.send("el usuario ya existe");
    }

  })

  app.route("/users/:username")
  .get((req, res) => {
      const username = req.params.username;
      const findUser = users.find(u => u.username === username);
      if( findUser === undefined ){
          res.status(500).send("El usuario consultado no existe");
      }else{
          res.status(200).send(findUser);
      }
  })
 
  .delete((req, res) => {
      const username = req.params.username;
      const findUser = users.find(u => u.username === username);
      if( findUser === undefined ){
          res.status(500).send("El usuario no existe");
      }else{
        const result = users.filter(u => u.username !== username);
        users = result;
        res.status(200).send(users);
          
      }
  })
  .put((req, res) => {
    const username = req.params.username;
    const findUser = users.find(u => u.username === username);
    if( findUser === undefined ){
        res.status(500).send("El DELETE no existe");
    }else{
        users.splice(0);
        users.push 
        res.status(200).send(users);
    }
});

  




app.get("/tweets", logMiddleware, (req, res) => {
  //const id = req.query.id;
  //const username =req.query.username;
  const { id, username } = req.query;
  res.send(`Este es el Tweet ${id} y el usuario es ${username}`);
});
