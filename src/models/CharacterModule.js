const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  user: { type: String },
  title: { type: String, required: true },
  text: { type: Array, required: true },
});

module.exports = Character = mongoose.model('character', characterSchema);
