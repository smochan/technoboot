const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  content: String,
  heading: String,
});

module.exports = mongoose.model("Data", dataSchema);
