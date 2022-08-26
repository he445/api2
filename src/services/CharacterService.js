const Character = require('../models/CharacterModule.js');

const createCharacterService = (name, userId) =>
  Character.create({ name, user: userId });

const findAllCharactersService = () =>
  Character.find().sort({ _id: -1 }).populate('user');

const searchCharacterService = (name) =>
  Character.find({
    message: { $regex: `${name || ''}`, $options: 'i' },
  })
    .sort({ _id: -1 })
    .populate('user');

module.exports = {
  createCharacterService,
  findAllCharactersService,
  searchCharacterService,
};
