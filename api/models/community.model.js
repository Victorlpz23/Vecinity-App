const mongoose = require('mongoose');
const Schema = mongoose.Schema

const communitySchema = new Schema({
  name: {
    type: String,
    maxLenght: [20, 'Community name max 20 chars']
  },
  manager: {
    type: String,
  },
  address: {
    type: String
  },
  facilities: [{
    type: String,
    minlength: [2, 'Community facilities needs at least 2 chars']
  }],
  imageUrl: {
    type: String,
  },

}, {timestamps: true})

const Community = mongoose.model('Community', communitySchema);
module.exports = Community;