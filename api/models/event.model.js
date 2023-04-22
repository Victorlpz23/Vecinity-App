const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
      type: String,
      required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Description needs at least 20 chars"],
    maxlength: [140, "Description max 140 chars"],
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
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

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;