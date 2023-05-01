const ForumComment = require('../models/forumComment.model');

module.exports.list = (req, res, next) => {
  ForumComment.find({ forumTopic: req.params.forumTopicId })
    .then((forumComments) => res.json(forumComments))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  req.body.community = req.user.community
  req.body.author = req.user
  ForumComment.create(req.body)
    .then((forumComment) => res.status(201).json(forumComment))
    .catch(next);
};



module.exports.delete = (req, res, next) => {
  ForumComment.deleteOne({ _id: req.forumComment.id })
    .then(() => res.status(204).send())
    .catch(next);
};