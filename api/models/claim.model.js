const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claimSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
    minlength: [2, "Title needs at least 2 chars"],
    maxlength: [20, "Title max 20 chars"],
  },
  description: {
    type: String,
    required: "Description is required",
    minlength: [20, "Description needs at least 20 chars"],
    maxlength: [140, "Description max 140 chars"],
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  state: {
    type: String,
    enum: ["Pending", "Solved"],
    default: "Pending",
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

