const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  user: { type: String },
  text: { type: String, required: true },
});

module.exports = Character = mongoose.model('character', characterSchema);
