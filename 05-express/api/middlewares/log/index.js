const fs = require("fs");
  const log = (req, res, next) => {
    const fecha = new Date(Date.now()).toTimeString();
    const metodo = req.method;
    const path = req.path;
    const ip = req.ip;
    const archivos = fs.createWriteStream("./logs/acces.log", { flags: 'a' });
    archivos.once("open", (f) => {
      archivos.write(`\nLa fecha es ${fecha} \nLa IP de la consulta es ${ip} \nel metodo es ${metodo}\n La ruta es${path} `)
    });
    next();
  }

  module.exports = log;