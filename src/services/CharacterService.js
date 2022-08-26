const Character = require('../models/CharacterModule.js');

const createCharactersService = async (body) => {
  return await Character.create(body);
};

const findAllCharactersService = () => Character.find().sort({ _id: -1 });

const findByNameService = async (name) => {
  return await Character.findOne({ name: name });
};
const findByIdService = async (id) => {
  return await Character.find({ _id: id });
};
const updateCharactersService = async (id, body) => {
  return await Character.findOneAndUpdate({ _id: id }, body, { new: true });
};
const deleteCharacterService = async (id) => {
  return await Character.findOneAndDelete({ _id: id });
};
module.exports = {
  createCharactersService,
  findAllCharactersService,
  findByNameService,
  findByIdService,
  updateCharactersService,
  deleteCharacterService,
};
