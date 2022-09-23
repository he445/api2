const Character = require('../models/CharacterModule.js');

const createCharactersService = async (body) => {
  return await Character.create(body);
};

const findAllCharactersService = () => Character.find();

const findBytitleService = async (title) => {
  return await Character.findOne({ title: title });
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
  findBytitleService,
  findByIdService,
  updateCharactersService,
  deleteCharacterService,
};
