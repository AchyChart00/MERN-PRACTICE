const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/dbConfig");
const mongoose = require("mongoose");

//Importamos y configuramos el paquete de variables de entorno
require("dotenv").config();

//Crea el servidor de express
const app = express();

//Creamos variable que almacena el puerto
//que va a utilizar nuestro server local
const port = process.env.PORT || 5000;

/*-------MIDDLEWARES ---------*/

//CORS Siempre necesario
app.use(cors());

app.use(express.static("public"));

//Express.json() Lee y analiza el cuerpo de solicitudes entrantes de
//de un middleware antes de que sus controladores esten disponibles, por
//bajo la req.body
app.use(express.json());
/*------- TERMINA MIDDLEWARES ---------*/

/*-------Base de datos ---------*/
dbConnection();
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB conexión establecida exitosamente");
});
/*------- TERMINA Base de datos ---------*/

/*------- RUTAS ---------*/

app.use("/exercises", require("./routes/exercises"));
app.use("/users", require("./routes/users"));

/*------- TERMINA RUTAS ---------*/

//Confirmamos el funcionamiento de nuestro
//servidor local por medio del siguiente comando
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
