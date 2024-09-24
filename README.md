-Cliente CLI (Command Line Interface)
Linea de comandos como lo visto en la anterior clase

-Cliente GUI (Graphical User Interface)
Gestor de base de datos grafico Ej. Mongo Compass

-Cliente Web
gestor de base de datos en la nube ej. MongoAtlas

-Cliente App (Aplicación)
Aplicaciones de distinto tipo x ej. Nuestra app de mongo

LINKS:
mongoCompass
https://www.mongodb.com/try/download/compass
mongo ATLAS
https://www.mongodb.com/products/platform/atlas-database
Mongoose
https://www.npmjs.com/package/mongoose


EJEMPLO DE CONSULTAS
-POST http://localhost:3037/estudiantes
{
    "nombre": "Jogelina",
    "apellido": "Sanchez",
    "edad": 30,
    "dni": "23659874",
    "curso": "Java",
    "nota": 10
}

-GET http://localhost:3037/estudiantes
-GET by ID http://localhost:3037/estudiantes/66f1f0cd36ddbb10557b75c6

-PUT http://localhost:3037/estudiantes/66f1d5d3961c32af9ea9b6f1
{
    "_id": "66f1d5d3961c32af9ea9b6f1",
    "nombre": "Mariano Actualizado",
    "apellido": "Garcia",
    "edad": 35,
    "dni": "33999030",
    "curso": "MERN",
    "nota": 8,
    "__v": 0
}

-DELETE http://localhost:3037/estudiantes/66f1d5d3961c32af9ea9b6f1