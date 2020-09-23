let entrada = process.argv;
let comparar = entrada [2]
const datos = entrada.splice (3,entrada.length-3);
const frase = datos.join (" ");

let textEncripted ;

//console.log (frase);
const cryptoJS = require("crypto-js");
const key = "secret-key";

if (comparar === "1")
{
    textEncripted = cryptoJS.AES.encrypt(frase,key).toString();
    console.log(textEncripted);
}
 if (comparar ==="2"){
    const bytes = cryptoJS.AES.decrypt(frase, key);
    const textDecripted = bytes.toString(cryptoJS.enc.Utf8);
     console.log(textDecripted);
}
