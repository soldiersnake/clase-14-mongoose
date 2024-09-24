import mongoose from "mongoose";
const {Schema} = mongoose;


//el esquema es la estructura que tendra el objeto que se inserte en la coleccion
const userScheme = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    dni: {type: String, required: true, unique: true},
    curso: {type: String, required: true},
    nota: {type: Number, required: true},
});


// primer parametro 'User'= nombre del modelo
// segundo parametro userSchema = el esquema que define la estructura de los documentos almacenados en la coleccion
// tercer parametro Opcional, seria el nombre especifico de la coleccion, si no existe la crea
// si no se aclara como predeterminada en el tercer parametro va el nombre del modelo como coleccion
const UserModel = mongoose.model('User', userScheme);

export default UserModel;