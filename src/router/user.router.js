import { Router } from "express";
import UserModel from "../models/user.models.js";

const routerUser = Router();

//cracion de usuario
routerUser.post('/estudiantes', async (req, res) => {
    try {
        //utilizamos el modelo(schema) para la creacion del usuario
        const estudiante = new UserModel(req.body);
        console.log('Info del body :', req.body);
        
        console.log('El estudiante es :', estudiante);
        //aqui salvamos estudiante en BD
        await estudiante.save();
        res.status(201).send(estudiante);
    } catch (error) {
        res.status(400).send(error);
    }
});

//traer usuarios
routerUser.get('/estudiantes', async (req, res) => {
    try {
        //buscamos todos los usuarios a travez del metodo find, gracias a mongoose
        const estudiantes = await UserModel.find({})
        console.log('Estudiantes :', estudiantes);
        res.send(estudiantes)
    } catch (error) {
        res.status(500).send(error);
    }
});

//traemos usuarios por ID
routerUser.get('/estudiantes/:id', async (req, res) => {
    try {
        //metodo de findById
        const estudiante = await UserModel.findById(req.params.id);
        //en caso de no encontrar usuario perzonalidamos mensaje
        if(!estudiante){
            return res.status(404).send({
                message: 'Estudiante no encontrado'
            })
        }
        res.send(estudiante);
    } catch (error) {
        res.status(500).send({
            message: 'Error al buscar el estudiante',
            error
        })
    }
});

//Medito Put de editar estudiante
routerUser.put('/estudiantes/:id', async (req, res) => {
    try {
        //metodo de moongose de buscarr y actualizar por ID
        const estudiante = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true});
        //en caso de no encontrar usuario perzonalidamos mensaje
        if(!estudiante){
            return res.status(404).send({
                message: 'No se encontro Estudiante'
            })
        }
        res.send(estudiante);
    } catch (error) {
        res.status(400).send(error);
    }
});

// metodo delete
routerUser.delete('/estudiantes/:id', async (req, res) => {
    try {
        const estudiante = await UserModel.findByIdAndDelete(req.params.id);
        //en caso de no encontrar usuario perzonalidamos mensaje
        if(!estudiante){
            return res.status(404).send({
                message: 'No se encontro el usuario',
                error
            });
        }
        res.send(estudiante)
    } catch (error) {
        res.status(400).send(error);
    }
})

export default routerUser;