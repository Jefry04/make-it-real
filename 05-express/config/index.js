const config = {
    port : process.env.PORT,
    salt : process.env.SALT,
    weatherKey : process.env.WEATHER_KEY,
    jwtKey : process.env.JWT_KEY
}

module.exports = config;
