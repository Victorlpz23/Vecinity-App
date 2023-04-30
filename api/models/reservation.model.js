const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  facility: {
    type: String,
    required: "Facility is required",
  },
  date: { 
    day: { type: Date },
    time: { 
      type: String,
      enum: ["10h-13h", "13h-16h", "16h-19h", "19h-22h"]
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;