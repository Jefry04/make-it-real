const config = {
    port : process.env.PORT,
    salt : process.env.SALT,
    weatherKey : process.env.WEATHER_KEY,
    jwtKey : process.env.JWT_KEY,
    twitter: {
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        accessTokenKey: process.env.ACCESS_TOKEN_KEY,
        accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
    }
}

module.exports = config;
