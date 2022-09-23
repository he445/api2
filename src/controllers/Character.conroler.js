const charactersServices = require('../services/CharacterService.js');

const createCharactersController = async (req, res) => {
  try {
    const { user, title, text } = req.body;
    const findBytitle = await charactersServices.findBytitleService(title);

    if (findBytitle) {
      res.status(400).send({ message: 'title already registered' });
    } else {
      const created = await charactersServices.createCharactersService({
        user,
        title,
        text,
      });
      if (!created) {
        res.status(400).send({ message: 'Error creating character' });
      } else {
        res.status(201).send(created);
      }
    }
  } catch (err) {
    res.status(400).send({ message: 'Error creating character' });
  }
};

const getAllCharactersController = async (req, res) => {
  try {
    const characterList = await charactersServices.findAllCharactersService();
    if (!characterList || characterList.length === 0) {
      res.status(404).send({ message: 'Characters not found' });
      console.log(characterList);
    } else {
      res.status(200).send(characterList);
    }
  } catch (err) {
    res.status(404).send({ message: 'Error getting characters' });
  }
};

const findByIdController = async (req, res) => {
  try {
    const foundChar = await charactersServices.findByIdService(req.params.id);
    if (!foundChar || foundChar.length === 0) {
      res.status(404).send({ message: 'Id not Found' });
    } else {
      res.status(200).send(foundChar);
    }
  } catch (err) {
    res.status(404).send({ message: 'Error finding id' });
  }
};

const updateCharactersController = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, text } = req.body;
    const updated = await charactersServices.updateCharactersService(id, {
      title,
      text,
    });
    if (!updated) {
      res.status(400).send({ message: 'Id not found' });
    } else {
      res.status(200).send(updated);
    }
  } catch (err) {
    res.status(400).send({ message: 'Error updating character' });
  }
};

const deleteCharacterController = async (req, res) => {
  try {
    const deleatedChar = await charactersServices.deleteCharacterService(
      req.params.id,
    );
    if (!deleatedChar) {
      res.status(404).send({ message: 'Id not Found' });
    } else {
      res.status(200).send(deleatedChar);
    }
  } catch (err) {
    res.status(404).send({ message: 'Error deleting character' });
  }
};

const searchCharactersController = async (req, res) => {
  try {
    const title = req.query.title;

    const searchedChar = await charactersServices.findBytitleService(title);
    if (!searchedChar) {
      res.status(404).send({ message: 'title not Found' });
    } else {
      res.status(200).send(searchedChar);
    }
  } catch (err) {
    res.status(404).send({ message: 'Error finding character' });
  }
};

module.exports = {
  createCharactersController,
  getAllCharactersController,
  findByIdController,
  updateCharactersController,
  deleteCharacterController,
  searchCharactersController,
};
