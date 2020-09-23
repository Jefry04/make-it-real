const bmi = (weight, height) => {
    return weight /(height*height);
};

module.exports = bmi ; // exportar funcion bmi para que se pueda llamar desde otro archivo, 
                        // se vuelve un modulo que se puede ejecutar desde cualquier parte de la aplicacion