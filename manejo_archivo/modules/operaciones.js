const suma = (sumando1, sumando2) => sumando1 + sumando2;

const resta = (minuendo, sustraendo) => minuendo - sustraendo;

const multiplicacion = (multiplicando, multiplicador) => multiplicando * multiplicador;

const division = (dividendo, divisor) => {
    if (divisor === 0 )
    return null;
    return dividendo / divisor;
};

module.exports = {suma,resta,multiplicacion,division};