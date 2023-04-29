const ForumTopic = require('../models/forumTopic.model');

module.exports.list = (req, res, next) => {
  ForumTopic.find()
    .populate('author')
    .populate('community')
    .then((forumTopics) => res.json(forumTopics))
    .catch(next);
};


module.exports.create = (req, res, next) => {
  req.body.community = req.user.community;
  ForumTopic.create(req.body)
    .then((forumTopic) => res.status(201).json(forumTopic))
    .catch(next);
};


module.exports.detail = (req, res, next) => res.json(req.forumTopic);



module.exports.update = (req, res, next) => {
  Object.assign(req.forumTopic, req.body);
  req.forumTopic.save()
    .then((forumTopic) => res.json(forumTopic))
    .catch(next);
};


module.exports.delete = (req, res, next) => {
  ForumTopic.deleteOne({ _id: req.forumTopic.id })
    .then(() => res.status(204).send())
    .catch(next);
};