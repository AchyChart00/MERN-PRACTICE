//const router = require('express').Router();
const { Router } = require("express");
const Exercise = require("../models/exercise.model");

const router = Router();

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date.parse(req.body.date);

  const newExcercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  //save() método de mongoose
  newExcercise
    .save()
    .then(() => res.json("Exersice added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  const { id } = req.params;
  console.log(id);
  Exercise.findById(id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      //save() método de mongoose
      exercise
        .save()
        .then(() => res.json("Exersice updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;

  Exercise.findById(id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  const { id } = req.params;

  Exercise.findById(id)
    .then(() => res.json("Eliminado Exitosamente"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
