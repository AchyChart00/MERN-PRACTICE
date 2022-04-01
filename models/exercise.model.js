const { Schema, model } = require("mongoose");

const exerciseSecham = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//El nombre del modelo siempre debe de escribirse en mayuscula
module.exports = model("Exercise", exerciseSecham);
