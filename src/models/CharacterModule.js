const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  user: { type: String },
  title: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = Character = mongoose.model('character', characterSchema);
