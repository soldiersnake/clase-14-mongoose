import mongoose from "mongoose";
const {Schema} = mongoose;

const userScheme = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    dni: {type: String, required: true, unique: true},
    curso: {type: String, required: true},
    nota: {type: Number, required: true},
});

const UserModel = mongoose.model('User', userScheme);

export default UserModel;