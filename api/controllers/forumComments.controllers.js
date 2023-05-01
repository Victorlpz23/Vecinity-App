const ForumComment = require('../models/forumComment.model');
const User = require('../models/user.model')

module.exports.list = (req, res, next) => {
  ForumComment.find({ forumTopic: req.params.forumTopicId })
    .populate('author')
    .then((forumComments) => res.json(forumComments))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  req.body.community = req.user.community
  req.body.forumTopic = req.params.forumTopicId
  req.body.author = req.user.id
  ForumComment.create(req.body)
    .then((forumComment) => res.status(201).json(forumComment))
    .catch(next);
};



module.exports.delete = (req, res, next) => {
  ForumComment.deleteOne({ _id: req.forumComment.id })
    .then(() => res.status(204).send())
    .catch(next);
};