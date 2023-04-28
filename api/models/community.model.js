const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: {
    type: String,
    maxLenght: [20, 'Community name max 20 chars']
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  address: {
    type: String,
    required: [true, 'Community address is required'],
  },
  facilities: [{
    type: String,
    enum: ["Paddle Court", "Multipurpose Room", "Gym"],
    minlength: [2, 'Community facilities needs at least 2 chars']
  }],
  imageUrl: {
    type: String,
    match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "Image URL must be valid"],
  },
  code: {
    type: String
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

communitySchema.virtual("claims", {
  ref: "Claim",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});

communitySchema.virtual("contacts", {
  ref: "Contact",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});

communitySchema.virtual("forumTopics", {
  ref: "ForumTopic",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});

communitySchema.virtual("forumComments", {
  ref: "ForumComment",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});

communitySchema.virtual("reservations", {
  ref: "Reservation",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});

communitySchema.virtual("events", {
  ref: "Event",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});

communitySchema.virtual("neighbours", {
  ref: "User",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});


const Community = mongoose.model('Community', communitySchema);
module.exports = Community;