const ForumComment = require('../models/forumComment.model');

module.exports.list = (req, res, next) => {
  ForumComment.find()
    .then((forumComments) => res.json(forumComments))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  ForumComment.create(req.body)
    .then((forumComment) => res.status(201).json(forumComment))
    .catch(next);
};



module.exports.delete = (req, res, next) => {
  ForumComment.deleteOne({ _id: req.forumComment.id })
    .then(() => res.status(204).send())
    .catch(next);
};