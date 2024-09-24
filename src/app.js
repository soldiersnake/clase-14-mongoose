import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routerUser from "./router/user.router.js";

const app = express();
const PORT = 3037;

//importante para trabajar con json y capturar correcytamente archivos del body
app.use(express.json()); 

//configuracion para poder usar las variables de entorno
dotenv.config();

const uriConexcion = process.env.URIMONGO;

mongoose.connect(uriConexcion)
    .then(() => console.log('Conectado a base de datos MongoDb Atlas'))
    .catch((error) => console.error('Error en conexcion :', error))

app.use('/', routerUser);

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);  
});
