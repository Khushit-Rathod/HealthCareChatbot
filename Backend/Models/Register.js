const mongoose = require("mongoose");

const heathcareaiSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwod: String,
});

const heathcareaiModel = mongoose.model("Register", heathcareaiSchema);
module.exports = heathcareaiModel;
