const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
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
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Email must be valid"]
  },
  contactUrl: {
    type: String,
    match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
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

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
