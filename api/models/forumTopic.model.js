const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumTopicSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [2, "Title needs at least 2 chars"],
    maxlength: [20, "Claim title max 20 chars"],
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Description needs at least 20 chars"],
    maxlength: [140, "Description max 140 chars"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

const ForumTopic = mongoose.model('ForumTopic', forumTopicSchema);
module.exports = ForumTopic;