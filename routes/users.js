//const router = require('express').Router();
const { Router } = require("express");
//
const User = require("../models/user.model");

//ruta del router
const router = Router();

//Primer EndPoint que maneja solicitudes HTTP GET 
//entrantes en la ruta de la URl de los usuarios.
router.route("/").get((req, res) => {
  //find() Método de Mongoose, que nos permite listar todos
  //Elementos de la base de datos de Mongo Atlas 
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

//Segundo Endpoint de nuestro rest 
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });
  newUser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
