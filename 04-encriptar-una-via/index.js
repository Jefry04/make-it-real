
const bcrypt = require("bcrypt");
let entrada = process.argv;
let comparar = entrada [2]
const frase = entrada[3];


console.log (entrada[3]);

const saltRounds = 10 ; // cadena de texto que genera aleatorio

if (comparar === "1")
{
    const salt = bcrypt.genSaltSync(saltRounds);
    const textEncripted = bcrypt.hashSync(frase, salt);
    console.log(textEncripted);

} if (comparar ==="2"){
 const hash = entrada [4];
 const respuesta = bcrypt.compareSync(frase,hash);
 console.log (respuesta);

}

