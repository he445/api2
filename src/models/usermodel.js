const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        // A simple regex for email validation
        return /\S+@\S+\.\S+/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  photo: {
    type: String,
    required: true,
  },
  influencers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Influencer',
  }],
});


UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

