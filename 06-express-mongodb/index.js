require('dotenv').config();
const mongoose = require ("mongoose");
const express = require("express");
const app = express(); 
const config = require("./config");
const api = require ("./api");

app.use(express.json());  
app.use("/api", api);
app.use("/api/v1", api);

const mongooseConfig = { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};
mongoose.connect(config.dbConnectionString, mongooseConfig);

app.listen(config.port, () => {
    console.log("servidor iniciado...");
});