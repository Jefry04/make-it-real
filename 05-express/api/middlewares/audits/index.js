const fs = require("fs");
const dates= require ("./../../lib/dates")

  const audits = (req, res, next) => {
    const date = dates.getColombianDate(); 
    const method = req.method;
    const path = req.path;
    const ip = req.ip;
    const username = req.username;
    const data = JSON.stringify(req.body);

    const linea = `${date}::${username}::${ip}::${method}::${path}::${data} \n`;
    const archivos = fs.createWriteStream("./logs/audits.log", { flags: 'a' });
    archivos.once("open", (f) => {
      archivos.write(linea)
    });
    next();
  }

  module.exports = audits;