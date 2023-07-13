const Influencer = require('../models/InfluencerModule.js');

const createInfluencerService = async (body) => {
  try {
    return await Influencer.create(body);
  } catch (error) {
    throw new Error(`Error creating influencer: ${error.message}`);
  }
};

const findAllInfluencersService = async () => {
  try {
    return await Influencer.find();
  } catch (error) {
    throw new Error(`Error finding all influencers: ${error.message}`);
  }
};

const findByNameService = async (name) => {
  try {
    return await Influencer.findOne({ name: name });
  } catch (error) {
    throw new Error(`Error finding influencer by name: ${error.message}`);
  }
};

const findByIdService = async (id) => {
  try {
    return await Influencer.findById(id);
  } catch (error) {
    throw new Error(`Error finding influencer by id: ${error.message}`);
  }
};

const updateInfluencerService = async (id, body) => {
  try {
    return await Influencer.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    throw new Error(`Error updating influencer: ${error.message}`);
  }
};

const deleteInfluencerService = async (id) => {
  try {
    return await Influencer.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting influencer: ${error.message}`);
  }
};

module.exports = {
  createInfluencerService,
  findAllInfluencersService,
  findByNameService,
  findByIdService,
  updateInfluencerService,
  deleteInfluencerService,
};
