const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: {
    type: String,
    maxLenght: [20, 'Community name max 20 chars']
  },
  manager: {
    type: String,
  },
  address: {
    type: String,
    required: [true, 'Community address is required'],
  },
  facilities: [{
    type: String,
    minlength: [2, 'Community facilities needs at least 2 chars']
  }],
  imageUrl: {
    type: String,
  },

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      delete ret.__v;
      ret.id = ret._id;
      delete ret._id;
      return ret;
    }
  }
});

const Community = mongoose.model('Community', communitySchema);
module.exports = Community;