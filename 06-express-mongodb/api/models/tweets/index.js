const { truncate } = require("fs");
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const collection = "tweet"; //referencia a la coleccion de la BD

const schema = new Schema ({
    content: { type: String,},
    user : { type: Schema.ObjectId, ref:"users"}, 
    
}, {timestamps : true} );

const model = mongoose.model (collection, schema);

module.exports = model;