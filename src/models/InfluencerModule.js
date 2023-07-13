const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  name: { 
    type: String, 
    required: true,
  },
  imageUrl: { 
    type: String, 
    required: true,
  },
  bio: { 
    type: String,
  },
  socialMediaHandles: {
    instagram: { type: String },
    twitter: { type: String },
    youtube: { type: String },
    facebook: { type: String },
  },
  followers: {
    instagram: { type: Number },
    twitter: { type: Number },
    youtube: { type: Number },
    facebook: { type: Number },
  },
  categories: {
    type: [String],
  },
});

module.exports = Influencer = mongoose.model('Influencer', influencerSchema);
