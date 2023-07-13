const influencerServices = require('../services/Influencers.services');

const createInfluencerController = async (req, res) => {
  try {
    const { userId, name, imageUrl, bio, socialMediaHandles, followers, categories } = req.body;
    const findByName = await influencerServices.findByNameService(name);

    if (findByName) {
      res.status(400).send({ message: 'Name already registered' });
    } else {
      const created = await influencerServices.createInfluencerService({
        userId,
        name,
        imageUrl,
        bio,
        socialMediaHandles,
        followers,
        categories,
      });

      if (!created) {
        res.status(500).send({ message: 'Error creating influencer' });
      } else {
        res.status(201).send(created);
      }
    }
  } catch (err) {
    res.status(500).send({ message: `Error creating influencer: ${err.message}` });
  }
};

const getAllInfluencersController = async (req, res) => {
  try {
    const influencerList = await influencerServices.findAllInfluencersService();
    if (!influencerList || influencerList.length === 0) {
      res.status(404).send({ message: 'Influencers not found' });
    } else {
      res.status(200).send(influencerList);
    }
  } catch (err) {
    res.status(500).send({ message: `Error getting influencers: ${err.message}` });
  }
};

const findByIdController = async (req, res) => {
  try {
    const foundInfluencer = await influencerServices.findByIdService(req.params.id);
    if (!foundInfluencer) {
      res.status(404).send({ message: 'Id not Found' });
    } else {
      res.status(200).send(foundInfluencer);
    }
  } catch (err) {
    res.status(500).send({ message: `Error finding influencer by id: ${err.message}` });
  }
};

const updateInfluencerController = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, imageUrl, bio, socialMediaHandles, followers, categories } = req.body;
    const updated = await influencerServices.updateInfluencerService(id, {
      name,
      imageUrl,
      bio,
      socialMediaHandles,
      followers,
      categories,
    });
    if (!updated) {
      res.status(404).send({ message: 'Id not found' });
    } else {
      res.status(200).send(updated);
    }
  } catch (err) {
    res.status(500).send({ message: `Error updating influencer: ${err.message}` });
  }
};

const deleteInfluencerController = async (req, res) => {
  try {
    const deletedInfluencer = await influencerServices.deleteInfluencerService(req.params.id);
    if (!deletedInfluencer) {
      res.status(404).send({ message: 'Id not Found' });
    } else {
      res.status(200).send(deletedInfluencer);
    }
  } catch (err) {
    res.status(500).send({ message: `Error deleting influencer: ${err.message}` });
  }
};

const searchInfluencersController = async (req, res) => {
  try {
    const name = req.query.name;

    const searchedInfluencer = await influencerServices.findByNameService(name);
    if (!searchedInfluencer) {
      res.status(404).send({ message: 'Name not Found' });
    } else {
      res.status(200).send(searchedInfluencer);
    }
  } catch (err) {
    res.status(500).send({ message: `Error finding influencer: ${err.message}` });
  }
};

module.exports = {
  createInfluencerController,
  getAllInfluencersController,
  findByIdController,
  updateInfluencerController,
  deleteInfluencerController,
  searchInfluencersController,
};

