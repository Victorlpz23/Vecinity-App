const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claimSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [2, "Claim title needs at least 2 chars"],
    maxlength: [20, "Claim title max 20 chars"],
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Claim description needs at least 20 chars"],
    maxlength: [140, "Claim description max 140 chars"],
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  state: {
    type: String,
    enum: ["Pending", "Solved"]
  }
  
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

const Claim = mongoose.model('Claim', claimSchema);
module.exports = Claim;

