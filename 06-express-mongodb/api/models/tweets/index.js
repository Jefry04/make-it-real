const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const collection = "tweet"; //referencia a la coleccion de la BD

const schema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.ObjectId, ref: "users" },
    likes: { type: Number },
    comments: [{ 
                comment: { type: String, required: true }, 
                user: { type: Schema.ObjectId, ref: "users" },
                }],
}, { timestamps: true });

const model = mongoose.model(collection, schema);

module.exports = model;