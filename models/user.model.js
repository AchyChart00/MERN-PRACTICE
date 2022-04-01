//Deestructuramos Schema y model
const {Schema, model} = require("mongoose");

//const Schema= mongoose.Schema;

//creamos nuestro esquema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true,

 }
);

//const User = mongoose.model('User', userSchema);
//module.exports = User;
module.exports = model("User", userSchema);