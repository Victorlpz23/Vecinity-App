const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  facility: {
    type: String,
    required: true,
  },
  date: { 
    day: { type: Date },
    time: { 
      type: String,
      enum: ["10h-13h", "13h-16h", "16h-19h", "19h-22h"]
    }
  },
  neighbour: {
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

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;