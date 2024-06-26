import { Schema, model } from "mongoose";

//Este modelo se puede utilizar para interactuar con la colección users en la base de datos MongoDB
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: String,
    age: Number,

});

export default model('User', userSchema);